Feature: Logging in

  Scenario Outline: Testing valid logging in
    Given Open members sign in page
    And Type into the login field - batqka454545@gmail.com
    And Type into the pass field - 153258
    When I press login button
    Then I see members dashboard page
    Examples:
