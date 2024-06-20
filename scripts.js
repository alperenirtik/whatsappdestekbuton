// Destek butonuna tıklama olayı için dinleyici
document.getElementById('support-button').addEventListener('click', function(event) {
    event.stopPropagation(); // Butona tıklanıldığında anında kapanmayı önlemek için yayılmayı durdur
    const chatContainer = document.getElementById('chat-container');
    toggleChatVisibility(chatContainer);
});

// Sayfanın herhangi bir yerine tıklanıldığında sohbeti kapatma olayı için dinleyici
document.addEventListener('click', function(event) {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.opacity === '1' && !event.target.closest('#chat-container')) {
        toggleChatVisibility(chatContainer);
    }
});

// Kapatma butonuna tıklanıldığında sohbeti kapatma olayı için dinleyici
document.getElementById('close-button').addEventListener('click', function(event) {
    const chatContainer = document.getElementById('chat-container');
    toggleChatVisibility(chatContainer);
    event.stopPropagation(); // Sohbeti açtıktan sonra hemen kapanmayı önlemek için yayılmayı durdur
});

// Sohbet görünürlüğünü değiştirme fonksiyonu
function toggleChatVisibility(chatContainer) {
    if (chatContainer.style.opacity === '1') {
        chatContainer.style.opacity = '0';
        chatContainer.style.visibility = 'hidden';
    } else {
        chatContainer.style.opacity = '1';
        chatContainer.style.visibility = 'visible';
    }
}

// Sayfa yüklendikten 30 saniye sonra başlayan animasyon, sadece bir kez çalışır
let animationStarted = false;
setTimeout(function() {
    if (!animationStarted) {
        const chatContainer = document.getElementById('chat-container');
        toggleChatVisibility(chatContainer); // Animasyonu başlat
        animationStarted = true;
    }
}, 10000); // 10 saniye gecikme

// Telefon numarasını burada tanımlayın
var phoneNumber = '+900000000000';

// Tuş basma olayı (Enter tuşu) için dinleyici
document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Mesaj gönderme fonksiyonu
function sendMessage() {
    var message = document.getElementById('messageInput').value.trim();
    
    // Mesaj boş ise telefonu arat
    if (message === '') {
        var whatsappCall = 'https://wa.me/' + phoneNumber;
        window.open(whatsappCall, '_blank');
    } else {
        // Mesaj boş değilse mesajı gönder
        var whatsappAPI = 'https://api.whatsapp.com/send/?phone=' + phoneNumber + '&text=' + encodeURIComponent(message) + '&app_absent=0';
        window.open(whatsappAPI, '_blank');
    }
}

// Saat ve dakikayı gösteren fonksiyon
function saatDakikaGoster() {
    var simdi = new Date();
    var saat = simdi.getHours();
    var dakika = simdi.getMinutes();
    
    // Saat ve dakikayı HTML içine yerleştirme
    var saatDakikaElementi = document.querySelector(".message-time");
    saatDakikaElementi.textContent = `${saat}:${dakika}`;
}

// saatDakikaGoster fonksiyonunu her saniye bir kez çağır
setInterval(saatDakikaGoster, 1000);
