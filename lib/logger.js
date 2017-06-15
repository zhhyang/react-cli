/**
 * Created by Freeman on 2017/6/15.
 */
const chalk = require('chalk')
const format = require('util').format

/**
 * Prefix.
 */
const prefix = '   hodor'
const sep = chalk.gray('·')

/**
 * Log a `message` to the console.
 *
 */
exports.log = function () {
  const msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}

/**
 * Log an error `message` to the console and exit.
 *
 * @param {String} message
 */

exports.fatal = function (message) {
  if (message instanceof Error) {
    message = message.message.trim()
  }
  const msg = format.apply(format, arguments)
  console.error(chalk.red(prefix), sep, msg)
  process.exit(1)
}

/**
 * Log a success `message` to the console and exit.
 *
 */

exports.success = function () {
  var msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}