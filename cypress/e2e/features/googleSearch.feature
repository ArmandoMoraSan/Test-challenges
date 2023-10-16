Feature: Google Search and Wikipedia Check

    Background:
        Given I visit Google
        And I reject Google cookies

    Scenario: Access Google and check title
        Then I should see the title as "Google"

    Scenario: Search for a value in Google
        When I search for a value
        Then the title should display the search value with " - Buscar con Google"

    Scenario: Search for a term and select Wikipedia link
        When I search for a value
        And I select the Wikipedia link
        # Then Wikipedia page is displayed

