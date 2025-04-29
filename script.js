let index = 0;

function changeSlide() {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;

    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(changeSlide, 3000);  // 3초마다 슬라이드 변경
