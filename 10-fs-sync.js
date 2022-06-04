const {readFileSync, writeFileSync} = require('fs')
//above is same as below
//const fs = require('fs')
//fs.readFileSync
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)
writeFileSync('./content/result-sync.txt', 
`Here is the result : ${first}, ${second}`, //without flag, will simply override file with the content stated
{ flag : 'a' } //with flag, will simply create new content and add to the file
) 
console.log('done with task')
console.log('starting with the next one')