const gm = require('./gm_dat.js')

export default function galmoji (s) {
  return s.split('').reduce((acc, item) => {
    let s = (gm[item]) ? ` ${gm[item]} ` : item
    acc += s
    return acc
  })
};
