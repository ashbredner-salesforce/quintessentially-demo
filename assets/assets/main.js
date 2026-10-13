/* Quintessentially — Shared JS */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Sticky nav shrink ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.style.height = '52px';
    } else {
      nav.style.height = '64px';
    }
  });

  /* ── Specialist tabs ── */
  const tabBtns = document.querySelectorAll('.specialist-tabs button');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  /* ── Simple testimonial dots ── */
  const dots = document.querySelectorAll('.testimonial-dots span');
  let activeDot = 0;
  if (dots.length > 1) {
    setInterval(function () {
      dots[activeDot].classList.remove('active');
      activeDot = (activeDot + 1) % dots.length;
      dots[activeDot].classList.add('active');
    }, 4000);
  }

  /* ── Article filter (noted.html) ── */
  const filterSelect = document.getElementById('article-filter');
  if (filterSelect) {
    filterSelect.addEventListener('change', function () {
      const val = this.value.toLowerCase();
      const cards = document.querySelectorAll('.article-card');
      cards.forEach(function (card) {
        const tag = (card.dataset.tag || '').toLowerCase();
        if (val === 'all' || tag.includes(val)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  /* ── Load more button ── */
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
      this.textContent = 'Loading…';
      setTimeout(function () {
        loadMoreBtn.textContent = 'No more articles';
        loadMoreBtn.disabled = true;
      }, 1200);
    });
  }

});
