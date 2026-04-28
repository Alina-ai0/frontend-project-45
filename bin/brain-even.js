#!/usr/bin/env node
import greetUser from '../src/cli.js'
import playEvenGame from '../src/games/even.js'

const userName = greetUser()
playEvenGame(userName)
