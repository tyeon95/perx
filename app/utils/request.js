const { API_PREFIX } = process.env;

/**
 * wrapper to include JSON header by default
 * @param  {string} url request url endpoint
 * @param  {object} options request options object
 * @return {object | ResponseError} response of request or ResponseError
 */
const fetchJSON = async (url, options = {}) => {
  const requestHeader = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      ...requestHeader,
    },
  });

  return checkStatus({
    response,
    body: await getResponseBody(response),
  });
};

/**
 * @param  {response} response
 * @return {object} response body object
 */
const getResponseBody = response => {
  const contentType = response.headers.get('content-type');
  return contentType && contentType.indexOf('json') >= 0
    ? response.text().then(tryParseJSON)
    : response.text();
};

/**
 * @param  {string} json json string
 * @return {object | Error} json object or parse error
 */
const tryParseJSON = json => {
  if (!json) return null;

  try {
    return JSON.parse(json);
  } catch (e) {
    throw new Error(`Failed to parse unexpected JSON response: ${json}`);
  }
};

/**
 * Response Error
 * @param       {number} status http status code
 * @param       {object} response http response
 * @param       {object} body http response body
 * @constructor
 */
function ResponseError(status, response, body) {
  this.name = 'ResponseError';
  this.status = status;
  this.response = response;
  this.body = body;
}

ResponseError.prototype = Error.prototype;

/**
 * @param  {object} response http response
 * @param  {object} body http response body
 * @return {object | ResponseError} http response or ResponseError
 */
const checkStatus = ({ response, body }) => {
  if (response.ok) {
    return { response, body };
  }
  throw new ResponseError(response.status, response, body);
};

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default async function request(endpoint, options = {}) {
  const result = await fetchJSON(API_PREFIX + endpoint, options);
  return result.body;
}
