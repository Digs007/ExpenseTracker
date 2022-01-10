import { helper } from '@ember/component/helper';

export default helper(([num]) => {
  console.log(num);
  let p = num.toFixed(2).split('.');
  console.log(p);
  return `$ ${p[0]
    .split('')
    .reverse()
    .reduce((acc, num, i) => {
      return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
    }, '')}.${p[1]}`;
});
