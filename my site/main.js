(() => {
    // navのscrollアクション
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('header');
        nav.classList.toggle("backColor", window.scrollY > 0);
    });
    // レスポンシブmenuBtnのアクション
    const menuBtn = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');
    const navLi = header.querySelectorAll('li');
    menuBtn.addEventListener('click',()=>{
        navLi.forEach((navLis)=>{
            const style = navLis.style.display;
            if(style == 'block'){
                navLis.style.display='none'
            }else{
                navLis.style.display='block'
            }
            });
        
        const span = menuBtn.querySelectorAll('span');
        span.forEach((spans)=>{
            spans.classList.toggle('move');
        }) 
    });

    // box-shadowのアクション
    const bx = document.querySelectorAll('.bx');
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("boxShadow");
            } else {
                true;
            }
        })
    };

    let options = {
        root: null,
        rootMargin: "-300px 0px",
        threshold: [0, 0.5, 1]
    }
    // ioはobserver
    const io = new IntersectionObserver(callback, options);
    bx.forEach((bxs) => {
        io.observe(bxs)
    });

    // portfolioのアクション
    const $bgImgs = document.querySelectorAll('[data-bg]');
    const $nImgs = document.querySelectorAll('.imgs');

    $nImgs.forEach(($nImg) => {
        $nImg.addEventListener('click', (e) => {
            e.preventDefault();
            const $this = e.target;
            const targetVal = $this.dataset.content;
            $bgImgs[targetVal].classList.add('fade-in');
            $bgImgs[targetVal].classList.remove('fade-out');
        })
    })

    $bgImgs.forEach((big) => {
        big.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.classList.remove('fade-in');
            e.target.classList.add('fade-out');
        });
    });


})();