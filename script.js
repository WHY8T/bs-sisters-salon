// The BS Sisters — interactions

document.getElementById('year').textContent = new Date().getFullYear();

// Header background on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const burger = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      openItem.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Hero — rotating slideshow (crossfade between photos, like aoiofficial.com)
const heroSlides = document.querySelectorAll('#heroSlideshow .hero-slide');
if (heroSlides.length > 1) {
  let heroIndex = 0;
  setInterval(() => {
    heroSlides[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
  }, 4500);
}

// Carousel — infinite continuous marquee that never stops on mouse hover
const carouselTrack = document.getElementById('carouselTrack');
if (carouselTrack) {
  carouselTrack.innerHTML += carouselTrack.innerHTML;
}

// Review box — star picker + send via WhatsApp
const starRating = document.getElementById('starRating');
if (starRating) {
  const stars = Array.from(starRating.querySelectorAll('.star'));
  let selected = 0;

  const paint = (upTo) => {
    stars.forEach(s => s.classList.toggle('hovered', Number(s.dataset.value) <= upTo));
  };

  stars.forEach(star => {
    star.addEventListener('mouseenter', () => paint(Number(star.dataset.value)));
    star.addEventListener('mouseleave', () => paint(selected));
    star.addEventListener('click', () => {
      selected = Number(star.dataset.value);
      stars.forEach(s => {
        const isActive = Number(s.dataset.value) <= selected;
        s.classList.toggle('active', isActive);
        s.setAttribute('aria-checked', String(isActive));
      });
      paint(selected);
    });
  });

  const reviewForm = document.getElementById('reviewForm');
  const reviewHint = document.getElementById('reviewHint');
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reviewName').value.trim();
    const text = document.getElementById('reviewText').value.trim();

    if (!selected) {
      reviewHint.textContent = 'Merci de choisir une note avant d\'envoyer.';
      reviewHint.classList.add('error');
      return;
    }
    reviewHint.classList.remove('error');

    const starsEmoji = '★'.repeat(selected) + '☆'.repeat(5 - selected);
    const message = `Bonjour The BS Sisters ! Voici mon avis (${starsEmoji}) :\n\n"${text}"\n\n— ${name}`;
    const url = `https://wa.me/213658085920?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');

    reviewForm.reset();
    stars.forEach(s => { s.classList.remove('active', 'hovered'); s.setAttribute('aria-checked', 'false'); });
    selected = 0;
    reviewHint.textContent = 'Merci ! WhatsApp s\'est ouvert avec votre avis, il ne reste plus qu\'à l\'envoyer.';
  });
}

// Scroll-reveal animations
const revealEls = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-scale');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}