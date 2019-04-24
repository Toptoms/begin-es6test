//5-1 Import

import { hello, showError, default as anonyme } from './functions.js'

hello()
showError('error, stop it !')
//anonyme()
// 5-2 Export
import * as arrowF from './math.js'
const [a, b] = [7, 9]
console.log(arrowF.sum(a, b))
console.log(arrowF.sub(a, b))
console.log(arrowF.multiply(a, b))
console.log(arrowF.divide(a, b))
console.log(arrowF.pow(a, b))