import runGame from '../index.js'

const getRandomNumber = max => Math.floor(Math.random() * max) + 1

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  return operators[Math.floor(Math.random() * operators.length)]
}

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      return null
  }
}

const generateRound = () => {
  const a = getRandomNumber(100)
  const b = getRandomNumber(100)
  const operator = getRandomOperator()
  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(calculate(a, b, operator))
  return [question, correctAnswer]
}

const playCalcGame = () => {
  runGame('What is the result of the expression?', generateRound)
}

export default playCalcGame
