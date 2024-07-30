Feature: Campaign Page Validation

  Scenario: Verify the presence of header, footer, and page components on the Campaign page
    Given I am on the campaign page
    Then I accept the cookies
    Then the header is present
    Then the page components are present
    Then the footer is present
