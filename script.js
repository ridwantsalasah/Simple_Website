  // Fungsi untuk menampilkan notifikasi
  function confirmSubmission() {
    // Periksa apakah data sudah terisi
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='pass']").value;
    const email = document.querySelector("input[name='email']").value;

    if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
      alert("Silahkan masukkan data terlebih dahulu!");
    } else {
      if (confirm("Apakah yakin data sudah benar?")) {
        // Jika pengguna menekan OK, maka form akan disubmit
        document.querySelector("form").submit();
      }
    }
  }

  // Fungsi untuk menampilkan notifikasi
  function confirmSubmission() {
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

  // Menambahkan event listener pada tombol "Simpan Pesanan" (t1)
  document.querySelector("input[name='t1']").addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah pengiriman form otomatis
    confirmSubmission();
  });

document.getElementById('images').addEventListener('change', function (e) {
    var preview = document.getElementById('preview');
    var file = e.target.files[0];
    var reader = new FileReader();
  
    reader.onload = function () {
      preview.src = reader.result;
    };
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  });  