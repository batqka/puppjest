Feature: Chrome Extension smoke

#  Scenario: Testing valid logging in
#    Given Open members sign in page
#    And I type into the login field - batqka454545@gmail.com
#    And I type into the pass field - 153258
#    When I press login button
#    Then I see members dashboard page

  @amazon_com
  Scenario: BSR containers are shown on the amazon.com search page
    Given authorized user
    When I open amazon search page
    Then I see BSR containers near products


#  Scenario: Some Context tests
#    Given authorized user
#    Then check it
