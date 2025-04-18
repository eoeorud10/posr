
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




