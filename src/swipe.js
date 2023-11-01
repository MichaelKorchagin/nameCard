let touchStartY, touchEndY;
const minSwipeDistance = 50; // Минимальное расстояние для считывания свайпа (по вашему выбору)

openNavButton.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

openNavButton.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].clientY;
    const swipeDistance = touchEndY - touchStartY;

    if (Math.abs(swipeDistance) >= minSwipeDistance) {
        swipeContacts();
    }
});