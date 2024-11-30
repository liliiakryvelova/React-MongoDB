console.log('first')

setTimeout(() => {
  console.log('second')
}, 1000)

console.log('third')

console.log('1')

setTimeout(() => {
  console.log(2)
}, 0)

console.log('3')
