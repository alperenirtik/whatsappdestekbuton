# whatsappdestekbuton
Bu proje, kullanıcıların web sitelerinde kullanabilecekleri şık ve mobil uyumlu, ücretsiz modern bir WhatsApp sohbet widget'ıdır. HTML5 ile geliştirilmiş proje, otomatik olarak açılır kapanır menüsü, canlı destek görünümü, animasyonları ve özelleştirilebilir yapısı ile kullanıcıların WhatsApp API'si üzerinden kolayca iletişim kurmalarını sağlar.

## Özellikler
- **Whatsapp API İletişim**: wa.me yada api.whatsapp.com/send/{messages} api'sini kullanarak kullanıcıya otomatik olarak mesaj göndermenizi sağlar.
- **Mesaj Gönderme**: Kullanıcılar doğrudan widget üzerinden API aracılığıyla mesaj yazabilir ve gönderebilir. Mesaj gönderilecek telefon numarası "scripts.js" üzerinden ayarlaanbilir.
- **Responsive Tasarım**: Widget, tüm cihazlarda mükemmel bir şekilde çalışacak ve mobil uyumlu şekilde geliştirilmiştir
- **Modern Tasarım**: Widget şık ve modern bir şekilde tasarlanmıştır. Tasarımında gölgelendirme ve hover kullanılmıştır.
- **Animasyonlu Açılış ve Kapanış**: Widget, açılıp kapanırken yumuşak geçiş animasyonlarına sahiptir.
- **Otomatik Açılış**: Kullanıcı'nın web sitesine ilk girişinde otomatik olarak 10 saniye içerisinde açılacaktır. "scripts.js" dosyası üzerinden animasyon süresi değiştirilebilir.
- **Saat ve Dakika Gösterimi**: Hoşgeldin mesajının yanında saat ve dakika bilgisi anlık görüntülenir.
- **Hoşgeldin Mesajı**: Kullanıcılara bir karşılama mesajı gösterilir. "index.html" dosyası üzerinden karşılama mesajı değiştirilebilir.
- **Buton Yazısı**: Whatsapp butonunun yazısı "index.html" dosyası üzerinden özelleştirilebilir.
- **Aktiflik Durum Bilgisi**: Temsilcinin aktiflik durumu gösterilir. "index.html" dosyası üzerinden aktiflik durumu mesajı değiştirilebilir.
- **Klavye Kısayolu**: Kullanıcı Masaüstünde "Enter" tuşuna basarakta mesaj gönderebilir.
- **Kolay Özelleştirme**: Widget'ın renkleri, boyutları "styles.css"  ve diğer stil özellikleri kolayca özelleştirilebilir.

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
- Widget'ın görünürlüğünü kontrol eden butona tıklayarak WhatsApp sohbet penceresini açıp kapatabilirsiniz.
- Mesaj yazıp gönder düğmesine tıklayarak veya Enter tuşuna basarak mesaj gönderebilirsiniz.
- Eğer mesaj giriş kutusuna yazılan mesaj boş ise, kullanıcı doğrudan belirlenen telefon numarasına yönlendirilir.

## Mesaj Gönderme Özelliği

Widget üzerinden mesaj gönderme işlemi şu şekilde çalışır:

- Kullanıcı mesaj giriş kutusuna bir mesaj yazar ve gönder butonuna tıklar veya Enter tuşuna basar.
- Eğer mesaj boş ise, kullanıcı doğrudan WhatsApp numarasına yönlendirilir:
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

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakınız.

## Geliştirici

Bu proje, Alperen İrtik tarafından geliştirilmiş ve herkesin kullanımına sunulmuştur. Her türlü geri bildirim ve katkı için lütfen iletişime geçin.

---

**MIT License**


