const { client } = require('nightwatch-cucumber');

module.exports = {
  url: 'https://bazar-da-samy.lojaintegrada.com.br/',
  elements: {
    search_label: '#auto-complete',
    search_button: {
      selector: '//*[@id="form-buscar"]/button',
      locateStrategy: 'xpath'
    },
  },
  commands: [{
    search: function(movie) {
       return this.setValue('@search_label', movie)
                 .click('@search_button')
    }

  }]
}
