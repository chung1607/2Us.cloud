const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const moveButton = () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

yesBtn.addEventListener('click', () => {
    // Tạo thông báo yêu thương
    const message = document.createElement('div');
    message.textContent = 'Yêu em nhiều lắmmm 💗💗💗';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '24px';
    message.style.backgroundColor = '#ffe6ec';
    message.style.padding = '20px 30px';
    message.style.borderRadius = '15px';
    message.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    message.style.zIndex = '9999';
    message.style.transition = 'opacity 1s ease';

    document.body.appendChild(message);

    // Sau 15s sẽ tự động mờ đi và biến mất
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.remove();
        }, 1000); // chờ hiệu ứng mờ hoàn tất
    }, 15000); // 15 giây
});
