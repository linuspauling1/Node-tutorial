const {readFile,writeFile} = require('fs')
var string1, string2
console.log('start')
readFile('f1.txt','ascii',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    string1 = data
})
readFile('f2.txt','ascii',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    string2 = data
})
writeFile('f4.txt',`${string1}, ${string2}`,(err,data) => {
    if(err){
        console.log(err)
        return
    }
    console.log('finished!')
})
console.log('stop')