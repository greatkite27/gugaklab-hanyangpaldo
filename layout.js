(function() {
  // 1. 네비게이션 메뉴 구성
  const navItems = [
    { id: 'about',   name: 'ABOUT',   file: 'index.html'   },
    { id: 'program', name: 'PROGRAM', file: 'program.html' },
    { id: 'artists', name: 'ARTISTS', file: 'artists.html' },
    { id: 'videos',  name: 'VIDEOS',  file: 'videos.html'  },
    { id: 'contact', name: 'CONTACT', file: 'contact.html' }
  ];

  // 현재 파일명 추출
  function getCurrentFile() {
    const path = window.location.pathname.split('/');
    let file = path[path.length - 1];
    if (!file || file === '') file = 'index.html';
    return file;
  }

  const currentFile = getCurrentFile();

  // 2. HEADER 생성
  function buildHeader() {
    const headerEl = document.querySelector('header');
    if (!headerEl) return;

    // 단체 로고 경로
    const logoSrc = "favicon.png";

    headerEl.innerHTML = `
      <div class="site-header-inner">
        <a href="index.html" class="site-header-brand">
          <img src="${logoSrc}" alt="국악LAB 한양팔도 로고" class="site-logo">
        </a>
      </div>
    `;
  }

  // 3. NAV 생성
  function buildNav() {
    const navEl = document.querySelector('nav');
    if (!navEl) return;

    const linksHtml = navItems.map(item => {
      // 상세 페이지(예: artists-xxx.html)에서도 해당 메뉴 active 상태 유지
      const baseName = item.file.replace('.html', '');
      const isActive = currentFile === item.file || (baseName !== 'index' && currentFile.startsWith(baseName));

      return `
        <a href="${item.file}" class="${isActive ? 'active' : ''}">
          ${item.name}
        </a>
      `;
    }).join('');

    navEl.innerHTML = `
      <div class="nav-inner">
        <div class="nav-links">
          ${linksHtml}
        </div>
      </div>
    `;
  }

  // 4. FOOTER 생성
  function buildFooter() {
    const footerEl = document.querySelector('footer.site-footer');
    if (!footerEl) return;

    footerEl.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">국악LAB 한양팔도</div>

        <span class="footer-item">
          서울특별시 서초구 효령로 229 B1층 B07호&nbsp;&nbsp;
          <a href="https://map.naver.com/p/search/국악LAB한양팔도"
             class="footer-link"
             target="_blank"
             rel="noopener">
            map
          </a>
        </span>

        <span class="footer-item">
          <a href="mailto:gugaklab@naver.com" class="footer-link">
            gugaklab@naver.com
          </a>
        </span>

        <div class="footer-sns" style="display: flex; gap: 12px; align-items: center;">
          <!-- 인스타그램 -->
          <a href="https://www.instagram.com/hanyangpaldo?igsh=aHNzdXRrOXh6YWx5"
             class="footer-link"
             aria-label="국악LAB 한양팔도 인스타그램"
             target="_blank"
             rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
              <path fill="currentColor" d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.71 4.71 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.9-7.9a1.1 1.1 0 1 1-1.1-1.1 1.09 1.09 0 0 1 1.1 1.1ZM21 7.1a6.32 6.32 0 0 0-.4-2.2 4.4 4.4 0 0 0-2.5-2.5A6.32 6.32 0 0 0 16 2H8a6.32 6.32 0 0 0-2.2.4 4.4 4.4 0 0 0-2.5 2.5A6.32 6.32 0 0 0 3 7.1V17a6.32 6.32 0 0 0 .4 2.2 4.4 4.4 0 0 0 2.5 2.5A6.32 6.32 0 0 0 8 22h8a6.32 6.32 0 0 0 2.2-.4 4.4 4.4 0 0 0 2.5-2.5A6.32 6.32 0 0 0 21 17V7.1Zm-1.8 9.9a4 4 0 0 1-.2 1.4 2.7 2.7 0 0 1-1.5 1.5 4 4 0 0 1-1.4.2H8a4 4 0 0 1-1.4-.2 2.7 2.7 0 0 1-1.5-1.5 4 4 0 0 1-.2-1.4V7.1a4 4 0 0 1 .2-1.4 2.7 2.7 0 0 1 1.5-1.5A4 4 0 0 1 8 4h8a4 4 0 0 1 1.4.2 2.7 2.7 0 0 1 1.5 1.5 4 4 0 0 1 .2 1.4Z"/>
            </svg>
          </a>

          <!-- 유튜브 -->
          <a href="https://www.youtube.com/@hanyangpaldo"
             class="footer-link"
             aria-label="국악LAB 한양팔도 유튜브"
             target="_blank"
             rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
              <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    `;
  }

  // 5. DOM 로드 완료 후 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      buildHeader();
      buildNav();
      buildFooter();
    });
  } else {
    buildHeader();
    buildNav();
    buildFooter();
  }
})();
