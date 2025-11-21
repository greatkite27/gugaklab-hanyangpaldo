(function() {
  const html = document.documentElement;
  const lang = html.lang === 'en' ? 'en' : 'ko'; // 기본 ko

  const labels = {
    ko: {
      siteTitleKo: '국악LAB 한양팔도',
      siteTitleEn: 'GUGAKLAB HANYANGPALDO',
      nav: {
        about: 'ABOUT',
        program: 'PROGRAM',
        artists: 'ARTISTS',
        gallery: 'GALLERY',
        videos: 'VIDEOS',
        notice: 'NOTICE',
        contact: 'CONTACT',
      },
      footer: {
        addressLabel: '주소',
        emailLabel: '이메일',
        map: 'map',
      }
    },
    en: {
      siteTitleKo: 'GUGAKLAB HANYANGPALDO',
      siteTitleEn: 'KOREAN TRADITIONAL MUSIC LAB',
      nav: {
        about: 'ABOUT',
        program: 'PROGRAM',
        artists: 'ARTISTS',
        gallery: 'GALLERY',
        videos: 'VIDEOS',
        notice: 'NOTICE',
        contact: 'CONTACT',
      },
      footer: {
        addressLabel: 'Address',
        emailLabel: 'Email',
        map: 'map',
      }
    }
  };

  const navItems = [
    { id: 'about',   file: 'index.html'   },
    { id: 'program', file: 'program.html' },
    { id: 'artists', file: 'artists.html' },
    { id: 'gallery', file: 'gallery.html' },
    { id: 'videos',  file: 'videos.html'  },
    { id: 'notice',  file: 'notice.html'  },
    { id: 'contact', file: 'contact.html' }
  ];

  function getCurrentFile() {
    const path = window.location.pathname.split('/');
    let file = path[path.length - 1];
    if (!file || file === '') file = 'index.html';
    return file;
  }

  const currentFile = getCurrentFile();

  function buildHeader() {
    const headerEl = document.querySelector('header');
    if (!headerEl) return;

  // 단체 로고 경로 (원하는 파일명으로 교체)
  const logoSrc = "images/logo.png";

  headerEl.innerHTML = `
    <div class="site-header-inner">
      <a href="index.html" class="site-header-brand">
        <img src="${logoSrc}" alt="국악LAB 한양팔도 로고" class="site-logo">
      </a>
    </div>
  `;
}
  function buildNav() {
    const navEl = document.querySelector('nav');
    if (!navEl) return;

    const t = labels[lang];

    const linksHtml = navItems.map(item => {
      const isActive = currentFile === item.file;
      return `
        <a href="${item.file}" class="${isActive ? 'active' : ''}">
          ${t.nav[item.id]}
        </a>
      `;
    }).join('');

    const langHtml = `
      <div class="nav-lang">
        <button type="button" class="nav-lang-btn ${lang === 'ko' ? 'active' : ''}" data-lang="ko">KO</button>
        <span class="nav-lang-sep">/</span>
        <button type="button" class="nav-lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
      </div>
    `;

    navEl.innerHTML = `
      <div class="nav-inner">
        <div class="nav-links">
          ${linksHtml}
        </div>
        ${langHtml}
      </div>
    `;

    // 언어 토글 동작
    const langButtons = navEl.querySelectorAll('.nav-lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang === lang) return;

        const file = currentFile;
        if (targetLang === 'en') {
          // ko → en: en/파일명
          window.location.href = 'en/' + file;
        } else {
          // en → ko: ../파일명
          window.location.href = '../' + file;
        }
      });
    });
  }

function buildFooter() {
  const footerEl = document.querySelector('footer.site-footer');
  if (!footerEl) return;

  const t = labels[lang];

  footerEl.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">${labels.ko.siteTitleKo}</div>

        <span class="footer-item">
          서울특별시 서초구 효령로 229 B1층 B07호&nbsp;&nbsp;
          <a href="https://map.naver.com/p/search/국악LAB한양팔도"
             class="footer-link"
             target="_blank"
             rel="noopener">
            ${t.footer.map}
          </a>
        </span>

        <span class="footer-item">
          <a href="mailto:hanyangpaldo@gmail.com" class="footer-link">
            hanyangpaldo@gmail.com
          </a>
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
}

  // 실행
  buildHeader();
  buildNav();
  buildFooter();
})();
