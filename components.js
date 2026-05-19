const NAV = (active) => `
<nav class="nav">
  <a href="index.html" class="nav-logo">
    <div class="logo-mark">N</div>
    NeedBridge
  </a>
  <div class="nav-links">
    <button class="nav-link ${active==='problems'?'active':''}" onclick="location.href='problems.html'">Problem Board</button>
    <button class="nav-link ${active==='solvers'?'active':''}" onclick="location.href='solvers.html'">Solver Directory</button>
    <button class="nav-link ${active==='how'?'active':''}" onclick="location.href='how-it-works.html'">How It Works</button>
    <button class="nav-link ${active==='bulletin'?'active':''}" onclick="location.href='bulletin.html'">Weekly Bulletin</button>
    <button class="nav-link ${active==='pricing'?'active':''}" onclick="location.href='pricing.html'">Pricing</button>
  </div>
  <div class="nav-right">
    <button class="btn btn-ghost" onclick="location.href='join.html'">Sign in</button>
    <button class="btn btn-primary btn-sm" onclick="location.href='join.html'">Join free →</button>
  </div>
</nav>`;

const FOOTER = () => `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="logo-mark" style="width:24px;height:24px;font-size:12px">N</div>
          NeedBridge
        </div>
        <p class="footer-desc">Where corporate problems meet startup solutions. Global. Anonymous. Trusted.</p>
        <div style="margin-top:16px;display:flex;gap:8px">
          <span class="badge badge-gray">🌍 Global</span>
          <span class="badge badge-gray">Est. 2026</span>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Platform</div>
        <a href="problems.html" class="footer-link">Problem Board</a>
        <a href="solvers.html" class="footer-link">Solver Directory</a>
        <a href="bulletin.html" class="footer-link">Weekly Bulletin</a>
        <a href="pricing.html" class="footer-link">Pricing</a>
      </div>
      <div>
        <div class="footer-col-title">For Seekers</div>
        <a href="how-it-works.html#seekers" class="footer-link">How it works</a>
        <a href="join.html?role=seeker" class="footer-link">Post a problem</a>
        <a href="pricing.html#seekers" class="footer-link">Seeker plans</a>
        <a href="how-it-works.html#trust" class="footer-link">Trust & safety</a>
      </div>
      <div>
        <div class="footer-col-title">For Solvers</div>
        <a href="how-it-works.html#solvers" class="footer-link">How it works</a>
        <a href="join.html?role=solver" class="footer-link">Create profile</a>
        <a href="pricing.html#solvers" class="footer-link">Solver plans</a>
        <a href="how-it-works.html#trust" class="footer-link">Anonymity & escrow</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 NeedBridge. All rights reserved.</div>
      <div class="footer-legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</footer>`;

// LinkedIn share helper
function shareOnLinkedIn(text, url) {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url || window.location.href)}&summary=${encodeURIComponent(text || '')}`;
  window.open(shareUrl, '_blank', 'width=600,height=600');
}

// FAQ toggle
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('open'));
  });
}

// Pricing toggle
let isAnnual = false;
function toggleBilling() {
  isAnnual = !isAnnual;
  document.getElementById('tog-thumb').className = 'toggle-thumb' + (isAnnual ? ' right' : '');
  document.getElementById('lbl-monthly').className = 'toggle-lbl' + (isAnnual ? '' : ' on');
  document.getElementById('lbl-annual').className = 'toggle-lbl' + (isAnnual ? ' on' : '');
  document.querySelectorAll('[data-monthly]').forEach(el => {
    el.textContent = isAnnual ? el.dataset.annual : el.dataset.monthly;
  });
}

document.addEventListener('DOMContentLoaded', initFAQ);
