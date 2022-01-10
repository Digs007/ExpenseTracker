import { helper } from '@ember/component/helper';

export default helper(([amount]) => (amount > 0 ? true : false));
