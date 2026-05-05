/* ============================================
   ADORE CONSTRUCTIONS — Shared Components
   Inlined into each page via script tag
   ============================================ */

const ADORE_NAV = `
<div class="topbar">
  <div class="topbar-left">
    <span><i class="fas fa-clock"></i> 10:00 AM – 4:00 PM (GMT+5:45)</span>
    <span class="hide-mobile"><i class="fas fa-phone"></i> <a href="tel:+9779854076050">(+977) 9854 076 050</a></span>
  </div>
  <a href="contact.html"><i class="fas fa-envelope" style="margin-right:6px"></i>Contact Us</a>
</div>
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <img src="./images/logo/adore-construction.png" alt="Adore Constructions Logo">
  </a>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="projects.html">Projects</a>
    <a href="team.html">Team</a>
    <a href="contact.html" class="nav-cta">Contact</a>
  </div>
  <button class="hamburger" id="hamburger" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="projects.html">Projects</a>
  <a href="team.html">Team</a>
  <a href="contact.html">Contact</a>
</div>
`;

const ADORE_FOOTER = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <img src="./images/logo/adore-construction.png" alt="Adore Constructions" class="footer-brand-logo">
        <p class="footer-tagline">We build, you adore.</p>
        <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i><span>Malangawa &amp; Janakpur, Province 2, Nepal</span></div>
        <div class="footer-contact-item"><i class="fas fa-envelope"></i><a href="mailto:contact@adoreconstruction.com">contact@adoreconstruction.com</a></div>
        <div class="footer-contact-item"><i class="fas fa-phone"></i><a href="tel:+9779854076050">+977 9854 076 050</a></div>
        <div class="footer-contact-item"><i class="fas fa-phone"></i><a href="tel:+9779801676050">+977 9801 676 050</a></div>
        <div class="footer-socials">
          <a href="https://www.facebook.com/adoreofficials" class="social-btn" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/adoreofficials/" class="social-btn" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/adore-officials/about/" class="social-btn" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="social-btn" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Quick Links</div>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="services.html">Services</a>
          <a href="projects.html">Projects</a>
          <a href="team.html">Our Team</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <div class="footer-links">
          <a href="services.html#construction">Construction</a>
          <a href="services.html#building">Building</a>
          <a href="services.html#structural">Structural Analysis</a>
          <a href="services.html#dpr">Project Report (DPR)</a>
          <a href="services.html#planning">Project Planning</a>
          <a href="services.html#estimation">Estimation</a>
          <a href="services.html#valuation">Property Valuation</a>
          <a href="services.html#interior">Interior Design</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Inquire</div>
        <div class="footer-links">
          <a href="contact.html#janakpur">Janakpur Office</a>
          <a href="contact.html#malangawa">Malangawa Office</a>
        </div>
        <div class="footer-col-title" style="margin-top:32px">Office Hours</div>
        <p style="font-size:13px;color:var(--ash);line-height:1.8">Monday – Friday<br>10:00 AM – 4:00 PM<br><span style="color:var(--gold)">GMT+5:45 (NPT)</span></p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2024 <a href="index.html">Adore Constructions</a>. All Rights Reserved.</span>
      <span>Built by <a href="https://rajatcj.com/?fromadoreconstructions">@rajatcj</a></span>
    </div>
  </div>
</footer>
`;

const ADORE_EXTRAS = `
<div class="cursor"><div class="cursor-dot" id="cursorDot"></div></div>
<div class="cursor"><div class="cursor-ring" id="cursorRing"></div></div>
<button class="back-to-top" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button>
<div class="notification">
  <button class="notification-close"><i class="fas fa-times"></i></button>
  <div class="notification-title">🏗️ New Projects Available</div>
  <div class="notification-text">We've completed 36+ projects. View our portfolio today.</div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  const extrasPlaceholder = document.getElementById('extras-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = ADORE_NAV;
  if (footerPlaceholder) footerPlaceholder.innerHTML = ADORE_FOOTER;
  if (extrasPlaceholder) extrasPlaceholder.innerHTML = ADORE_EXTRAS;
});
