#!/usr/bin/env node
/**
 * Created by Freeman on 2017/6/15.
 */
const inquirer = require('inquirer')
const ora = require('ora')
const download = require('download-git-repo')
const home = require('user-home')
const path = require('path')
const logger = require('./lib/logger')

const template = 'test-hodor'

const tmp = path.join(home, '.hodor-templates', template.replace(/\//g, '-'))

const spinner = ora('downloading template')
spinner.start()
// Remove if local template exists

download(`https://github.com:zhhyang/react-router-v4`, tmp, {clone: true}, function (err) {
  spinner.stop()
  if (err) logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())
  console.log()
  logger.success('Generated "%s".', template)
})
