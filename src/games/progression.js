import runGame from '../index.js'

const getRandomNumber = max => Math.floor(Math.random() * max) + 1

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const start = getRandomNumber(20)
  const step = getRandomNumber(10)
  const length = getRandomNumber(6) + 5
  const progression = generateProgression(start, step, length)
  const hiddenIndex = getRandomNumber(length) - 1
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  return [question, correctAnswer]
}

const playProgressionGame = () => {
  runGame('What number is missing in the progression?', generateRound)
}

export default playProgressionGame
