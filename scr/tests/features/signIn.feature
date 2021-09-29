Feature: Logging in

#  Scenario: Testing valid logging in
#    Given Open members sign in page
#    And I type into the login field - batqka454545@gmail.com
#    And I type into the pass field - 153258
#    When I press login button
#    Then I see members dashboard page

  Scenario: BSR containers are shown on the amazon.com search page
    Given authorized user
    When I open amazon search page
    Then I see BSR containers near products

#  Scenario: kek lol, let's do it again
#    Given Open members sign in page
#    And Type into the login field - batqka454545@gmail.com
#    And Type into the pass field - 153258
#    When I press login button
#    Then I see members dashboard page
