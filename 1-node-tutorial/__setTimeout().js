// starting operating Systm process
console.log('first');
// setTimeout is asynchronous function  which is why it is not executed immediately
setTimeout(() => {
    console.log('second');
}, 0);

console.log('third');
// completeed and exited operating system process

