function order(packageName) {
    const message = `Halo Crips-Store! Saya ingin memesan paket ${packageName}.`;
    const instagramUrl = `https://www.instagram.com/cripsstore0/?text=${encodeURIComponent(message)}`;
    window.open(instagramUrl, '_blank'); // Membuka link di tab baru
    
    showNotification();
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
