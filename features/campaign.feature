Feature: Campaign Page Validation

  Scenario: Verify the presence of header, footer, and page components on the Campaign page
    Given I am on the campaign page
    Then I accept the cookies
    Then the header is present
    Then the page components are present
    Then the footer is present

  Scenario: Verify the Local Submenu
    Then the page introduction should be visible
    Then the localSubMenu should be present, and the first link should be active
    Then all links in the localSubMenu should be visible

  Scenario: Verify the SliderWithIcons navigation using Carousel Sliders
# 1st slider
    Then the introduction of the first slider should be visible and active
    Then the second and third slider should be inactive
    Then verify heading description and image
    Then the next slide should be enabled and previous slide should be disabled
# 2nd slider
    When clicking on the next slide
    Then the introduction of the second slider should be visible and active
    Then verify heading description and image for second slider
    Then the next slide and previous slide should be enabled and clickable
#3rd slider
    When clicking on the next slide
    Then the introduction of the third slider should be visible and active
    And the previous slide should be enabled and clickable
    And the next slide should be disabled
    Then verify heading description and image for third slider
#navigate back to 2nd slider
    When clicking on the previous slide
    Then the introduction of the second slider should be visible and active
    Then verify heading description and image for second slider
    Then the next slide and previous slide should be enabled and clickable
#navigate back to 1st slider
    When clicking on the previous slide
    Then the introduction of the first slider should be visible and active
    Then the second and third slider should be inactive
    Then verify heading description and image
    Then the next slide should be enabled and previous slide should be disabled
