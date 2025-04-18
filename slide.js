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



