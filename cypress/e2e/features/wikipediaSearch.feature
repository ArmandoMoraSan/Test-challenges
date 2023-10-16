Feature: Wikipedia Search

  Background: I am on the Wikipedia page for a specific topic
    Given I am on the Wikipedia page

  Scenario: Validate the Wikipedia page title
    Then the title should match the Wikipedia page

  Scenario: Find the year of the first automatic process
    When I search for the year of the first automatic process
    Then I should see the year of the first automatic process