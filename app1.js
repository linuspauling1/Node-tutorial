const {readFile, writeFile} = require('fs')
console.log('start')
readFile('f1.txt','ascii',(err, data) => {
    if(err){
        console.log(err)
        return
    }
    const string1 = data
    readFile('f2.txt','ascii',(err, data) => {
        if(err){
            console.log(err)
            return
        }
        const string2 = data
        writeFile('f3.txt',`${string1}, ${string2}`,(err, data) => {
            if(err){
                console.log(err)
                return
            }
            console.log('finished!')
        })
    })
})
console.log('stop')