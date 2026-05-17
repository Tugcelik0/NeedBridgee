const NAV = (active) => `
<nav class="nav">
  <a href="index.html" class="nav-logo">
    <div class="logo-mark">
      <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    </div>
    NeedBridge
  </a>
  <div class="nav-links">
    <a href="gazette.html" class="nav-link ${active==='gazette'?'active':''}">Problem Gazetesi</a>
    <a href="startups.html" class="nav-link ${active==='startups'?'active':''}">Startup Vitrini</a>
    <a href="bulletin.html" class="nav-link ${active==='bulletin'?'active':''}">Haftalık Bülten</a>
    <a href="pricing.html" class="nav-link ${active==='pricing'?'active':''}">Üyelik</a>
    <a href="#" class="nav-link">Hakkımızda</a>
  </div>
  <div class="nav-right">
    <button class="btn-ghost">Giriş yap</button>
    <button class="btn-primary">Ücretsiz kayıt →</button>
  </div>
</nav>`;

const FOOTER = () => `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="logo-mark" style="width:24px;height:24px">
            <svg viewBox="0 0 24 24" style="width:13px;height:13px"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          NeedBridge
        </div>
        <p class="footer-desc">Şirketlerin çözmek istediği problemler var. Çözümleri de var. Aradaki mesafe biziz.</p>
        <div style="margin-top:20px;display:flex;gap:10px">
          <span class="badge badge-gray" style="font-size:10px">🌍 Global</span>
          <span class="badge badge-gray" style="font-size:10px">47 ülke</span>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Platform</div>
        <a href="gazette.html" class="footer-link">Problem Gazetesi</a>
        <a href="startups.html" class="footer-link">Startup Vitrini</a>
        <a href="bulletin.html" class="footer-link">Haftalık Bülten</a>
        <a href="pricing.html" class="footer-link">Üyelik planları</a>
      </div>
      <div>
        <div class="footer-col-title">Kurumlar için</div>
        <a href="#" class="footer-link">Problem ilanı aç</a>
        <a href="#" class="footer-link">Startup'ları keşfet</a>
        <a href="#" class="footer-link">Teknopark hesabı</a>
        <a href="#" class="footer-link">Başarı hikayeleri</a>
      </div>
      <div>
        <div class="footer-col-title">Startup'lar için</div>
        <a href="#" class="footer-link">Profil oluştur</a>
        <a href="#" class="footer-link">İlanlara başvur</a>
        <a href="#" class="footer-link">Pipeline takibi</a>
        <a href="#" class="footer-link">Hızlandırıcı ortakları</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 NeedBridge Technologies. All rights reserved.</div>
      <div class="footer-legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</footer>`;
