const basicMaths = require('./basicmath');
const lodash = require('lodash');
const cowsay = require('cowsay');
const xlsx = require('xlsx');
const fs = require('fs');

/** xlsx modeule
const workbook = xlsx.readFile('emp_details.xlsx');
const sheet = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheet];
const data = xlsx.utils.sheet_to_json(worksheet);
console.log( '==================== The excel data ====================');
console.log(data);
*/

/** fs Module
 * fs.writeFile('sample.txt', 'This is the first class of CAPM new course, learning the nodejs basics', (error) => {
    if (error) {
        console.log(error);
        return
    } else {
        console.log('File Ready');
    }
})
fs.readFile('sample.txt', 'utf8', (e, d) => {
    if (e) {
        return;
    } else {
        console.log(d);
    }
})
 */

// var nums = [12,23,90,45,45,67,69,98,78,74,34,98,23,123,45,67];
// console.log(basicMaths.add(8,2,12));
// console.log(basicMaths.sub(90,8,2));
// console.log(basicMaths.multi(8,2,1,2,3));
// console.log(basicMaths.divd(8,2,4));
// console.log(lodash.min(nums));
