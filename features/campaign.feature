Feature: Campaign Page Validation

  @page-elements @campaign-page
  Scenario: Verify the presence of header, footer, and page components on the Campaign page
    Given I am on the campaign page
    Then I accept the cookies
    Then the header is present
    Then the page components are present
    Then the footer is present

  @campaign-page @local-submenu
  Scenario: Verify the Local Submenu
    Then the page introduction should be visible
    Then the localSubMenu should be present, and the first link should be active
    Then all links in the localSubMenu should be visible

  @campaign-page @slider-navigation
  Scenario: Verify the SliderWithIcons navigation using Carousel Sliders - 1st slider
    Then the introduction of the first slider should be visible and active
    Then the second and third slider should be inactive
    Then verify heading description and image
    Then the next slide should be enabled and previous slide should be disabled

  @campaign-page @slider-navigation
  Scenario: Verify the SliderWithIcons navigation using Carousel Sliders - 2nd slider
    When clicking on the next slide
    Then the introduction of the second slider should be visible and active
    Then verify heading description and image for second slider
    Then the next slide and previous slide should be enabled and clickable

  @campaign-page @slider-navigation
  Scenario: Verify the SliderWithIcons navigation using Carousel Sliders - 3rd slider
    When clicking on the next slide
    Then the introduction of the third slider should be visible and active
    And the previous slide should be enabled and clickable
    And the next slide should be disabled
    Then verify heading description and image for third slider

  @campaign-page @slider-navigation
  Scenario: Navigate back to the 2nd slider
    When clicking on the previous slide
    Then the introduction of the second slider should be visible and active
    Then verify heading description and image for second slider
    Then the next slide and previous slide should be enabled and clickable

  @campaign-page @slider-navigation
  Scenario: Navigate back to the 1st slider
    When clicking on the previous slide
    Then the introduction of the first slider should be visible and active
    Then the second and third slider should be inactive
    Then verify heading description and image
    Then the next slide should be enabled and previous slide should be disabled

  @campaign-page @product-list-carousel
  Scenario: Verify carousel visibility
    Then the ProductListCarousel header should be visible

  @campaign-page @product-list-carousel
  Scenario: Verify carousel contains cards
    Then the ProductListCarousel should contain cards
    Then the fisrt 4 ProductListCarousel card should be visible

  @campaign-page @product-list-carousel
  Scenario: Verify card details
    Then verify the cars details with title, description, image and links

  @campaign-page @product-list-carousel
  Scenario: Verify navigation buttons
    Then the ProductListCarousel next button should be enabled and previous button disabled

  @campaign-page @product-list-carousel
  Scenario: Navigate to the next card
    When click the next button
    Then the next card details should be visible with title, description, image and links

  @campaign-page @product-list-carousel
  Scenario: Navigate to the previous card
    And click on next button until you reach at the end
    And click on previous button until you reach at the start
    Then verify the cars details with title, description, image and links

  @campaign-page @media-highlights
  Scenario: Verify MediaHighlights visibility
    Then the MediaHighlights header should be visible
    Then verify the MediaHighlights with title, description and image
