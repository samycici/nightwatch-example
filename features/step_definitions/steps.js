const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const search_page = client.page.search_page();
const result_page = client.page.result_page();

Given('the movie {string} is not registered', (movie) => {
         });

When('I search for {string}', (movie) =>{
        return search_page.navigate()
        .search(movie);
          });

Then('I can not find any results', () => {

      return result_page.assert.containsText ('@results', 'não encontrou nenhum resultado')
        });
