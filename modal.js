
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
