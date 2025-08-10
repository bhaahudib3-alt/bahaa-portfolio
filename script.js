
// Year & filters
document.getElementById('year').textContent = new Date().getFullYear();
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card[data-category]');
chips.forEach(ch => {
  ch.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    ch.classList.add('active');
    const f = ch.dataset.filter;
    cards.forEach(card => {
      card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
    });
  });
});

// Lightbox (image + external link)
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImg');
const lbTitle = document.getElementById('lightboxTitle');
const lbDesc = document.getElementById('lightboxDesc');
const lbLink = document.getElementById('lightboxLink');
const lbClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.thumb').forEach(btn => {
  btn.addEventListener('click', () => {
    lbImg.src = btn.dataset.poster || btn.querySelector('img')?.src || '';
    lbTitle.textContent = btn.dataset.title || '';
    lbDesc.textContent = btn.dataset.desc || '';
    lbLink.href = btn.dataset.link || '#';
    lb.removeAttribute('hidden');
  });
});

lbClose.addEventListener('click', () => lb.setAttribute('hidden',''));
lb.addEventListener('click', (e) => { if(e.target === lb) lb.setAttribute('hidden',''); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') lb.setAttribute('hidden',''); });
