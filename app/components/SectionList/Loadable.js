/**
 * Asynchronously loads the component for SectionList
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
