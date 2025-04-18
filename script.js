//페이지 네이션
const galleryItems = document.querySelectorAll(".gallery-item");
      const itemsPerPage = 5; // 한 페이지에 보여줄 갤러리 수
      const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
      const paginationDiv = document.getElementById("pagination");

      let currentPage = 1;

      function showPage(page) {
        currentPage = page;
        galleryItems.forEach((item, index) => {
          item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
        });
        updatePagination();
      }

      function updatePagination() {
        paginationDiv.innerHTML = '';

        const maxVisible = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = startPage + maxVisible - 1;

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = Math.max(1, endPage - maxVisible + 1);
        }

        // Prev 버튼
        if (startPage > 1) {
          const prevBtn = document.createElement("button");
          prevBtn.innerText = "◀ Prev";
          prevBtn.className = "page-nav";
          prevBtn.onclick = () => showPage(startPage - 1);
          stylePageButton(prevBtn, false);
          paginationDiv.appendChild(prevBtn);
        }

        // 숫자 버튼
        for (let i = startPage; i <= endPage; i++) {
          const btn = document.createElement("button");
          btn.innerText = i;
          btn.className = "page-btn";
          btn.onclick = () => showPage(i);
          stylePageButton(btn, i === currentPage);
          paginationDiv.appendChild(btn);
        }

        // Next 버튼
        if (endPage < totalPages) {
          const nextBtn = document.createElement("button");
          nextBtn.innerText = "Next ▶";
          nextBtn.className = "page-nav";
          nextBtn.onclick = () => showPage(endPage + 1);
          stylePageButton(nextBtn, false);
          paginationDiv.appendChild(nextBtn);
        }
      }

      function stylePageButton(btn, isActive) {
        btn.style.margin = "0 4px";
        btn.style.padding = "8px 12px";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";
        btn.style.fontWeight = "bold";
        btn.style.backgroundColor = isActive ? "#007bff" : "#eee";
        btn.style.color = isActive ? "#fff" : "#333";
      }

      showPage(1); // 초기 페이지 표시







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


//모달
    function openModal(element) {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImage");
      const imgSrc = element.querySelector("img").src;
      modal.style.display = "block";
      modalImg.src = imgSrc;
    }

    function closeModal() {
      document.getElementById("imageModal").style.display = "none";
    }




//슬라이드
    let index = 0;
        const slides = document.querySelectorAll('.slide img');
        const slider = document.querySelector('.slider');
        const totalSlides = slides.length;
        let slideInterval;

        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 3000);
        }

        function pauseAutoSlide() {
            clearInterval(slideInterval);
        }

        function resumeAutoSlide() {
            resetAutoSlide();
        }

        function resetAutoSlide() {
            clearInterval(slideInterval);
            setTimeout(startAutoSlide, 3000);
        }

        function showSlide(i) {
            index = (i + totalSlides) % totalSlides;
            slides[index].style.transition = "transform 0.5s ease-in-out";
            slides[index].style.transform = "scale(1.5)";
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = `translateX(-${index * 100}%)`;
            
            setTimeout(() => {
                slides[index].style.transform = "scale(1)";
            }, 500);
        }

        function nextSlide() {
            slides[index].style.transform = "scale(1.5)";
            setTimeout(() => {
                if (index === totalSlides - 1) {
                    slider.style.transition = "none";
                    slider.style.transform = "translateX(100%)";
                    setTimeout(() => {
                        slider.style.transition = "transform 0.5s ease-in-out";
                        index = 0;
                        showSlide(index);
                    }, 50);
                } else {
                    showSlide(index + 1);
                }
            }, 100);
            resetAutoSlide();
        }

        function prevSlide() {
            slides[index].style.transform = "scale(1.5)";
            setTimeout(() => {
                if (index === 0) {
                    slider.style.transition = "none";
                    slider.style.transform = `translateX(-${totalSlides * 100}%)`;
                    setTimeout(() => {
                        slider.style.transition = "transform 0.5s ease-in-out";
                        index = totalSlides - 1;
                        showSlide(index);
                    }, 50);
                } else {
                    showSlide(index - 1);
                }
            }, 100);
            resetAutoSlide();
        }

        startAutoSlide();

        function toggleMenu() {
            const menu = document.querySelector(".nav-menu");
            menu.classList.toggle("open");
        }




