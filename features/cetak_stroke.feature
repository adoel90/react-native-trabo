Feature: Cetak Stroke Laundry ?

Scenario: Berhasil cetak stroke
    Given Nama Customer adalah "Nina", pakaiannya 3 kg, total harga Rp "18000", di ambil pada tanggal "1 Februari 2019"
    When Nina laundry
    Then Nina get stroke 
