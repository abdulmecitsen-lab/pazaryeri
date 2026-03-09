/**
 * PAZARYERI — Kapsamlı Kategori Sistemi v3
 * Tüm sayfalar bu dosyayı kullanır
 */
const CAT = {

  vasita: { label:'Vasıta', icon:'🚗', color:'#e74c3c',
    // Yeni yapı: her alt kategori kendi brands listesini taşıyor
    // buildSidebar: vasita seçili → subs listesi, sub seçili → o sub'ın brands'i, brand seçili → CAR_MODELS
    subs: [
      { v:'otomobil',       l:'Otomobil',            brands:[
        'Alfa Romeo','Aston Martin','Audi','Bentley','BMW','Bugatti','Citroen',
        'Dacia','Ferrari','Fiat','Ford','Honda','Hyundai','Infiniti','Jaguar',
        'Jeep','Kia','Lamborghini','Land Rover','Lexus','Maserati','Mazda',
        'Mercedes-Benz','Mini','Mitsubishi','Nissan','Opel','Peugeot','Porsche',
        'Renault','Rolls-Royce','Seat','Skoda','Smart','Subaru','Suzuki',
        'Tesla','Togg','Toyota','Volkswagen','Volvo'
      ]},
      { v:'arazi-suv',      l:'Arazi, SUV & Pickup',  brands:[
        'BMW','Dacia','Ford','Honda','Hyundai','Jeep','Kia','Land Rover',
        'Mazda','Mercedes-Benz','Mitsubishi','Nissan','Opel','Peugeot',
        'Renault','Skoda','Subaru','Suzuki','Toyota','Volkswagen','Volvo'
      ]},
      { v:'elektrikli',     l:'Elektrikli Araçlar',   brands:[
        'Audi','BMW','Fiat','Ford','Hyundai','Kia','Mercedes-Benz',
        'Mini','Nissan','Opel','Peugeot','Renault','Tesla','Togg','Volkswagen','Volvo'
      ]},
      { v:'motosiklet',     l:'Motosiklet',            brands:[
        'Aprilia','BMW Motorrad','Ducati','Harley-Davidson','Honda','Husqvarna',
        'Indian','Kawasaki','KTM','Moto Guzzi','Royal Enfield','Suzuki','Triumph','Yamaha'
      ]},
      { v:'minivan',        l:'Minivan & Panelvan',    brands:[
        'Citroen','Fiat','Ford','Honda','Hyundai','Kia','Mercedes-Benz',
        'Opel','Peugeot','Renault','Toyota','Volkswagen'
      ]},
      { v:'ticari',         l:'Ticari Araçlar',        brands:[
        'Citroen','Fiat','Ford','Hyundai','Isuzu','Iveco','MAN',
        'Mercedes-Benz','Opel','Peugeot','Renault','Toyota','Volkswagen'
      ]},
      { v:'kiralik',        l:'Kiralık Araçlar',       brands:[] },
      { v:'deniz',          l:'Deniz Araçları',        brands:[] },
      { v:'hasarli',        l:'Hasarlı Araçlar',       brands:[
        'Audi','BMW','Fiat','Ford','Honda','Hyundai','Kia',
        'Mercedes-Benz','Nissan','Opel','Renault','Toyota','Volkswagen'
      ]},
      { v:'karavan',        l:'Karavan',               brands:[] },
      { v:'klasik',         l:'Klasik Araçlar',        brands:[] },
      { v:'hava',           l:'Hava Araçları',         brands:[] },
      { v:'atv-utv',        l:'ATV',                   brands:[] }
    ],
    // Eski groups alanı da bırakıyoruz — diğer sayfalar kullanıyor olabilir
    groups:[]
  },

  emlak: { label:'Emlak', icon:'🏠', color:'#27ae60',
    groups:[
      { g:'Konut — Satılık', items:[
        {v:'satilik-daire',l:'Satılık Daire'},{v:'satilik-villa',l:'Satılık Villa'},
        {v:'satilik-mustak',l:'Satılık Müstakil Ev'},{v:'satilik-residence',l:'Satılık Residence'},
        {v:'satilik-yali',l:'Satılık Yalı / Köşk'},{v:'satilik-bina',l:'Satılık Bina'},
        {v:'satilik-prefabrik',l:'Satılık Prefabrik Ev'}
      ]},
      { g:'Konut — Kiralık', items:[
        {v:'kiralik-daire',l:'Kiralık Daire'},{v:'kiralik-villa',l:'Kiralık Villa'},
        {v:'kiralik-mustak',l:'Kiralık Müstakil Ev'},{v:'gunluk-kiralik',l:'Günlük Kiralık'},
        {v:'kiralik-devremulk',l:'Devre Mülk'},{v:'kiralik-odasi',l:'Oda Kiralık'}
      ]},
      { g:'Oda Sayısı', items:[
        {v:'studio',l:'Stüdyo / 1+0'},{v:'1+1',l:'1+1'},{v:'2+1',l:'2+1'},
        {v:'3+1',l:'3+1'},{v:'4+1',l:'4+1'},{v:'5-ustu',l:'5+ Oda'}
      ]},
      { g:'Arazi & Arsa', items:[
        {v:'arsa',l:'Arsa'},{v:'tarla',l:'Tarla'},{v:'bag-bahce',l:'Bağ & Bahçe'},
        {v:'zeytinlik',l:'Zeytinlik / Meyvelik'},{v:'orman',l:'Ormanlık Alan'},
        {v:'sanayi-arsasi',l:'Sanayi Arsası'},{v:'turizm-arsasi',l:'Turizm Arsası'}
      ]},
      { g:'Ticari Emlak', items:[
        {v:'isyeri-ofis',l:'İşyeri & Ofis'},{v:'dukkan-magaza',l:'Dükkan & Mağaza'},
        {v:'depo-antrepo',l:'Depo & Antrepo'},{v:'fabrika-atolye',l:'Fabrika & Atölye'},
        {v:'otel-pansiyon',l:'Otel & Pansiyon'},{v:'akaryakit',l:'Akaryakıt İstasyonu'},
        {v:'yemekhane',l:'Restoran & Kafe Binası'},{v:'devren',l:'Devren Satılık / Kiralık'},
        {v:'arazi-ticari',l:'Ticari Alan & Arazi'}
      ]}
    ]
  },

  elektronik: { label:'Elektronik', icon:'📱', color:'#2980b9',
    groups:[
      { g:'Telefon', items:[
        {v:'akilli-telefon',l:'Akıllı Telefon'},{v:'iphone-16',l:'iPhone 16 Serisi'},
        {v:'iphone-15',l:'iPhone 15 Serisi'},{v:'iphone-14',l:'iPhone 14 Serisi'},
        {v:'iphone-13',l:'iPhone 13 Serisi'},{v:'iphone-12-oncesi',l:'iPhone 12 ve Öncesi'},
        {v:'samsung-s',l:'Samsung Galaxy S Serisi'},{v:'samsung-a',l:'Samsung Galaxy A Serisi'},
        {v:'xiaomi-redmi',l:'Xiaomi / Redmi'},{v:'huawei-p',l:'Huawei P/Mate Serisi'},
        {v:'oppo-realme',l:'Oppo / Realme / OnePlus'},{v:'tuslu-telefon',l:'Tuşlu Telefon'},
        {v:'telefon-kilif',l:'Kılıf & Aksesuar'},{v:'sarj-kablo',l:'Şarj & Kablo'},
        {v:'powerbank',l:'Powerbank'}
      ]},
      { g:'Bilgisayar', items:[
        {v:'laptop',l:'Laptop & Notebook'},{v:'gaming-laptop',l:'Gaming Laptop'},
        {v:'masaustu-pc',l:'Masaüstü Bilgisayar'},{v:'gaming-pc',l:'Gaming PC'},
        {v:'apple-mac',l:'Apple Mac / MacBook'},{v:'all-in-one',l:'All-in-One PC'},
        {v:'mini-pc',l:'Mini PC & NUC'},{v:'workstation',l:'İş İstasyonu'},
        {v:'monitor',l:'Monitör'},{v:'gaming-monitor',l:'Gaming Monitör'},
        {v:'klavye',l:'Klavye'},{v:'mouse',l:'Mouse'},{v:'mouse-pad',l:'Mousepad'},
        {v:'yazici',l:'Yazıcı & Tarayıcı'},{v:'harddisk-ssd',l:'Hard Disk & SSD'},
        {v:'ram-bellek',l:'RAM & Bellek'},{v:'ekran-karti',l:'Ekran Kartı (GPU)'},
        {v:'islemci-cpu',l:'İşlemci (CPU)'},{v:'anakart',l:'Anakart'},
        {v:'guc-kaynagi',l:'Güç Kaynağı (PSU)'},{v:'bilgisayar-kasa',l:'Bilgisayar Kasası'},
        {v:'sogutma-fan',l:'Soğutma & Fan & Termal Pasta'},
        {v:'ag-router',l:'Modem & Router & Switch'},{v:'webcam-mikrofon',l:'Webcam & Mikrofon'}
      ]},
      { g:'Tablet & Okuyucu', items:[
        {v:'ipad',l:'iPad'},{v:'android-tablet',l:'Android Tablet'},
        {v:'windows-tablet',l:'Windows Tablet'},{v:'e-kitap-okuyucu',l:'E-Kitap Okuyucu'},
        {v:'grafik-tablet',l:'Grafik Tablet (Wacom vb.)'},{v:'tablet-aksesuar',l:'Tablet Aksesuar & Klavye'}
      ]},
      { g:'Kulaklık & Ses', items:[
        {v:'bluetooth-kulaklik',l:'Bluetooth Kulaklık (TWS)'},{v:'kulak-ustu',l:'Kulak Üstü Kulaklık'},
        {v:'kablolu-kulaklik',l:'Kablolu Kulaklık'},{v:'gaming-kulaklik',l:'Gaming Kulaklık'},
        {v:'bluetooth-hoparlor',l:'Bluetooth Hoparlör'},{v:'ev-ses-sistemi',l:'Ev Ses Sistemi'},
        {v:'soundbar',l:'Soundbar'},{v:'amplifikator',l:'Amplifikatör & Receiver'},
        {v:'plak-calar',l:'Plak Çalar (Pikap)'}
      ]},
      { g:'TV & Görüntü', items:[
        {v:'televizyon',l:'Televizyon'},{v:'smart-tv',l:'Smart TV'},
        {v:'oled-qled-tv',l:'OLED & QLED TV'},{v:'projektor',l:'Projektör & Ekran'},
        {v:'tv-aksesuar',l:'TV Aksesuar & Uzaktan Kumanda'},{v:'uydu-alici',l:'Uydu Alıcı & Anten'},
        {v:'apple-tv-chromecast',l:'Apple TV & Chromecast & Fire Stick'}
      ]},
      { g:'Oyun & Konsol', items:[
        {v:'ps5',l:'PlayStation 5'},{v:'ps4',l:'PlayStation 4'},{v:'ps3-oncesi',l:'PS3 ve Öncesi'},
        {v:'xbox-series',l:'Xbox Series X/S'},{v:'xbox-one',l:'Xbox One'},
        {v:'nintendo-switch',l:'Nintendo Switch'},{v:'nintendo-3ds',l:'Nintendo 3DS & DS'},
        {v:'retro-konsol',l:'Retro Konsol (SNES, Mega Drive vb.)'},
        {v:'gaming-kol',l:'Oyun Kolu & Joystick'},{v:'vr-gozluk',l:'VR Gözlük'},
        {v:'gaming-sandalye',l:'Gaming Sandalye'},{v:'gaming-masa-pc',l:'Gaming Masa'},
        {v:'oyun-cd-karti',l:'Oyun CD & Kartı'}
      ]},
      { g:'Akıllı Saat & Giyilebilir', items:[
        {v:'apple-watch',l:'Apple Watch'},{v:'samsung-watch',l:'Samsung Galaxy Watch'},
        {v:'garmin',l:'Garmin & Spor Saati'},{v:'android-wear',l:'Diğer Akıllı Saat'},
        {v:'akilli-bileklik',l:'Akıllı Bileklik & Fitness Tracker'},
        {v:'akilli-gozluk',l:'Akıllı Gözlük'}
      ]},
      { g:'Fotoğraf & Video', items:[
        {v:'dslr-aynasiz',l:'DSLR & Aynasız Kamera'},{v:'kompakt-kamera',l:'Kompakt Kamera'},
        {v:'analog-kamera',l:'Analog / Film Kamera'},{v:'objektif',l:'Objektif & Lens'},
        {v:'aksiyon-kamera',l:'Aksiyon Kamera (GoPro)'},{v:'drone-foto',l:'Drone & Kamera İnsansız'},
        {v:'video-kamera',l:'Video Kamera'},{v:'flas-stüdyo',l:'Flaş & Stüdyo Ekipmanı'},
        {v:'foto-tripod',l:'Tripod & Gimbal'},{v:'foto-aksesuar',l:'Fotoğraf Aksesuar'}
      ]},
      { g:'Akıllı Ev & Güvenlik', items:[
        {v:'akilli-ev-sistemi',l:'Akıllı Ev (SmartHome)'},{v:'robot-supurge-el',l:'Robot Süpürge'},
        {v:'ip-kamera',l:'Güvenlik Kamerası & IP Kamera'},{v:'alarm-sistemi',l:'Alarm Sistemi'},
        {v:'hava-purifier',l:'Hava Temizleyici & Nemlendirici'},
        {v:'akilli-ampul',l:'Akıllı Ampul & Aydınlatma'},{v:'smart-priz',l:'Akıllı Priz & Switch'}
      ]},
      { g:'Telefon Markaları', brands:[
        'Apple (iPhone)','Samsung','Xiaomi','Huawei','Oppo','OnePlus','Realme',
        'Vivo','Nothing','Motorola','Nokia','Sony Xperia','Google Pixel','Honor'
      ]},
      { g:'Bilgisayar Markaları', brands:[
        'Apple','Asus','Lenovo','Dell','HP','MSI','Acer','Toshiba','Razer',
        'Microsoft Surface','Samsung','Huawei MateBook','Monster','Casper','Turkcell T'
      ]}
    ]
  },

  'is-ilani': { label:'İş & Hizmet İlanı', icon:'💼', color:'#9c27b0',
    groups:[
      { g:'İş İlanı', items:[
        {v:'tam-zamanli',l:'Tam Zamanlı'},{v:'yari-zamanli',l:'Yarı Zamanlı'},
        {v:'freelance',l:'Freelance & Proje Bazlı'},{v:'uzaktan-is',l:'Uzaktan Çalışma (Remote)'},
        {v:'staj',l:'Staj & Part-time'},{v:'gecici-sezonluk',l:'Geçici & Sezonluk'}
      ]},
      { g:'Mesleki Hizmet', items:[
        {v:'tamirat-servis',l:'Tamirat & Teknik Servis (Elektronik, Beyaz Eşya)'},
        {v:'nakliye-tasima',l:'Nakliye & Taşıma & Depolama'},{v:'insaat-tadilat',l:'İnşaat & Tadilat & Dekorasyon'},
        {v:'boya-badana-hiz',l:'Boyacı & Badanacı'},{v:'tesisatci-elektrik',l:'Tesisatçı & Elektrikçi'},
        {v:'temizlik-hizmet',l:'Ev & Ofis Temizliği'},{v:'otokar-arac',l:'Oto Tamir & Kaporta'}
      ]},
      { g:'Eğitim & Danışmanlık', items:[
        {v:'ozel-ders-hiz',l:'Özel Ders (Matematik, Fen, TYT...)'},{v:'dil-kursu-hiz',l:'Dil Kursu & Tercüme'},
        {v:'muzik-dersi',l:'Müzik Dersi'},{v:'bilgisayar-egitim',l:'Bilgisayar & Yazılım Eğitimi'},
        {v:'is-danismanlik',l:'İş & Kariyer Danışmanlığı'},{v:'hukuki-muhasebe-hiz',l:'Hukuki & Mali Müşavirlik'}
      ]},
      { g:'Yaratıcı & Dijital', items:[
        {v:'grafik-tasarim',l:'Grafik Tasarım'},{v:'web-yazilim-hiz',l:'Web & Yazılım Geliştirme'},
        {v:'seo-dijital-hiz',l:'SEO & Dijital Pazarlama'},{v:'foto-video-cekimi',l:'Fotoğraf & Video Çekimi'},
        {v:'sosyal-medya-hiz',l:'Sosyal Medya Yönetimi'},{v:'icerik-uretimi',l:'İçerik Üretimi & Metin Yazarlığı'}
      ]},
      { g:'Kişisel Hizmet', items:[
        {v:'dugun-organiz',l:'Düğün & Organizasyon'},{v:'catering-yemek',l:'Catering & Ev Yemeği'},
        {v:'saglik-guzel-hiz',l:'Sağlık & Güzellik Hizmeti'},{v:'cocuk-bakimi-hiz',l:'Çocuk Bakımı'},
        {v:'yasli-bakimi',l:'Yaşlı & Engelli Bakımı'},{v:'veteriner-pet-hiz',l:'Veteriner & Pet Bakım Hizmeti'}
      ]}
    ]
  },


  'ev-yasam': { label:'Ev & Yaşam', icon:'🏡', color:'#8e44ad',
    groups:[
      { g:'Mobilya — Oturma', items:[
        {v:'koltuk-kanape',l:'Koltuk & Kanepe'},{v:'l-kose',l:'L Köşe Takımı'},
        {v:'tv-unitesi',l:'TV Ünitesi & Televizyon Sehpası'},{v:'sehpa',l:'Sehpa & Orta Masa'},
        {v:'raf-kitaplik',l:'Raf & Kitaplık'},{v:'dolap-vitrin',l:'Vitrin & Dolap'},
        {v:'puf-berjer',l:'Puf & Berjer'}
      ]},
      { g:'Mobilya — Yatak Odası', items:[
        {v:'yatak-baza',l:'Yatak & Baza'},{v:'bas-lik',l:'Başlık & Karyola'},
        {v:'gardrop-dolap',l:'Gardrop & Dolap'},{v:'komadin',l:'Komodin & Şifonyer'},
        {v:'ayna-mobilya',l:'Ayna'},{v:'cocuk-yatagi',l:'Çocuk Yatağı & Ranza'},
        {v:'bebek-karyola',l:'Bebek Beşiği & Karyola'}
      ]},
      { g:'Mobilya — Mutfak & Yemek', items:[
        {v:'yemek-masa',l:'Yemek Masası & Sandalye'},{v:'mutfak-dolabi',l:'Mutfak Dolabı & Tezgah'},
        {v:'bar-tabure',l:'Bar Sandalyesi & Tabure'},{v:'calisma-masa',l:'Çalışma Masası & Sandalye'}
      ]},
      { g:'Mobilya — Bahçe & Balkon', items:[
        {v:'bahce-mobilya',l:'Bahçe Mobilya Takımı'},{v:'bahce-sandalye',l:'Bahçe Sandalyesi & Koltuk'},
        {v:'salincak-hamak',l:'Salıncak & Hamak'},{v:'sezlong',l:'Şezlong'},
        {v:'bahce-sans',l:'Bahçe Şemsiyesi'},{v:'bahce-bank',l:'Bank & Oturma Grubu'}
      ]},
      { g:'Beyaz Eşya', items:[
        {v:'buzdolabi',l:'Buzdolabı'},{v:'derin-dondurucu',l:'Derin Dondurucu'},
        {v:'camasir-makinesi',l:'Çamaşır Makinesi'},{v:'kurutma-makinesi',l:'Kurutma Makinesi'},
        {v:'camasir-kurutma-set',l:'Çamaşır Kurutma Seti (2\'li)'},{v:'bulasik-makinesi',l:'Bulaşık Makinesi'},
        {v:'ankastre-firin',l:'Ankastre Fırın & Set'},{v:'ocak-firin',l:'Ocak & Fırın (Ayrık)'},
        {v:'aspirator',l:'Aspiratör'},{v:'klima',l:'Klima'},{v:'kombi-kalorifer',l:'Kombi & Kalorifer'}
      ]},
      { g:'Küçük Ev Aletleri', items:[
        {v:'elektrikli-supurge',l:'Elektrikli Süpürge'},{v:'robot-supurge-ev',l:'Robot Süpürge'},
        {v:'buharvapor',l:'Buharlı Temizleyici'},{v:'kahve-makinesi',l:'Kahve Makinesi'},
        {v:'kapsul-kahve',l:'Kapsül Kahve Makinesi'},{v:'blender-mikser',l:'Blender & Mikser'},
        {v:'tost-ekmek',l:'Tost Makinesi & Ekmek Kızartıcı'},
        {v:'cay-semaver',l:'Çay Makinesi & Demlik & Semaver'},
        {v:'mutfak-robotu',l:'Mutfak Robotu & Food Processor'},
        {v:'waffle-izgara',l:'Waffle & Izgara & Çok Pişirici'},
        {v:'su-aritma',l:'Su Arıtma & Sebil'},{v:'utu-buhar',l:'Ütü & Buharlı Ütü'},
        {v:'sac-bakim-aleti',l:'Saç Kurutma & Düzleştirici & Maşa'},
        {v:'electrikli-tras',l:'Elektrikli Tıraş Makinesi & Epilasyon'},
        {v:'diger-kucuk-alet',l:'Diğer Küçük Ev Aleti'}
      ]},
      { g:'Dekorasyon', items:[
        {v:'tablo-resim',l:'Tablo & Resim'},{v:'avize-lamba',l:'Avize & Lamba & Abajur'},
        {v:'duvar-saati',l:'Duvar Saati'},{v:'hali-kilim',l:'Halı & Kilim & Yolluk'},
        {v:'perde-stor',l:'Perde & Stor Perde & Tül'},{v:'yastik-kirlent',l:'Yastık & Kirlent'},
        {v:'vazo-obje',l:'Vazo & Dekoratif Obje'},{v:'mum-koku',l:'Mum & Oda Kokusu & Difüzör'},
        {v:'duvar-kagidi',l:'Duvar Kağıdı & Sticker'},{v:'heykel-figur',l:'Heykel & Figür'}
      ]},
      { g:'Mutfak Gereçleri', items:[
        {v:'tencere-tava',l:'Tencere & Tava Takımı'},{v:'bicak-tahta',l:'Bıçak & Kesim Tahtası'},
        {v:'yemek-takimi',l:'Yemek Takımı (Tabak & Çanak)'},{v:'cam-bardak',l:'Cam & Bardak Seti'},
        {v:'cay-kahve-seti',l:'Çay & Kahve Seti'},{v:'servis-tepsi',l:'Servis & Tepsi'},
        {v:'sakla-kap',l:'Saklama Kabı & Termos'},{v:'pismez-tencere',l:'Pişmez Tencere & Teflon'}
      ]},
      { g:'Banyo', items:[
        {v:'banyo-aksesuar',l:'Banyo Aksesuar (Havluluk, Dispenser)'},{v:'dus-kabini',l:'Duş Kabini & Küvet'},
        {v:'havlu-bornoz',l:'Havlu & Bornoz'},{v:'ayna-banyo',l:'Banyo Aynası'},
        {v:'klozet-lavabo',l:'Klozet & Lavabo'}
      ]},
      { g:'Tekstil & Yatak', items:[
        {v:'nevresim',l:'Nevresim & Çarşaf'},{v:'yorgan-battaniye',l:'Yorgan & Battaniye & Pike'},
        {v:'uyku-yastigı',l:'Uyku Yastığı'},{v:'havlu',l:'Havlu & Banyo Seti'},
        {v:'masa-ortusu',l:'Masa Örtüsü & Kılavuz'}
      ]},
      { g:'Bahçe & Tamirat', items:[
        {v:'cim-bicme',l:'Çim Biçme Makinesi'},{v:'tohum-fide',l:'Tohum & Fide & Toprak'},
        {v:'saksı-saksılık',l:'Saksı & Saksılık'},{v:'hortum-sulama',l:'Hortum & Sulama Ekipmanı'},
        {v:'el-aleti',l:'El Aletleri (Çekiç, Tornavida...)'},{v:'elektrikli-alet',l:'Elektrikli Aletler (Matkap, Testere)'},
        {v:'boya-badana-mal',l:'Boya & Badana Malzemesi'},{v:'yapi-malzeme',l:'Yapı Malzemesi'},
        {v:'kaynak-kompresör',l:'Kaynak & Kompresör'}
      ]}
    ]
  },

  giyim: { label:'Giyim & Moda', icon:'👗', color:'#e91e8c',
    groups:[
      { g:'Kadın Giyim', items:[
        {v:'kadin-elbise-etek',l:'Elbise & Etek'},{v:'kadin-bluz-gomlek',l:'Bluz & Gömlek'},
        {v:'kadin-tisort',l:'T-shirt & Atlet'},{v:'kadin-kazak-triko',l:'Kazak & Triko & Hırka'},
        {v:'kadin-pantolon-jean',l:'Pantolon & Jean & Tayt'},{v:'kadin-sort',l:'Şort & Bermuda'},
        {v:'kadin-ceket',l:'Ceket & Blazer'},{v:'kadin-mont',l:'Mont & Kaban'},
        {v:'kadin-yelekli',l:'Yelek'},{v:'kadin-ic-camasir',l:'İç Çamaşırı & Sütyen'},
        {v:'kadin-pijama',l:'Pijama & Gecelik'},{v:'kadin-mayo-bikini',l:'Mayo & Bikini'},
        {v:'kadin-spor',l:'Kadın Spor Giyim'},{v:'abiye-abaya',l:'Abiye & Gece Elbise'},
        {v:'gelinlik',l:'Gelinlik & Nişanlık'},{v:'tesettür',l:'Tesettür Giyim'}
      ]},
      { g:'Erkek Giyim', items:[
        {v:'erkek-gomlek',l:'Gömlek'},{v:'erkek-tisort-polo',l:'T-shirt & Polo'},
        {v:'erkek-kazak',l:'Kazak & Hoodie & Hırka'},{v:'erkek-pantolon',l:'Pantolon'},
        {v:'erkek-jean',l:'Jean & Kargo'},{v:'erkek-sort',l:'Şort & Bermuda'},
        {v:'erkek-ceket-blazer',l:'Ceket & Blazer'},{v:'erkek-mont-kaban',l:'Mont & Kaban'},
        {v:'erkek-takim',l:'Takım Elbise & Smoking'},{v:'erkek-yelek',l:'Yelek'},
        {v:'erkek-ic-camasir',l:'İç Çamaşırı & Boxer'},{v:'erkek-corap',l:'Çorap'},
        {v:'erkek-spor',l:'Erkek Spor Giyim'},{v:'erkek-eşofman',l:'Eşofman Altı & Üstü'}
      ]},
      { g:'Çocuk & Bebek Giyim', items:[
        {v:'kiz-cocuk-giyim',l:'Kız Çocuk Giyim (2–14 yaş)'},{v:'erkek-cocuk-giyim',l:'Erkek Çocuk Giyim (2–14 yaş)'},
        {v:'bebek-kiyafet',l:'Bebek Kıyafeti (0–2 yaş)'},{v:'cocuk-mont-kaban',l:'Çocuk Mont & Kaban'},
        {v:'okul-kiyafeti',l:'Okul Kıyafeti & Önlük'},{v:'cocuk-pijama',l:'Çocuk Pijama & İç Giyim'}
      ]},
      { g:'Kadın Ayakkabı', items:[
        {v:'kadin-topuklu',l:'Topuklu Ayakkabı'},{v:'kadin-sandalet',l:'Sandalet & Terlik'},
        {v:'kadin-bot-cizme',l:'Bot & Çizme'},{v:'kadin-sneaker',l:'Sneaker & Spor Ayakkabı'},
        {v:'kadin-babet-loafer',l:'Babet & Loafer'},{v:'kadin-dolgu-topuk',l:'Dolgu Topuk & Wedge'}
      ]},
      { g:'Erkek Ayakkabı', items:[
        {v:'erkek-klasik',l:'Klasik & Oxford'},{v:'erkek-bot',l:'Bot & Çizme'},
        {v:'erkek-sneaker',l:'Sneaker & Spor Ayakkabı'},{v:'erkek-sandalet',l:'Sandalet & Terlik'},
        {v:'erkek-loafer',l:'Loafer & Mokasen'},{v:'erkek-ayakkabi-spor',l:'Spor Ayakkabı'}
      ]},
      { g:'Çocuk Ayakkabı', items:[
        {v:'cocuk-ayakkabi',l:'Çocuk Ayakkabısı'},{v:'bebek-patiği',l:'Bebek Patiği'},
        {v:'cocuk-spor-ayak',l:'Çocuk Spor Ayakkabı'}
      ]},
      { g:'Çanta & Aksesuar', items:[
        {v:'kadin-el-cantasi',l:'Kadın El Çantası'},{v:'kadin-omuz-canta',l:'Omuz Çantası'},
        {v:'sirt-cantasi',l:'Sırt Çantası'},{v:'erkek-canta',l:'Erkek Çantası & Evrak'},
        {v:'valiz-bavul',l:'Valiz & Bavul'},{v:'cuzdan-kartlik',l:'Cüzdan & Kartlık'},
        {v:'kemer',l:'Kemer'},{v:'sapka-bere-atki',l:'Şapka & Bere & Atkı'},
        {v:'eldiven-kol',l:'Eldiven'},{v:'kravat-papyon',l:'Kravat & Papyon & Mendil'}
      ]},
      { g:'Saat', items:[
        {v:'erkek-saat',l:'Erkek Saati'},{v:'kadin-saat',l:'Kadın Saati'},
        {v:'akilli-saat-mod',l:'Akıllı Saat (Moda)'},{v:'antika-saat-mod',l:'Antika & Koleksiyon Saati'}
      ]},
      { g:'Mücevher & Takı', items:[
        {v:'altin-bilezik',l:'Altın Bilezik & Künye'},{v:'altin-kolye',l:'Altın Kolye'},
        {v:'pırlanta-yuzuk',l:'Pırlanta & Taşlı Yüzük'},{v:'nisan-alyans',l:'Nişan & Alyans'},
        {v:'gumus-taki',l:'Gümüş Takı'},{v:'fantezi-taki',l:'Fantezi & Bijuteri Takı'},
        {v:'kupe',l:'Küpe'},{v:'bileklik-taki',l:'Bileklik'}
      ]},
      { g:'Gözlük', items:[
        {v:'gunes-gozlugu',l:'Güneş Gözlüğü'},{v:'optik-gozluk',l:'Optik Çerçeve & Lens'}
      ]},
      { g:'Markalar', brands:[
        'Adidas','Bershka','Calvin Klein','Columbia','Diesel','Gucci','H&M',
        'Kiabi','Lacoste',"Levi's",'Louis Vuitton','Mango','Michael Kors','Moncler',
        'New Balance','Nike','North Face','Puma','Pull&Bear','Ralph Lauren',
        'Stradivarius','Timberland','Tommy Hilfiger','Versace','Zara','Koton','Defacto','LC Waikiki'
      ]}
    ]
  },

  spor: { label:'Spor & Outdoor', icon:'⚽', color:'#f39c12',
    groups:[
      { g:'Fitness & Gym', items:[
        {v:'agirlik-dumbbell',l:'Dumbbell & Halter & Disk'},{v:'barbell-rack',l:'Barbell & Squat Rack'},
        {v:'bench-press-fit',l:'Bench Press'},{v:'kos-bandi',l:'Koşu Bandı'},
        {v:'eliptik-bisiklet',l:'Eliptik Bisiklet & Kondisyon Bisikleti'},{v:'kupe-kettlebell',l:'Kettlebell'},
        {v:'yoga-mat',l:'Yoga Matı & Pilates Aleti'},{v:'pull-up-bar',l:'Barfiks & Paralel'},
        {v:'atlama-ipi',l:'Atlama İpi & Egzersiz Ekipmanı'},{v:'protein-supleman',l:'Protein & Sporcu Takviyesi'}
      ]},
      { g:'Bisiklet', items:[
        {v:'mtb',l:'Dağ Bisikleti (MTB)'},{v:'road-bike',l:'Yol Bisikleti (Road)'},
        {v:'gravel-bike',l:'Gravel Bisiklet'},{v:'sehir-hibrit-bike',l:'Şehir & Hibrit Bisiklet'},
        {v:'bmx',l:'BMX'},{v:'e-bike',l:'Elektrikli Bisiklet (E-Bike)'},
        {v:'cocuk-bike',l:'Çocuk Bisikleti'},{v:'bisiklet-parca-aks',l:'Bisiklet Parça & Aksesuar'},
        {v:'kask-koruyucu',l:'Kask & Koruyucu'}
      ]},
      { g:'Takım Sporları', items:[
        {v:'futbol-top',l:'Futbol'},{v:'basketbol',l:'Basketbol'},{v:'voleybol',l:'Voleybol'},
        {v:'hentbol',l:'Hentbol'},{v:'ragbi',l:'Ragbi & Amerikan Futbolu'},
        {v:'beyzbol-softbol',l:'Beyzbol & Softbol'}
      ]},
      { g:'Raket & Kort Sporları', items:[
        {v:'tenis-raket',l:'Tenis'},{v:'padel',l:'Padel'},{v:'badminton',l:'Badminton'},
        {v:'masa-tenisi',l:'Masa Tenisi'},{v:'squash',l:'Squash'}
      ]},
      { g:'Su & Dalış Sporları', items:[
        {v:'yuzme-malzeme',l:'Yüzme Ekipmanı'},{v:'surf-wakeboard',l:'Sörf & Wakeboard'},
        {v:'dalis-ekipman',l:'Dalış Ekipmanı (Tüp, Maske...)'},{v:'kano-kayak-su',l:'Kano & Kayak'},
        {v:'jet-ski-yelken',l:'Jet-ski & Yelken Sporları'},{v:'balık-olta',l:'Balıkçılık & Olta'}
      ]},
      { g:'Kış Sporları', items:[
        {v:'kayak-tahtası',l:'Kayak'},{v:'snowboard',l:'Snowboard'},{v:'kayak-bot',l:'Kayak Botu & Bağlama'},
        {v:'paten',l:'Buz Pateni & Rulo Paten'},{v:'kayak-mont',l:'Kayak Montu & Pantolonu'}
      ]},
      { g:'Outdoor & Kamp', items:[
        {v:'cadır-kamp',l:'Çadır & Kamp Malzemesi'},{v:'uyku-tulumu',l:'Uyku Tulumu'},
        {v:'kamp-ocak',l:'Kamp Ocağı & Taşımalı Gaz'},{v:'sirt-cantasi-outdoor',l:'Sırt Çantası (Hiking)'},
        {v:'tirmanma',l:'Tırmanma & Dağcılık'},{v:'pusula-gps',l:'Pusula & GPS & Telsiz'}
      ]},
      { g:'Dövüş & Savunma', items:[
        {v:'boks-muay',l:'Boks & Muay Thai'},{v:'gures-judo-bjj',l:'Güreş & Judo & BJJ'},
        {v:'karate-tkd',l:'Karate & Taekwondo'},{v:'kılıç-eskrim',l:'Eskrim & Kılıç Sanatı'},
        {v:'koruyucu-dov',l:'Koruyucu Ekipman & Eldiven'}
      ]},
      { g:'Av & Atıcılık', items:[
        {v:'olta-av',l:'Avcılık Ekipmanı'},{v:'ok-yay',l:'Ok & Yay & Havalı Silah'},
        {v:'av-kiyafet',l:'Av Kıyafeti & Bot'}
      ]},
      { g:'Markalar', brands:[
        'Adidas','Asics','Brooks','Columbia','Decathlon','Giant','Head','Mammut',
        'New Balance','Nike','Puma','Reebok','Salomon','Scott','Trek','Under Armour','Wilson'
      ]}
    ]
  },

  hobi: { label:'Hobi & Koleksiyon', icon:'🎨', color:'#16a085',
    groups:[
      { g:'Müzik Aletleri', items:[
        {v:'akustik-gitar',l:'Akustik Gitar'},{v:'klasik-gitar',l:'Klasik Gitar'},
        {v:'elektro-gitar',l:'Elektro Gitar & Amplifikatör'},{v:'bas-gitar',l:'Bas Gitar'},
        {v:'akustik-piyano',l:'Akustik Piyano'},{v:'dijital-piyano',l:'Dijital Piyano & Keyboard'},
        {v:'davul-perküsyon',l:'Davul & Perküsyon & Ritim'},{v:'keman',l:'Keman & Viyola & Çello'},
        {v:'nefesli-saksofon',l:'Saksofon & Klarnet'},{v:'nefesli-flut',l:'Flüt & Blokflüt'},
        {v:'nefesli-trompet',l:'Trompet & Trombon'},{v:'akordeon',l:'Akordeon & Mızıka'},
        {v:'baglama-saz',l:'Bağlama & Saz'},{v:'ud-kanun',l:'Ud & Kanun & Türk Çalgıları'},
        {v:'darbuka-def',l:'Darbuka & Def & Davul'},{v:'studio-ekipman',l:'Stüdyo Ekipmanı & Ses Kartı'},
        {v:'nota-muzik-kitap',l:'Nota & Müzik Kitabı'}
      ]},
      { g:'Sanat & El İşi', items:[
        {v:'tuval-boyama',l:'Tuval & Boyama Malzemesi'},{v:'suluboya',l:'Suluboya & Pastel'},
        {v:'heykel-seramik',l:'Heykel & Seramik & Çömlek'},{v:'el-sanatlari',l:'El Sanatları & Takı Yapımı'},
        {v:'nakis-orgu',l:'Nakış & Örgü & Dikiş'},{v:'quilling-origami',l:'Quilling & Origami'},
        {v:'agac-islemeciligi',l:'Ahşap İşlemeciliği'},{v:'kaligraf-hat',l:'Kaligrafi & Hat Sanatı'}
      ]},
      { g:'Koleksiyon', items:[
        {v:'pul-filatelya',l:'Pul & Filatelya'},{v:'sikke-para',l:'Sikke & Madeni Para'},
        {v:'banknot-kagit',l:'Banknot & Kağıt Para'},{v:'eski-kitap-koleksiyon',l:'Eski Kitap & Dergi'},
        {v:'koleksiyon-sanat',l:'Tablo & Sanat Eseri'},{v:'oyuncak-figur',l:'Koleksiyon Oyuncak & Figür'},
        {v:'spor-karti',l:'Spor Kartı (Futbol, NBA...)'},{v:'vinyl-koleksiyon',l:'Plak & Vinyl Koleksiyon'},
        {v:'rozet-insignia',l:'Rozet & Yaka İğnesi'},{v:'porselen-kristal',l:'Porselen & Kristal'},
        {v:'antika-saat-kol',l:'Antika & Mekanik Saat'},{v:'lego-seti',l:'LEGO Seti (Koleksiyon)'}
      ]},
      { g:'Model & Maket', items:[
        {v:'model-araba-diecast',l:'Model Araba & Die-cast'},{v:'maket-gemi-ucak',l:'Maket Gemi & Uçak & Tank'},
        {v:'warhammer-minyatur',l:'Warhammer & Minyatür'},{v:'rc-araba',l:'RC Araba & Bot & Drone'},
        {v:'model-tren',l:'Model Tren & Demiryolu'}
      ]},
      { g:'Oyun & Eğlence', items:[
        {v:'kutu-oyunu',l:'Kutu Oyunu'},{v:'kart-oyunu-pokemon',l:'Kart Oyunu (Pokémon, MTG, Yu-Gi-Oh)'},
        {v:'puzzle-yapboz',l:'Puzzle & Yapboz'},{v:'satranc-zeka',l:'Satranç & Zeka Oyunları'},
        {v:'dart-bilardo',l:'Dart & Bilardo'},{v:'langirt',l:'Langırt & Masa Futbolu'},
        {v:'dama-tavla',l:'Dama & Tavla'},{v:'rol-oyun',l:'Rol Yapma & RPG Kitap'}
      ]},
      { g:'Antika', items:[
        {v:'antika-mobilya-tur',l:'Antika Mobilya'},{v:'antika-porselen-tur',l:'Antika Porselen & Kristal'},
        {v:'antika-saat-antika',l:'Antika Saat'},{v:'antika-silah',l:'Antika Silah & Kılıç'},
        {v:'antika-kumas-kilim',l:'Antika Kumaş & Kilim'},{v:'antika-diger',l:'Diğer Antika'}
      ]}
    ]
  },

  bebek: { label:'Bebek & Çocuk', icon:'👶', color:'#ff9800',
    groups:[
      { g:'Bebek (0–2 Yaş)', items:[
        {v:'bebek-arabasi',l:'Bebek Arabası & Travel Sistem'},{v:'oto-koltuğu',l:'Oto Koltuğu (Bebek)'},
        {v:'besik-karyola',l:'Beşik & Karyola'},{v:'mama-sandalyesi',l:'Mama Sandalyesi'},
        {v:'bebek-banyo',l:'Bebek Küveti & Banyo'},{v:'biberon-emzirme',l:'Biberon & Emzirme & Mama'},
        {v:'bebek-monitor-tels',l:'Bebek Telsizi & Monitör'},{v:'bebek-bakım-mat',l:'Bebek Bakım Matı & Alt Açma'},
        {v:'bebek-salıncak',l:'Bebek Salıncağı & Hamak'},{v:'bebek-portbebe',l:'Portbebé & Kanguru'}
      ]},
      { g:'Çocuk (2–14 Yaş)', items:[
        {v:'oyuncak-bebek',l:'Oyuncak Bebek & Barbie'},{v:'araba-oyuncak',l:'Araba & Araç Oyuncak'},
        {v:'lego-yapboz-coc',l:'LEGO & Yapboz & Blok Oyuncak'},{v:'egitici-oyuncak',l:'Eğitici & Yaratıcı Oyuncak'},
        {v:'plaj-havuz-oyuncak',l:'Plaj & Havuz Oyuncağı'},{v:'kaydırak-salıncak',l:'Kaydırak & Salıncak & Park Seti'},
        {v:'bisiklet-coc',l:'Çocuk Bisikleti & Scooter'},{v:'cocuk-kitabi-tur',l:'Çocuk Kitabı & Boyama'},
        {v:'okul-cantasi-mat',l:'Okul Çantası & Malzeme'},{v:'kostum-cosplay',l:'Kostüm & Kıyafet'},
        {v:'cocuk-odasi-mol',l:'Çocuk Odası Mobilyası'},{v:'oyun-konsol-coc',l:'Çocuk Oyun Konsolu & Tablet'}
      ]},
      { g:'Bebek Markaları', brands:[
        'BabyBjörn','Chicco','Graco','Joie','Maxi-Cosi','Mamas & Papas','Quinny',
        'LEGO','Fisher-Price','Barbie','Hot Wheels','Playmobil','Vtech'
      ]}
    ]
  },

  kitap: { label:'Kitap, Film & Müzik', icon:'📚', color:'#795548',
    groups:[
      { g:'Kitap Türleri', items:[
        {v:'roman-hikaye',l:'Roman & Hikaye'},{v:'bilim-kurgu-fantastik',l:'Bilim Kurgu & Fantastik'},
        {v:'tarihi-roman',l:'Tarihi Roman'},{v:'polisiye-gerilim',l:'Polisiye & Gerilim'},
        {v:'biyografi-anı',l:'Biyografi & Anı'},{v:'kisisel-gelisim-kit',l:'Kişisel Gelişim & Motivasyon'},
        {v:'bilim-populer-kit',l:'Bilim & Popüler Bilim'},{v:'tarih-cografya-kit',l:'Tarih & Coğrafya'},
        {v:'felsefe-psikoloji-kit',l:'Felsefe & Psikoloji'},{v:'din-maneviyat-kit',l:'Din & Maneviyat'},
        {v:'seyahat-rehberi-kit',l:'Seyahat Rehberi'},{v:'yemek-tarif-kit',l:'Yemek & Tarif Kitabı'},
        {v:'sanat-tasarim-kit',l:'Sanat & Tasarım Kitabı'},{v:'cocuk-kitabi-tur2',l:'Çocuk & Gençlik Kitabı'}
      ]},
      { g:'Ders & Eğitim', items:[
        {v:'ilk-orta-ders',l:'İlkokul & Ortaokul Ders Kitabı'},{v:'lise-ders',l:'Lise Ders Kitabı'},
        {v:'universite-ders',l:'Üniversite Ders Kitabı'},{v:'sinav-yks',l:'YKS & LGS Sınav Kitabı'},
        {v:'kpss-ales',l:'KPSS & ALES & DGS Kitabı'},{v:'dil-egitim',l:'Yabancı Dil Kitabı'},
        {v:'ansiklopedi',l:'Ansiklopedi & Sözlük'}
      ]},
      { g:'Film, Müzik & Medya', items:[
        {v:'cd-album',l:'CD & Albüm'},{v:'vinyl-plak-mat',l:'Vinyl Plak'},
        {v:'kaset-materyal',l:'Kaset'},{v:'dvd-bluray',l:'DVD & Blu-ray'},
        {v:'vhs-mat',l:'VHS'},{v:'dergi-gazete',l:'Dergi & Gazete'}
      ]}
    ]
  },

  hayvan: { label:'Hayvanlar & Evcil', icon:'🐾', color:'#4caf50',
    groups:[
      { g:'Köpek', items:[
        {v:'kopek-sahiplendirme',l:'Köpek Sahiplendirme'},{v:'kopek-satilik',l:'Satılık Köpek Yavrusu'},
        {v:'kopek-mama',l:'Köpek Maması & Ödül'},{v:'kopek-yatak-kafes',l:'Yatak & Kafes & Köpek Evi'},
        {v:'kopek-tasma-gezdirme',l:'Tasma & Gezdirme Halatı'},{v:'kopek-oyuncak',l:'Köpek Oyuncağı'},
        {v:'kopek-giyim',l:'Köpek Kıyafeti & Aksesuar'},{v:'kopek-saglik',l:'Köpek Sağlık & Bakım'}
      ]},
      { g:'Kedi', items:[
        {v:'kedi-sahiplendirme',l:'Kedi Sahiplendirme'},{v:'kedi-satilik',l:'Satılık Kedi'},
        {v:'kedi-mama',l:'Kedi Maması & Ödül'},{v:'kedi-kumu-tuvalet',l:'Kedi Kumu & Tuvalet'},
        {v:'kedi-tirmalam-kule',l:'Tırmalama Tahtası & Kule'},{v:'kedi-oyuncak',l:'Kedi Oyuncağı'},
        {v:'kedi-saglik',l:'Kedi Sağlık & Bakım'},{v:'kedi-tasima',l:'Kedi Taşıma Çantası'}
      ]},
      { g:'Kuş & Kümes', items:[
        {v:'muhabbet-kus',l:'Muhabbet Kuşu'},{v:'papagan',l:'Papağan (Jako, Kakadu...)'},
        {v:'cennet-kus',l:'Cennet Papağanı & İspinozu'},{v:'kus-kafes',l:'Kafes & Kuş Aksesuar'},
        {v:'tavuk-kumes',l:'Tavuk & Kümes Hayvanı'}
      ]},
      { g:'Akvaryum & Su Canlıları', items:[
        {v:'akvaryum-balik',l:'Akvaryum Balığı'},{v:'akvaryum-malzeme',l:'Akvaryum & Filtre & Pompa'},
        {v:'kaplumbaga',l:'Kaplumbağa'}
      ]},
      { g:'Küçük Evcil & Diğer', items:[
        {v:'hamster-kobay',l:'Hamster & Kobay & Fare'},{v:'tavsan',l:'Tavşan'},
        {v:'surungenler',l:'Sürüngen & Egzotik (Yılan, Kertenkele)'},{v:'at-ekipman',l:'At & At Ekipmanı'},
        {v:'ciftlik-hayvan',l:'Çiftlik Hayvanı'},{v:'hayvan-saglik-urun',l:'Veteriner & Sağlık Ürünü'}
      ]}
    ]
  },

  saglik: { label:'Sağlık & Güzellik', icon:'💊', color:'#00bcd4',
    groups:[
      { g:'Kişisel Bakım', items:[
        {v:'cilt-bakim',l:'Cilt Bakım & Serum'},{v:'sac-bakim-urun',l:'Saç Bakım Ürünleri & Şampuan'},
        {v:'parfum',l:'Parfüm'},{v:'deodorant',l:'Deodorant & Roll-on'},
        {v:'makyaj-fondoten',l:'Makyaj (Fondöten, Pudra, Far)'},{v:'dudak-ruju',l:'Dudak Ürünleri (Ruj, Parlatıcı)'},
        {v:'tirnak-oje',l:'Tırnak & Oje'},{v:'agda-epilasyon-alt',l:'Agda & Epilasyon Cihazı'}
      ]},
      { g:'Sağlık Cihazları', items:[
        {v:'tansiyon-aleti',l:'Tansiyon Aleti'},{v:'sekermetre',l:'Şeker Ölçer (Glükometre)'},
        {v:'oksimetre',l:'Oksimetre & Nabız Ölçer'},{v:'nebulizator',l:'Nebülizatör'},
        {v:'terapi-cihazi',l:'Tens & Lazer Terapi Cihazı'},{v:'tekerlekli-sandalye',l:'Tekerlekli Sandalye & Koltuk Değneği'},
        {v:'ortopedik-ürün',l:'Ortopedik Yastık & Korse'}
      ]},
      { g:'Masaj & Rahatlama', items:[
        {v:'masaj-cihazi',l:'Masaj Aleti & Masaj Koltuğu'},
        {v:'hamam-sauna',l:'Sauna & Buhar Odası'},{v:'aromaterapi',l:'Aromaterapi & Uçucu Yağ'}
      ]},
      { g:'Spor Sağlık', items:[
        {v:'protein-supleman-sag',l:'Protein & Sporcu Takviyesi'},{v:'vitamin-mineral',l:'Vitamin & Mineral'}
      ]}
    ]
  },

  ofis: { label:'Ofis & Kırtasiye', icon:'🖊️', color:'#607d8b',
    groups:[
      { g:'Ofis Mobilyası', items:[
        {v:'ofis-masasi',l:'Ofis Masası'},{v:'ofis-sandalye',l:'Ofis Sandalyesi & Koltuk'},
        {v:'dosya-dolabi',l:'Dosya Dolabı'},{v:'toplanti-masasi',l:'Toplantı Masası'},
        {v:'bekleme-koltuk',l:'Bekleme Koltuğu'},{v:'para-kasasi',l:'Para Kasası'}
      ]},
      { g:'Ofis Ekipmanı', items:[
        {v:'fotokopi-baski',l:'Fotokopi & Baskı Makinesi'},{v:'projektor-sunu',l:'Projektör & Sunum Ekranı'},
        {v:'yazarkasa-pos',l:'Yazarkasa & POS Cihazı'},{v:'telefon-santral',l:'Telefon & Santral'},
        {v:'laminasyon-cilt',l:'Laminasyon & Ciltleme Makinesi'}
      ]},
      { g:'Kırtasiye & Okul', items:[
        {v:'kirtasiye-genel',l:'Genel Kırtasiye Malzemesi'},{v:'defter-blok',l:'Defter & Bloknot'},
        {v:'kalem-kalemlik',l:'Kalem & Kalemlik & Silgi'},{v:'canta-evrak',l:'Evrak Çantası'},
        {v:'planlayici-ajanda',l:'Planlayıcı & Ajanda'}
      ]}
    ]
  },

  insaat: { label:'İnşaat & Sanayi', icon:'🏗️', color:'#ff5722',
    groups:[
      { g:'Yapı Malzemesi', items:[
        {v:'cimento-kum',l:'Çimento & Kum & Agrega'},{v:'beton-blok',l:'Beton Blok & Tuğla'},
        {v:'demir-celik',l:'Demir & Çelik Profil'},{v:'ahsap-kereste',l:'Ahşap & Kereste'},
        {v:'cam-profil',l:'Cam & PVC Profil & Doğrama'},{v:'boru-tesisat',l:'Boru & Tesisat Malzemesi'},
        {v:'yalitim',l:'Yalıtım Malzemesi'},{v:'çatı-malzeme',l:'Çatı & Kiremit Malzemesi'}
      ]},
      { g:'İş Makineleri & Alet', items:[
        {v:'kompresör',l:'Kompresör'},{v:'kaynak-makinesi-san',l:'Kaynak Makinesi'},
        {v:'forklift',l:'Forklift & İstifleyici'},{v:'jenerator-san',l:'Jeneratör'},
        {v:'pompa-motor',l:'Pompa & Motor'},{v:'uretim-makinesi',l:'Üretim & Fabrika Makinesi'},
        {v:'vinc-telfer',l:'Vinç & Telfer'}
      ]},
      { g:'Elektrik & Güneş', items:[
        {v:'kablo-priz',l:'Kablo & Priz & Sigorta'},{v:'sanayi-aydinlatma',l:'Endüstriyel Aydınlatma'},
        {v:'pano-otomasyon',l:'Elektrik Panosu & Otomasyon'},{v:'gunes-panel',l:'Güneş Paneli & Solar Sistem'}
      ]}
    ]
  },

  gida: { label:'Yiyecek & Tarım', icon:'🥗', color:'#8bc34a',
    groups:[
      { g:'Tarım & Organik', items:[
        {v:'organik-sebze-meyve',l:'Organik Sebze & Meyve'},{v:'balik-deniz',l:'Balık & Deniz Ürünü'},
        {v:'et-kasap',l:'Et & Kasap Ürünleri'},{v:'sut-peynir-yogurt',l:'Süt & Peynir & Yoğurt'},
        {v:'yumurta',l:'Yumurta'},{v:'bal-pekmez-receel',l:'Bal & Pekmez & Reçel'}
      ]},
      { g:'Gıda Ürünleri', items:[
        {v:'kuruyemis',l:'Kuruyemiş & Çekirdek'},{v:'tahil-baklagil',l:'Tahıl & Baklagil'},
        {v:'baharat-sos',l:'Baharat & Sos'},{v:'zeytinyagi-yag',l:'Zeytinyağı & Yağlar'},
        {v:'hazir-konserve',l:'Hazır Gıda & Konserve'}
      ]},
      { g:'İçecek', items:[
        {v:'cay-kahve-mat',l:'Çay & Kahve'},{v:'dogal-iceecek',l:'Doğal & Bitki Çayı'},
        {v:'meyve-suyu',l:'Meyve Suyu & İçecek'}
      ]},
      { g:'Tarım Ekipmanı', items:[
        {v:'tarim-aleti',l:'Tarım Aleti'},{v:'serasyon',l:'Sera & Sera Malzemeleri'},
        {v:'gübre-ilaç',l:'Gübre & Bitki İlacı'}
      ]}
    ]
  },

  diger: { label:'Diğer', icon:'🔖', color:'#9e9e9e',
    groups:[
      { g:'Diğer', items:[
        {v:'hediye-ambalaj',l:'Hediye & Ambalaj'},{v:'dini-esya',l:'Dini Eşya & Tesbih'},
        {v:'gelinlik-diger',l:'Düğün & Nişan Malzemesi'},{v:'yeni-urun',l:'Sıfır Ürün (İndirimli)'},
        {v:'diger-genel',l:'Diğer / Belirtilmemiş'}
      ]}
    ]
  }
};

