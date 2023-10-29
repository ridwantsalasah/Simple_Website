  // Fungsi untuk menampilkan notifikasi
  function confirmSubmissionT1() {
    // Periksa apakah semua bidang yang wajib diisi telah terisi
    const fname = document.querySelector("input[name='fname']").value;
    const notelp = document.querySelector("input[name='notelp']").value;
    const alamat = document.querySelector("textarea[name='alamat']").value;
    const kirim = document.querySelector("input[name='kirim']:checked");
    const menupilihan = document.querySelector("input[name='menupilihan']:checked");
    const diklat = document.querySelectorAll("input[name='diklat']:checked");
    const jmlpesanan = document.getElementById("jmlpesanan").value;
    const bayar = document.querySelector("input[name='bayar']:checked");
    const rek = document.getElementById("rek").value;

    if (
      fname.trim() === '' ||
      notelp.trim() === '' ||
      alamat.trim() === '' ||
      kirim === null ||
      menupilihan === null ||
      diklat.length === 0 ||
      jmlpesanan === '0' ||
      bayar === null ||
      rek === ''
    ) {
      alert("Silahkan lengkapi semua data terlebih dahulu!");
    } else {
      if (confirm("Apakah yakin data sudah benar?")) {
        // Jika pengguna menekan OK, maka form akan disubmit
        document.querySelector("form").submit();
        
        // Tampilkan notifikasi "Terima Kasih sudah memesan :)"
        alert("Terima Kasih sudah memesan :)");
      }
    }
  }

// Fungsi untuk menampilkan notifikasi untuk t3
function confirmSubmissionT3() {
  // Periksa apakah semua bidang yang wajib diisi untuk t3 telah terisi
  const username = document.querySelector("input[name='username']").value;
  const pass = document.querySelector("input[name='pass']").value;
  const email = document.querySelector("input[name='email']").value;
  const images = document.querySelector("input[id='images']").value;

  console.log("username:", username);
  console.log("pass:", pass);
  console.log("email:", email);

  if (username.trim() === '' || pass.trim() === '' || email.trim() === '' || images.trim() === '') {
    alert("Silahkan lengkapi semua data terlebih dahulu!");
  } else {
    if (confirm("Apakah yakin data sudah benar?")) {
      // Jika pengguna menekan OK, maka form t3 akan disubmit
      document.querySelector("form[name='formulir-member']").submit();

      // Tampilkan notifikasi "Data member tersimpan :)"
      alert("Data member tersimpan :)");
    }
  }
}

// Menambahkan event listener pada tombol "Simpan Pesanan" (t1)
document.querySelector("input[name='t1']").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah pengiriman form otomatis
  confirmSubmissionT1();
});

// Menambahkan event listener pada tombol "Simpan" (t3)
document.querySelector("input[name='t3']").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah pengiriman form otomatis
  confirmSubmissionT3();
});


  document.getElementById('images').addEventListener('change', function (e) {
    var preview = document.getElementById('preview');
    var dropspan = document.getElementById('dropspan'); // Tambahkan ini
  
    var file = e.target.files[0];
    var reader = new FileReader();
  
    reader.onload = function () {
      preview.src = reader.result;
      dropspan.style.display = 'none'; // Menghilangkan span ketika gambar diunggah
    };
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
      dropspan.style.display = 'block'; // Menampilkan span jika tidak ada gambar yang dipilih
    }
  });