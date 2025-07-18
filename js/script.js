const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

noBtn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
    alert('Yêu em nhiều lắm 💗 Cảm ơn em tha thứ cho anh nha!');
});
