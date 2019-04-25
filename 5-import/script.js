//5-1 Import

import { hello, showError, default as lolCat } from './functions.js'

hello()
showError('error, stop it !')
//lolCat()
// 5-2 Export
import * as arrowCal from './math.js'
const [a, b] = [7, 9]
console.log(arrowCal.sum(a, b))
console.log(arrowCal.sub(a, b))
console.log(arrowCal.multiply(a, b))
console.log(arrowCal.divide(a, b))
console.log(arrowCal.pow(a, b))