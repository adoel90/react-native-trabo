Feature: Login sebagai Administrator ?

Scenario: Berhasil Login
    Given You want to login with username adalah "administrator", passwordnya adalah "12345678"
    When click button Login
    Then You get launcher like loader spinner 
    And You get landing page "Booking"


Scenario: Gagal Login
    Given You want to login with username adalah "administratoR", passwordnya adalah "12345678"
    When click button Login
    Then You get launcher like loader spinner 
    And You get message "Username is worng ! Try other user !"
    