document.addEventListener('DOMContentLoaded', function () {
  const weddingDate = new Date('2025-12-17T00:00:00+07:00');

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
    onEnd: function () {
      document.querySelector('#wedding-countdown').style.display = 'none';
      const msg = document.createElement('div');
      msg.classList.add('finished');
      msg.textContent = '💞 Selamat Menempuh Hidup Baru 💞';
      document.querySelector('#hero').appendChild(msg);
      msg.style.display = 'block';
      return false;
    },
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

const btnGift = document.querySelector('.btn-gift-card');
const giftBack = document.querySelector('.gift-back');

btnGift.addEventListener('click', () => {
  giftBack.classList.toggle('show');
  btnGift.classList.toggle('active');
});
