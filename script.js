document.addEventListener('DOMContentLoaded', function () {
  const weddingDate = new Date('2025-12-17T08:00:00+07:00');

  simplyCountdown('#wedding-countdown', {
    year: weddingDate.getFullYear(),
    month: weddingDate.getMonth() + 1,
    day: weddingDate.getDate(),
    hours: weddingDate.getHours(),
    minutes: weddingDate.getMinutes(),
    seconds: weddingDate.getSeconds(),
    words: {
      days: { root: 'Hari', lambda: (root, n) => root },
      hours: { root: 'Jam', lambda: (root, n) => root },
      minutes: { root: 'Menit', lambda: (root, n) => root },
      seconds: { root: 'Detik', lambda: (root, n) => root },
    },
    plural: false,
    zeroPad: true,
    sectionClass: 'simply-section',
    amountClass: 'simply-amount',
    wordClass: 'simply-word',
    refresh: 1000,
    // onEnd: function () {
    //   document.querySelector('#wedding-countdown').style.display = 'none';
    //   const msg = document.createElement('div');
    //   msg.classList.add('finished');
    //   msg.textContent = '💞 Selamat Menempuh Hidup Baru 💞';
    //   document.querySelector('#hero').appendChild(msg);
    //   msg.style.display = 'block';
    //   return false;
    // },
  });
});

