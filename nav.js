// Shared Nav & Footer Renderer 
function renderNav(activePage) {
  const pages = [
    { href: 'index.html',      label: 'Home' },
    { href: 'browse.html',     label: 'Browse Talent' },
    { href: 'skillmatch.html', label: '✦ SkillMatch Wizard' },
    { href: 'wishlist.html',   label: 'Wishlist' },
  ];
  return `
  <nav class="nav" id="main-nav">
    <a href="index.html" class="nav-logo">iSpani<span>.</span></a>
    <div class="nav-links">
      ${pages.map(p => `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`).join('')}
    </div>
    <div class="nav-actions">
      <a href="wishlist.html" class="nav-icon-btn" title="Wishlist">
        ♡<span class="nav-badge wishlist-count">0</span>
      </a>
      <a href="cart.html" class="nav-icon-btn" title="Cart">
        🛒<span class="nav-badge cart-count">0</span>
      </a>
      <a href="#" class="btn btn-register btn-sm">Register as Student</a>
    </div>
  </nav>

  <!-- Mobile Bottom Navigation Bar -->
  <nav class="mobile-bottom-nav">
    <a href="index.html" class="mobile-nav-item ${activePage === 'index.html' ? 'active' : ''}">
      <span class="mobile-nav-icon">🏠</span>Home
    </a>
    <a href="browse.html" class="mobile-nav-item ${activePage === 'browse.html' ? 'active' : ''}">
      <span class="mobile-nav-icon">🔍</span>Browse
    </a>
    <a href="skillmatch.html" class="mobile-nav-item ${activePage === 'skillmatch.html' ? 'active' : ''}">
      <span class="mobile-nav-icon">✦</span>Wizard
    </a>
    <a href="wishlist.html" class="mobile-nav-item ${activePage === 'wishlist.html' ? 'active' : ''}">
      <span class="mobile-nav-icon" style="position:relative">♡<span class="nav-badge wishlist-count" style="top:-4px;right:-4px">0</span></span>Saved
    </a>
    <a href="cart.html" class="mobile-nav-item ${activePage === 'cart.html' ? 'active' : ''}">
      <span class="mobile-nav-icon" style="position:relative">🛒<span class="nav-badge cart-count" style="top:-4px;right:-4px">0</span></span>Cart
    </a>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">iSpani.</div>
          <p>Connecting South African university ICT students with businesses that need short-term technical talent. Empowering the next generation of tech professionals.</p>
        </div>
        <div class="footer-col">
          <h4>Platform</h4>
          <a href="browse.html">Browse Talent</a>
          <a href="skillmatch.html">SkillMatch Wizard</a>
          <a href="wishlist.html">My Wishlist</a>
          <a href="cart.html">My Cart</a>
        </div>
        <div class="footer-col">
          <h4>Students</h4>
          <a href="#">Register</a>
          <a href="#">How it Works</a>
          <a href="#">Success Stories</a>
          <a href="#">Blog</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="#">About iSpani</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 iSpani (Pty) Ltd. Empowering SA Student Talent.</span>
        <span>Built with ❤️ for South Africa</span>
      </div>
    </div>
  </footer>`;
}

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Filter sidebar toggle (mobile)
// Called by browse.html after rendering the sidebar
function initFilterToggle() {
  const btn  = document.querySelector('.filter-toggle-btn');
  const body = document.querySelector('.filter-body');
  const icon = document.querySelector('.filter-toggle-icon');
  if (!btn || !body) return;
  btn.addEventListener('click', () => {
    const open = body.classList.toggle('open');
    if (icon) icon.classList.toggle('open', open);
  });
}

// Lightbox
function openLightbox(src) {
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `<span class="lightbox-close" onclick="closeLightbox()">✕</span><img src="" alt="">`;
    document.body.appendChild(lb);
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  }
  lb.querySelector('img').src = src;
  lb.classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('open');
}

// Toast notification
function showToast(msg) {
  let toast = document.getElementById('ispani-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ispani-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = '✓  ' + msg;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity   = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity   = '0';
  }, 2800);
}

// Badge updater
function updateBadges() {
  const cartCount     = cart.reduce((s, i) => s + i.qty, 0);
  const wishlistCount = wishlist.length;
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent    = cartCount;
    el.style.display  = cartCount ? 'flex' : 'none';
  });
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent    = wishlistCount;
    el.style.display  = wishlistCount ? 'flex' : 'none';
  });
}

// Star renderer
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if      (i < full)              html += '<span class="star filled">★</span>';
    else if (i === full && half)    html += '<span class="star half">★</span>';
    else                            html += '<span class="star empty">☆</span>';
  }
  return html;
}

// Service icons map
const SERVICE_ICONS = {
  webdev: '💻', database: '🗃️', data: '📊',
  cybersecurity: '🔒', networking: '🌐', appdev: '📱', itsupport: '🛠️'
};
