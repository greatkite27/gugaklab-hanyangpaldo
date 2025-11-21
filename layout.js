// layout.js

// ========== HEADER HTML ==========
const headerHtml = `
  <a href="index.html" style="text-decoration:none; color:inherit;">
    <h1>국악LAB 한양팔도</h1>
    <h2>GUGAKLAB HANYANGPALDO</h2>
  </a>
`;

// ========== NAV HTML ==========
const navHtml = `
  <a href="index.html">ABOUT</a>
  <a href="program.html">PROGRAM</a>
  <a href="artists.html">ARTISTS</a>
  <a href="gallery.html">GALLERY</a>
  <a href="videos.html">VIDEOS</a>
  <a href="notice.html">NOTICE</a>
  <a href="contact.html">CONTACT</a>
`;

// ========== FOOTER HTML ==========
const footerHtml = `
  <div class="footer-inner">
    <div class="footer-brand">국악LAB 한양팔도</div>
    <span class="footer-item">
      주소: 서울특별시 서초구 효령로 229 B1층 B07호 &nbsp;&nbsp;
      <a href="https://map.naver.com/p/search/국악LAB한양팔도"
         class="footer-link"
         target="_blank"
         rel="noopener">map</a>
    </span>
    <span class="footer-item">
      이메일: <a href="mailto:gugaklab@naver.com" class="footer-link">gugaklab@naver.com</a>
    </span>
    <div class="footer-sns">
      <a href="https://www.instagram.com/hanyangpaldo?igsh=aHNzdXRrOXh6YWx5"
         class="footer-link"
         aria-label="국악LAB 한양팔도 인스타그램"
         target="_blank"
         rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.71 4.71 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.9-7.9a1.1 1.1 0 1 1-1.1-1.1 1.09 1.09 0 0 1 1.1 1.1ZM21 7.1a6.32 6.32 0 0 0-.4-2.2 4.4 4.4 0 0 0-2.5-2.5A6.32 6.32 0 0 0 16 2H8a6.32 6.32 0 0 0-2.2.4 4.4 4.4 0 0 0-2.5 2.5A6.32 6.32 0 0 0 3 7.1V17a6.32 6.32 0 0 0 .4 2.2 4.4 4.4 0 0 0 2.5 2.5A6.32 6.32 0 0 0 8 22h8a6.32 6.32 0 0 0 2.2-.4 4.4 4.4 0 0 0 2.5-2.5A6.32 6.32 0 0 0 21 17V7.1Zm-1.8 9.9a4 4 0 0 1-.2 1.4 2.7 2.7 0 0 1-1.5 1.5 4 4 0 0 1-1.4.2H8a4 4 0 0 1-1.4-.2 2.7 2.7 0 0 1-1.5-1.5 4 4 0 0 1-.2-1.4V7.1a4 4 0 0 1 .2-1.4 2.7 2.7 0 0 1 1.5-1.5A4 4 0 0 1 8 4h8a4 4 0 0 1 1.4.2 2.7 2.7 0 0 1 1.5 1.5 4 4 0 0 1 .2 1.4Z"/>
        </svg>
      </a>
    </div>
  </div>
`;

// ========== DOM에 삽입 & 현재 메뉴 활성화 ==========
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.querySelector('header');
  const navEl    = document.querySelector('nav');
  const footerEl = document.querySelector('footer.site-footer');

  if (headerEl) headerEl.innerHTML = headerHtml;
  if (navEl)    navEl.innerHTML    = navHtml;
  if (footerEl) footerEl.innerHTML = footerHtml;

  // 현재 페이지 파일명 기준으로 nav에 active 클래스 주기
  if (navEl) {
    const path = window.location.pathname.split('/').pop() || 'index.html';

    navEl.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;

      // index.html 또는 빈 path 처리
      const normalizedHref = href === './' ? 'index.html' : href;

      if (normalizedHref === path) {
        a.classList.add('active');
      }
    });
  }
});