Feature: Campaign Page Validation

  Scenario: Verify the presence of header, footer, and page components on the Campaign page
    Given I am on the campaign page
    Then I accept the cookies
    Then the header is present
    Then the page components are present
    Then the footer is present

  Scenario: Verify the localSubMenu
    Then the page introduction should be visible
    Then the localSubMenu should be present, and the first link should be active
    Then all links in the localSubMenu should be visible
