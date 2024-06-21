<img src="https://github.com/alperenirtik/whatsappdestekbuton/blob/main/mobil-masaustu-gorunum.png?raw=true" alt="Ücretsiz HTML Whatsapp Destek Widget">

# Whatsapp Destek Butonu

Bu proje, kullanıcıların web sitelerinde kullanabilecekleri şık ve mobil uyumlu, ücretsiz modern bir WhatsApp sohbet widget'ıdır. HTML5 ile geliştirilmiş projede otomatik olarak açılıp kapanan menüsü, canlı destek görünümü, animasyonları ve özelleştirilebilir yapısı ile kullanıcıların WhatsApp API'si üzerinden kolayca iletişim kurmaları sağlanır.

## Özellikler
- **WhatsApp API İletişimi**: Kullanıcıların `wa.me` veya `api.whatsapp.com/send/{mesajlar}` API'sini kullanarak otomatik olarak mesaj göndermelerini sağlar.
- **Mesaj Gönderme**: Kullanıcılar doğrudan widget üzerinden API aracılığıyla mesaj yazabilir ve gönderebilir. Mesaj gönderilecek telefon numarası `scripts.js` dosyasında ayarlanabilir.
- **Responsive Tasarım**: Widget, tüm cihazlarda mükemmel bir şekilde çalışacak şekilde geliştirilmiştir ve mobil uyumlu tasarıma sahiptir.
- **Modern Tasarım**: Widget şık ve modern bir görünüme sahiptir; gölgelendirme ve hover efektleri kullanılmıştır.
- **Animasyonlu Açılış ve Kapanış**: Widget, açılırken ve kapanırken yumuşak geçiş animasyonlarına sahiptir.
- **Otomatik Açılış**: Kullanıcının web sitesine ilk girişinde otomatik olarak 10 saniye içinde açılacaktır. Animasyon süresi `scripts.js` dosyasında değiştirilebilir.
- **Saat ve Dakika Gösterimi**: Hoşgeldin mesajının yanında anlık saat ve dakika bilgisi görüntülenir.
- **Hoşgeldin Mesajı**: Kullanıcılara bir karşılama mesajı gösterilir. Mesaj `index.html` dosyasında değiştirilebilir.
- **Buton Yazısı**: WhatsApp butonunun metni `index.html` dosyasında özelleştirilebilir.
- **Aktiflik Durum Bilgisi**: Temsilcinin aktiflik durumu gösterilir. Durum mesajı `index.html` dosyasında değiştirilebilir.
- **Klavye Kısayolu**: Kullanıcı masaüstünde `Enter` tuşuna basarak mesaj gönderebilir.
- **Kolay Özelleştirme**: Widget'ın renkleri, boyutları ve diğer stil özellikleri `styles.css` dosyasında kolayca özelleştirilebilir.

## Kurulum

1. Bu projeyi klonlayın veya zip dosyasını indirip açın.
    ```bash
    git clone https://github.com/alperenirtik/whatsappdestekbuton
    ```

2. HTML, CSS ve JavaScript dosyalarınızı web projenize ekleyin.

3. `styles.css` ve `scripts.js` dosyalarını uygun HTML dosyanıza bağlayın:
    ```html
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js"></script>
    ```

## Kullanım

- `index.html` dosyasını tarayıcınızda açarak widget'ı test edebilirsiniz.
- WhatsApp sohbet penceresini açıp kapatmak için widget'ın görünürlüğünü kontrol eden butona tıklayabilirsiniz.
- Mesaj yazıp göndermek için gönder düğmesine tıklayın veya `Enter` tuşuna basın.
- Eğer mesaj giriş kutusuna bir şey yazılmazsa, kullanıcı doğrudan belirtilen telefon numarasına yönlendirilir.

## Mesaj Gönderme Özelliği

Widget üzerinden mesaj gönderme işlemi şu şekilde çalışır:

- Kullanıcı mesaj giriş kutusuna bir mesaj yazar ve gönder butonuna tıklar veya `Enter` tuşuna basar.
- Eğer mesaj boşsa, kullanıcı doğrudan WhatsApp numarasına yönlendirilir:
    ```javascript
    var whatsappCall = 'https://wa.me/' + phoneNumber;
    window.open(whatsappCall, '_blank');
    ```
- Eğer mesaj boş değilse, mesaj içeriği WhatsApp API kullanılarak gönderilir:
    ```javascript
    var whatsappAPI = 'https://api.whatsapp.com/send/?phone=' + phoneNumber + '&text=' + encodeURIComponent(message) + '&app_absent=0';
    window.open(whatsappAPI, '_blank');
    ```

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakabilirsiniz.

## Geliştirici

Bu proje Alperen İrtik tarafından geliştirilmiş ve herkesin kullanımına sunulmuştur. Her türlü geri bildirim ve katkı için lütfen iletişime geçiniz.