function salinRekening() {
  const text = document.getElementById('rekening').innerText.trim();
  const btn = document.getElementById('btnSalin');

  navigator.clipboard
    .writeText(text)
    .then(() => {
      const awal = btn.innerHTML;
      // ✅ Ganti jadi ikon centang + teks
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
        Copy
      `;
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = awal; // balikin lagi ke tampilan awal
        btn.disabled = false;
      }, 1500);
    })
    .catch(() => {
      // fallback kalau clipboard gagal
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);

      btn.innerHTML = `✅ Disalin`;
      setTimeout(() => (btn.innerHTML = 'Salin'), 1500);
    });
}
function salinRekening2() {
  const text = document.getElementById('rekening2').innerText.trim();
  const btn = document.getElementById('btnSalin2');

  navigator.clipboard
    .writeText(text)
    .then(() => {
      const awal = btn.innerHTML;
      // ✅ Ganti jadi ikon centang + teks
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
        Copy
      `;
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = awal; // balikin lagi ke tampilan awal
        btn.disabled = false;
      }, 1500);
    })
    .catch(() => {
      // fallback kalau clipboard gagal
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);

      btn.innerHTML = `✅ Disalin`;
      setTimeout(() => (btn.innerHTML = 'Salin'), 1500);
    });
}
function salinRekening3() {
  const text = document.getElementById('rekening3').innerText.trim();
  const btn = document.getElementById('btnSalin3');

  navigator.clipboard
    .writeText(text)
    .then(() => {
      const awal = btn.innerHTML;
      // ✅ Ganti jadi ikon centang + teks
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
        Copy
      `;
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = awal; // balikin lagi ke tampilan awal
        btn.disabled = false;
      }, 1500);
    })
    .catch(() => {
      // fallback kalau clipboard gagal
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);

      btn.innerHTML = `✅ Disalin`;
      setTimeout(() => (btn.innerHTML = 'Salin'), 1500);
    });
}

const btnGift = document.querySelector('.btn-gift-card');
const giftBack = document.querySelector('.gift-back');

btnGift.addEventListener('click', () => {
  giftBack.classList.toggle('show');
  btnGift.classList.toggle('active');
});

// data base

const form = document.getElementById('formUcapan');
const daftarUcapan = document.getElementById('daftarUcapan');
const pesanTerimaKasih = document.getElementById('pesanTerimaKasih'); // elemen buat ucapan

// Cek apakah sudah pernah kirim (pakai localStorage)
const namaTersimpan = localStorage.getItem('namaPengirim');

// Jika sudah pernah kirim, sembunyikan form & tampilkan ucapan terima kasih
if (namaTersimpan) {
  form.style.display = 'none';
  pesanTerimaKasih.innerHTML = `
   <div>
      Terima kasih <span style="font-weight:bold; color:#c79c55;">${namaTersimpan}</span>
      atas ucapan & doa yang diberikan 💛🙏
    </div>
  `;
  pesanTerimaKasih.style.display = 'block';
}

// Event submit form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  if (nama && pesan) {
    const waktu = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    // Kirim ke Firebase
    firebase.database().ref('bukutamu').push({
      nama: nama,
      pesan: pesan,
      waktu: waktu,
    });

    // Simpan ke localStorage supaya nanti terdeteksi
    localStorage.setItem('namaPengirim', nama);

    // Sembunyikan form setelah mengirim
    form.style.display = 'none';

    // Tampilkan pesan terima kasih
    pesanTerimaKasih.innerHTML = `
      <div>
        Terima kasih <span style="font-weight:bold; color:#3e3e3e;">${nama}</span>
        atas ucapan & doa terbaik yang diberikan 💛🙏
      </div>
    `;
    pesanTerimaKasih.style.display = 'block';

    form.reset();
  }
});

// Menampilkan ucapan secara realtime
firebase
  .database()
  .ref('bukutamu')
  .on('value', (snapshot) => {
    daftarUcapan.innerHTML = '';

    snapshot.forEach((child) => {
      const data = child.val();

      const li = document.createElement('li');
      li.innerHTML = `
          <span class="nama">${data.nama}</span>
          <span class="pesan">${data.pesan}</span>
          <span class="tanggal">${data.waktu}</span>
        `;

      daftarUcapan.prepend(li);
    });
  });
// untuk menjalankan dissabble scrol
scrollTop = window.pageYOffset || document.documentElement.scrollTop;
scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
function disableScroll() {
  if (scrollTop === 0 && scrollLeft === 0) {
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  const rootElement = document.querySelector(':root');
  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function () {};
  const rootElement = document.querySelector(':root');
  rootElement.style.scrollBehavior = 'smooth';
  playAudio();
}

window.addEventListener('load', () => {
  if (scrollTop !== 0 || scrollLeft !== 0) {
    window.scrollTo(0, 0);
  }
  disableScroll();
});

const audio = document.getElementById('song');
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
let isPlaying = false;
function playAudio() {
  audioIconWrapper.style.display = 'flex';
  audio.volume = 0.5;
  audio.play();
  isPlaying = true;
}
audioIconWrapper.onclick = function () {
  if (isPlaying) {
    audio.pause();
    audioIconWrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
</svg>`;
  } else {
    audio.play();
    audioIconWrapper.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-disc"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
          />
          <path
            d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1m4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5"
          />
        </svg>`;
  }
  isPlaying = !isPlaying;
};

// animasi
// ====== FORCE ANIMASI RIWAYAT (debuggable & robust) ======
// Pilih semua elemen animasi
// NATURAL AOS-LIKE VERSION
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll(`
    .hidden-y,.hidden-x,.hidden-right,
    .hidden-scale,.hidden-rotate,.hidden-bounce,
    .hidden-smooth,.hidden-card
  `);

  function countUp(el, target, duration = 2300) {
    if (el.dataset.done === 'true') return;
    el.dataset.done = 'true';

    const start = performance.now();
    const from = 0;

    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3); // cubic out
      el.textContent = Math.floor(from + (target - from) * ease);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // natural random delay
        const random = Math.floor(Math.random() * 180);
        el.style.transitionDelay = random + 'ms';

        el.classList.add('tampil');

        const num = el.querySelector('.count-number');
        if (num) {
          const t = parseInt(num.dataset.target || num.textContent);
          num.textContent = '0';
          num.classList.add('show');
          countUp(num, t);
        }

        observer.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -20px 0px' },
  );

  items.forEach((el) => observer.observe(el));
});
