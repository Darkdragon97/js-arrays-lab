const foods = []
console.log('Exercise 1 resilt:', foods)

foods[0] = 'pizza'
foods.push = 'cheeseburger'
console.log('Exercise 2 result:', foods)

foods.unshift = 'taco'
console.log('Exercise 3 result:', foods)

favfood = foods
favFood = ['pizza']
console.log('Exercise 4 result:', favFood)

foods.splice(2, 0, 'tofu')
console.log('Exercise 5 result:', foods)

foods.splice(0, 1, 'sushi', 'cupcake')
console.log('Exercise 6 result:', foods)

const yummy = foods.slice(0, -1)
console.log('Exercise 7 result:', yummy)

const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx)

allFoods = foods.join('->')
console.log('Exercise 9 result:', allFoods)

const hasSoup = foods.includes('soup')
console.log('Exercise 10 result:', hasSoup)

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
const odds = []
nums.forEach((num) => {
  if (num % 2 !== 0) {
    odds.push(num)
  }
})
console.log('Exercise 11 result:', odds)

const Fizz = [],
  Buzz = [],
  FizzBuzz = []
nums.forEach((num) => {
  if (num % 3 === 0) Fizz.push(num)
  if (num % 5 === 0) Buzz.push(num)
  if (num % 3 === 0 && num % 5 === 0) FizzBuzz.push(num)
})
console.log('Exercise 12 Results:')
console.log('  Fizz:', Fizz)
console.log('  Buzz:', Buzz)
console.log('  FizzBuzz:', FizzBuzz)

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
]
const numList = numArrays[numArrays.length - 1]
console.log('Exercise 13 result:', numList)

const num = numArrays[2][1]
console.log('Exercise 14 result:', num)

// let total = 0
// console.log('Exercise 15 result:\n', total)
