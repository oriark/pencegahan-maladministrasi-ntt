const LINKS = {
  pengaduan: 'https://ombudsman.go.id/pengaduan',
  penilaian2026: 'https://oriark.github.io/bukti-dukung-opini2026/', // Isi URL aplikasi Bukti Dukung Penilaian Maladministrasi 2026
  opini: 'https://ombudsman.go.id/artikel',
  instagram: 'https://www.instagram.com/ombudsmanri137.ntt/',
  facebook: 'https://www.facebook.com/Perwakilan.Ombudsman.RI.NTT/',
  youtube: 'https://www.youtube.com/@OmbudsmanRI',
  website: 'https://www.ombudsman.go.id/',
  waPengaduan: 'https://wa.me/628111453737',
  officePhone: 'tel:+623808479049',
  emailPengaduan: 'mailto:pengaduan.ntt@ombudsman.go.id'
};

document.querySelectorAll('[data-link]').forEach(el => {
  const key = el.dataset.link;
  const url = LINKS[key];
  if (url && url !== '#') {
    el.href = url;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  } else {
    el.addEventListener('click', e => {
      e.preventDefault();
      alert('Tautan ini belum diisi. Silakan ubah URL pada bagian LINKS di file script.js.');
    });
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
