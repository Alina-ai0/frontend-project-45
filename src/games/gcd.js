import runGame from '../index.js'

const getRandomNumber = max => Math.floor(Math.random() * max) + 1

const findGcd = (a, b) => {
  let x = a
  let y = b
  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }
  return x
}

const generateRound = () => {
  const a = getRandomNumber(100)
  const b = getRandomNumber(100)
  const question = `${a} ${b}`
  const correctAnswer = String(findGcd(a, b))
  return [question, correctAnswer]
}

const playGcdGame = () => {
  runGame('Find the greatest common divisor of given numbers.', generateRound)
}

export default playGcdGame
