const loader = require('conficurse')
const config = loader.load('app/config')
const urls = Object.keys(config.routes.routemap)
module.exports = async function() {
  return { host: 'http://localhost:5000', urls }
}
