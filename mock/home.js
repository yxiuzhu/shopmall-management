const homeDataMock = require('./data.json')

module.exports = [
  {
    url: '/home/list',
    type: 'get',
    response: config => {
      const items = homeDataMock.items
      return {
        code: 20000,
        data: homeDataMock
      }
    }
  }
]
