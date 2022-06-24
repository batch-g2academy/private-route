# LOGIN TO YOUR JAVA REST API

- Buatlah halaman login dimana jika user menekan tombol login function akan hit/memanggil API login Java kalian

- Buatlah API dengan http request POST '/login' menggunakan Java 
    - body:
        - username: String
        - password: String
    - response:
        - token: String
        - username: String
        - balance: Number

- Buatlah 4 route:
  - '/' untuk Home; bisa diakses bahkan sebelum login
  - '/product' untuk Product page; hanya bisa diakses setelah login dan menampilkan list product (memanggil API dari tugas sebelumnya)
  - '/profile' untuk Profile page menampilkan data user login; hanya bisa diakses setelah login
  - '/login' untuk Login page (memanggil API login kalian)

- Jika '/product' ataupun '/profile' diakses tetapi belum login, maka redirect lah ke login page 

# CORS DI SPRING (agar hasil Fetch API springboot kalian bisa ditampilkan di browser)
- https://spring.io/guides/gs/rest-service-cors/
