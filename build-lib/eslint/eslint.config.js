
const Module = require('module')

// Hack Node module system to recognize our plugin.
Module._resolveFilename = (original => function (request, requester) {
  if (request === 'eslint-plugin-taskworld-client') {
    return require.resolve('./index')
  } else {
    return original.apply(this, arguments)
  }
})(Module._resolveFilename)

module.exports = {
  plugins: [
    'taskworld-client'
  ],
  rules: {
    'taskworld-client/date-time-format': 'error',
    'taskworld-client/reportError': 'error',
    'taskworld-client/eventLog': 'error',
    'taskworld-client/keyCode': 'warn',
  }
}
