function my_setInterval(fun, timeout){
    setTimeout(() => {
        fun()
        my_setInterval(fun, timeout)
    }, timeout)
}
my_setInterval(() => {
    console.log('sugi pula!')
}, 1000)
my_setInterval(() => {
    console.log('muie!')
}, 1000)

