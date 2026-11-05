
// Menampilkan pesan ketika website dibuka
console.log("Website Rental Mobil DriveGo berhasil dijalankan!");

// Contoh interaksi tombol
const tombol = document.querySelectorAll(".btn");

tombol.forEach(function(item) {
    item.addEventListener("click", function() {
        console.log("Tombol diklik!");
    });
});
