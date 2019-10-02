/**
 *
 * Asynchronously loads the component for Head
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
