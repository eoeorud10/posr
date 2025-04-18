/*





*/


 //네비게이션 모바일버전

	document.getElementById('menu-button').addEventListener('click', function() {
        var mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.style.maxHeight = "300px";  // 애니메이션 효과
            mobileMenu.style.opacity = "1";
        } else {
            mobileMenu.style.maxHeight = "0";
            mobileMenu.style.opacity = "0";
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300); // 애니메이션 지속시간 후 숨김 처리
        }
    });
    function toggleMenu() {
        const menu = document.querySelector(".nav-menu");
        menu.classList.toggle("open");
    }