/* ── YARDIMCI FONKSİYONLAR ── */

/** [{key, label, icon, color}] listesi döner */
function getCatList() {
  return Object.entries(CAT).map(([key,c])=>({key,label:c.label,icon:c.icon,color:c.color}));
}

/** Tüm alt kategorileri düz liste olarak döner [{v,l}] */
function getSubList(catKey) {
  const cat = CAT[catKey];
  if(!cat) return [];
  const all = [];
  (cat.groups||[]).forEach(g => {
    if(g.items) g.items.forEach(it => all.push(it));
  });
  return all;
}

/** Form için optgroup'lu HTML */
function buildSubOptions(catKey, selectedSub) {
  const cat = CAT[catKey];
  if(!cat) return '<option value="">Seçin</option>';
  let html = '<option value="">Seçin</option>';
  (cat.groups||[]).forEach(g => {
    if(!g.items || !g.items.length) return;
    html += `<optgroup label="${g.g}">`;
    g.items.forEach(it => {
      html += `<option value="${it.v}"${it.v===selectedSub?' selected':''}>${it.l}</option>`;
    });
    html += '</optgroup>';
  });
  return html;
}

/** Form kategori select HTML */
function buildCatOptions(selectedCat) {
  return '<option value="">— Kategori Seçin —</option>' +
    getCatList().map(c =>
      `<option value="${c.key}"${c.key===selectedCat?' selected':''}>${c.icon} ${c.label}</option>`
    ).join('');
}
