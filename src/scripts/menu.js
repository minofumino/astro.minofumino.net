const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    // 既存のクラス切替処理
    navLinks.classList.toggle('expanded');
    hamburger.classList.toggle('active');
    // aria-expanded の更新
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    // aria-label の更新
    hamburger.setAttribute(
        'aria-label',
        isExpanded ? 'メニューを開く' : 'メニューを閉じる'
    );
});