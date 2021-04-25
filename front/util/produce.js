//인터넷 익스플로어 지원하게 하는 확장(immer 때문)

import { enableES5, produce } from 'immer';

export default (...args) => {
  enableES5();
  return produce(...args);
};
