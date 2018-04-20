Feature: Search Movie

Scenario: Don't find results when searching for an unregistered movie

  Given the movie "Spider-Man" is not registered
  When I search for "Spider-Man"
  Then I can not find any results
