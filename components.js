function renderNav(active) {
  document.getElementById('nav-root').innerHTML = `
<nav class="nav">
  <a href="index.html" class="nav-logo">
    <div class="logo-mark">N</div>
    NeedBridge
  </a>
  <div class="nav-links">
    <button class="nav-link ${active==='problems'?'active':''}" onclick="location.href='problems.html'" data-i18n="nav_problems">Problem Board</button>
    <button class="nav-link ${active==='solvers'?'active':''}" onclick="location.href='solvers.html'" data-i18n="nav_solvers">Solver Directory</button>
    <button class="nav-link ${active==='how'?'active':''}" onclick="location.href='how-it-works.html'" data-i18n="nav_how">How It Works</button>
    <button class="nav-link ${active==='pricing'?'active':''}" onclick="location.href='pricing.html'" data-i18n="nav_pricing">Pricing</button>
    <button class="nav-link ${active==='bulletin'?'active':''}" onclick="location.href='bulletin.html'" data-i18n="nav_bulletin">Bulletin</button>
  </div>
  <div class="nav-right">
    <button class="lang-btn ${currentLang==='en'?'active':''}" data-lang="en" onclick="setLang('en')">EN</button>
    <button class="lang-btn ${currentLang==='tr'?'active':''}" data-lang="tr" onclick="setLang('tr')">TR</button>
    <button class="btn btn-ghost" onclick="location.href='join.html'" data-i18n="nav_signin">Sign in</button>
    <button class="btn btn-primary btn-sm" onclick="location.href='join.html'" data-i18n="nav_join">Join free →</button>
  </div>
</nav>`;
}

function renderFooter() {
  document.getElementById('footer-root').innerHTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="logo-mark" style="width:24px;height:24px;font-size:12px">N</div>
          NeedBridge
        </div>
        <p class="footer-desc" data-i18n="footer_desc">Where corporate problems meet startup solutions.</p>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer_platform">Platform</div>
        <a href="problems.html" class="footer-link" data-i18n="footer_problems">Problem Board</a>
        <a href="solvers.html" class="footer-link" data-i18n="footer_directory">Solver Directory</a>
        <a href="bulletin.html" class="footer-link" data-i18n="footer_bulletin">Bulletin</a>
        <a href="pricing.html" class="footer-link" data-i18n="footer_pricing">Pricing</a>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer_seekers">For Seekers</div>
        <a href="join.html?role=seeker" class="footer-link" data-i18n="footer_post">Post a problem</a>
        <a href="how-it-works.html" class="footer-link" data-i18n="footer_how_s">How it works</a>
        <a href="pricing.html" class="footer-link" data-i18n="footer_plans_s">Seeker plans</a>
        <a href="how-it-works.html#trust" class="footer-link" data-i18n="footer_trust">Trust & safety</a>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer_solvers">For Solvers</div>
        <a href="join.html?role=solver" class="footer-link" data-i18n="footer_profile">Create a profile</a>
        <a href="how-it-works.html" class="footer-link" data-i18n="footer_how_v">How it works</a>
        <a href="pricing.html" class="footer-link" data-i18n="footer_plans_v">Solver plans</a>
        <a href="join.html?role=solver" class="footer-link" data-i18n="footer_pipeline">Pipeline dashboard</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy" data-i18n="footer_copy">© 2026 NeedBridge. All rights reserved.</div>
      <div class="footer-legal">
        <a href="#" data-i18n="footer_privacy">Privacy</a>
        <a href="#" data-i18n="footer_terms">Terms</a>
        <a href="#" data-i18n="footer_contact">Contact</a>
      </div>
    </div>
  </div>
</footer>`;
}

function shareOnLinkedIn(text, url) {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url || window.location.href)}&summary=${encodeURIComponent(text || '')}`;
  window.open(shareUrl, '_blank', 'width=600,height=600');
}

function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('open'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initLang();
});
