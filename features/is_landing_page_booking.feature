Feature: Landing Page Booking ?
    Date-picker memiliki feature Active/ Non-Active days,
    Recent Order memiliki feature menampilkan order- order terbaru,
    Check-in memimiliki feature menampilkan detail of check-in customer


Scenario: Berhasil tampil component Date-picker 
    Given You are inside Landing Page - Booking
    When load/ inisiate page
    Then You get feature Date-picker


Scenario: Berhasil tampil component Date-picker 
    Given You are inside Landing Page - Booking
    When load/ inisiate page
    Then You get feature Date-picker


Scenario: [Recent Order] - Berhasil muncul "Recent Orders" beserta button "See More"
    Given You are You are inside Landing Page - Booking
    When load/ inisiate page
    Then You get feature Recent Order
    And You get "3" list 

Scenario: [Recent Order] - Berhasil informasi menampilkan order- order terbaru 
    Given You click button "See More"
    When clicked button "See More"
    Then You move page to page of "Tab Manifest"
    And You get names of products

Scenario: List Customer Info

Scenario: [Check-in] - Berhasil memunculkan detail Check-in
    Given You click row product
    When clicked one row
    Then You move to page Check-in detail
