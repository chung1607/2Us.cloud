const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

// Di chuyển nút "no" khi người dùng chạm vào (mobile) hoặc rê chuột (PC)
const moveButton = () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

// Dùng cả mouseover và touchstart
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

yesBtn.addEventListener('click', () => {
    // Hiển thị nội dung dễ thương ngay trên trang (thay vì alert)
    const message = document.createElement('div');
    message.textContent = 'Yêu em nhiều lắmmm 💗💗💗';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '24px';
    message.style.backgroundColor = '#ffe6ec';
    message.style.padding = '20px';
    message.style.borderRadius = '15px';
    message.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    message.style.zIndex = '9999';

    document.body.appendChild(message);
});
