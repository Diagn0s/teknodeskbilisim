import {
  Cable,
  Network,
  Server,
  Layers,
  Cctv,
  Headset,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Tekno Desk Bilişim",
  shortName: "Tekno Desk",
  description:
    "Yapısal kablolama, network çözümleri, veri merkezi kurulumu, sunucu sanallaştırma, kamera sistemleri ve bilgi işlem desteği alanlarında kurumsal BT hizmetleri.",
  url: "https://www.teknodeskbilisim.com",
  phone: "+90 (212) 555 01 23",
  phoneHref: "tel:+902125550123",
  email: "info@teknodeskbilisim.com",
  whatsapp: "https://wa.me/902125550123",
  address: "İstanbul",
  workingHours: "Pazartesi - Cuma, 09:00 - 18:30",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
};

export const navItems = [
  { title: "Anasayfa", href: "/" },
  { title: "Hakkımızda", href: "/hakkimizda" },
  { title: "Hizmetler", href: "/hizmetler" },
  { title: "Blog", href: "/blog" },
  { title: "Referanslar", href: "/referanslar" },
  { title: "İletişim", href: "/iletisim" },
] as const;

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  detail: string;
};

export const services: Service[] = [
  {
    slug: "internet-kablolama",
    title: "İnternet Kablolama",
    tagline: "Hızlı ve Güvenilir",
    description:
      "Kesintisiz bağlantı için profesyonel yapısal kablolama hizmeti.",
    icon: Cable,
    image: "/images/services/internet-kablolama.jpg",
    features: [
      "Cat6 / Cat6A / Fiber optik yapısal kablolama",
      "Patch panel, rack ve keystone düzenlemesi",
      "Kablo sertifikasyon testi ve raporlama",
      "Ofis taşıma ve genişletme projelerinde kablolama revizyonu",
    ],
    detail:
      "İş yerinizin veri altyapısını, uluslararası TIA/EIA standartlarına uygun şekilde uçtan uca planlıyor ve uyguluyoruz. Düzenli kablolama; arıza sürelerini azaltır, ağ performansını artırır ve gelecekteki büyümeye hazır bir altyapı sağlar.",
  },
  {
    slug: "network-cozumleri",
    title: "Network Çözümleri",
    tagline: "Yüksek Performans",
    description:
      "Genişletilebilir, güvenli ve yüksek performanslı ağ mimarileri.",
    icon: Network,
    image: "/images/services/network-cozumleri.jpg",
    features: [
      "Kurumsal switch, router ve firewall konfigürasyonu",
      "VLAN, VPN ve site-to-site bağlantı tasarımı",
      "Kablosuz ağ (Wi-Fi) planlama ve kapsama optimizasyonu",
      "Ağ izleme, güvenlik duvarı ve trafik yönetimi",
    ],
    detail:
      "İşletmenizin büyüklüğüne ve ihtiyacına göre ölçeklenebilir network mimarileri kuruyoruz. Amacımız; kesintisiz, güvenli ve yönetilebilir bir ağ altyapısıyla operasyonlarınızı sorunsuz sürdürmenizi sağlamak.",
  },
  {
    slug: "veri-merkezi-kurulumu",
    title: "Veri Merkezi Kurulumu",
    tagline: "Güvenli Altyapı",
    description:
      "Uluslararası standartlarda veri merkezi ve sistem odası projeleri.",
    icon: Server,
    image: "/images/services/veri-merkezi-kurulumu.jpg",
    features: [
      "Sistem odası ve veri merkezi anahtar teslim projelendirme",
      "Kesintisiz güç kaynağı (UPS) ve klima entegrasyonu",
      "Rack, kablolama ve kapasite planlaması",
      "Erişim kontrolü ve fiziksel güvenlik önlemleri",
    ],
    detail:
      "Kritik verilerinizin barındığı sistem odalarını, uluslararası veri merkezi standartlarına (TIA-942 vb.) uygun olarak tasarlıyor ve kuruyoruz. Güç, soğutma, güvenlik ve erişilebilirlik bir arada planlanır.",
  },
  {
    slug: "sunucu-sanallastirma",
    title: "Sunucu Sanallaştırma",
    tagline: "Maliyet ve Verimlilik",
    description:
      "Kaynak tasarrufu ve yüksek verim sağlayan sanal sunucu ve bulut hizmetleri.",
    icon: Layers,
    image: "/images/services/sunucu-sanallastirma.jpg",
    features: [
      "VMware / Hyper-V sanallaştırma altyapısı kurulumu",
      "Sunucu konsolidasyonu ile donanım ve enerji tasarrufu",
      "Yedekleme, felaket kurtarma (disaster recovery) planlaması",
      "Hibrit ve özel bulut mimarileri",
    ],
    detail:
      "Fiziksel sunucu sayınızı azaltarak maliyetlerinizi düşürüyor, aynı zamanda esneklik ve yönetim kolaylığı sağlıyoruz. Sanallaştırma altyapınızı iş sürekliliğini önceleyerek kuruyoruz.",
  },
  {
    slug: "kamera-kurulumu",
    title: "Kamera Kurulumu Hizmetleri",
    tagline: "7/24 Güvenlik",
    description:
      "İş yerinizin güvenliği için yüksek çözünürlüklü IP ve güvenlik kamerası sistemleri.",
    icon: Cctv,
    image: "/images/services/kamera-kurulumu.jpg",
    features: [
      "IP tabanlı yüksek çözünürlüklü kamera sistemleri",
      "Uzaktan izleme ve mobil erişim entegrasyonu",
      "NVR/DVR kayıt sistemleri ve depolama planlaması",
      "Bakım, arıza giderme ve sistem güncelleme desteği",
    ],
    detail:
      "İşletmenizin fiziksel güvenliğini artırmak için ihtiyacınıza uygun kamera sistemlerini planlıyor, kuruyor ve 7/24 uzaktan erişilebilir hale getiriyoruz.",
  },
  {
    slug: "bilgi-islem-destegi",
    title: "Bilgi İşlem Desteği",
    tagline: "Kesintisiz Destek",
    description:
      "Kurumsal IT altyapınız için profesyonel teknik ve bakım hizmetleri.",
    icon: Headset,
    image: "/images/services/bilgi-islem-destegi.jpg",
    features: [
      "Yerinde ve uzaktan teknik destek",
      "Periyodik bakım ve önleyici izleme",
      "Donanım / yazılım arıza giderme",
      "IT altyapı danışmanlığı ve raporlama",
    ],
    detail:
      "Kurumunuzun bilgi işlem altyapısını sürekli izleyerek olası sorunları önceden tespit ediyor, kesintisiz bir teknik destek deneyimi sunuyoruz.",
  },
];

export const stats = [
  { label: "Tamamlanan Proje", value: 320, suffix: "+" },
  { label: "Kurumsal Müşteri", value: 140, suffix: "+" },
  { label: "Yıllık Tecrübe", value: 12, suffix: "+" },
  { label: "Destek Hizmeti", value: 7, suffix: "/24" },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Emre Kaya",
    role: "IT Direktörü",
    company: "Nova Teknoloji A.Ş.",
    quote:
      "Tekno Desk Bilişim ile yaptığımız network yenileme projesi sonrasında kesinti sorunlarımız tamamen ortadan kalktı. Profesyonel ve zamanında bir ekip.",
  },
  {
    name: "Selin Arslan",
    role: "Operasyon Müdürü",
    company: "Marmara Lojistik",
    quote:
      "Veri merkezi kurulumu sürecinde gösterdikleri titizlik ve şeffaf iletişim projeyi sorunsuz tamamlamamızı sağladı. Kesinlikle tavsiye ediyoruz.",
  },
  {
    name: "Burak Yıldız",
    role: "Genel Müdür",
    company: "Ege Tekstil San. Tic. Ltd.",
    quote:
      "Kamera sistemlerimizi ve sunucu sanallaştırma altyapımızı birlikte yeniledik. Hem maliyet hem performans anlamında büyük fark yarattı.",
  },
  {
    name: "Ayşe Demir",
    role: "Bilgi İşlem Sorumlusu",
    company: "Anadolu Sigorta Aracılık",
    quote:
      "7/24 bilgi işlem desteği sayesinde arıza anlarında dakikalar içinde çözüm alıyoruz. Uzun süredir çalıştığımız güvenilir bir iş ortağı.",
  },
  {
    name: "Caner Öztürk",
    role: "Proje Yöneticisi",
    company: "Kuzey İnşaat Holding",
    quote:
      "Yeni ofis binamızın yapısal kablolama ve network altyapısını uçtan uca Tekno Desk Bilişim kurdu. Sonuç beklentimizin üzerindeydi.",
  },
  {
    name: "Merve Şahin",
    role: "Finans Direktörü",
    company: "Baltık Gıda A.Ş.",
    quote:
      "Bütçe dostu bir sanallaştırma çözümüyle sunucu maliyetlerimizi ciddi oranda düşürdük. Ekip her aşamada bilgilendirici ve şeffaftı.",
  },
];

export const clientLogos = [
  "Nova Teknoloji",
  "Marmara Lojistik",
  "Ege Tekstil",
  "Anadolu Sigorta",
  "Kuzey İnşaat",
  "Baltık Gıda",
  "Silverline Holding",
  "Vertex Enerji",
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readingTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "yapisal-kablolamada-dikkat-edilmesi-gerekenler",
    title: "Yapısal Kablolamada Dikkat Edilmesi Gereken 5 Nokta",
    excerpt:
      "Ofis veya sistem odanızda yapılacak kablolama projesinde performansı ve ömrü doğrudan etkileyen kritik noktaları derledik.",
    category: "Network",
    date: "2026-05-12",
    readingTime: "5 dk",
    image: "/images/blog/yapisal-kablolamada-dikkat-edilmesi-gerekenler.jpg",
    content: [
      "Yapısal kablolama, görünürde basit ama uzun vadede işletmenizin ağ performansını doğrudan etkileyen bir yatırımdır. Doğru planlanmayan bir kablolama projesi; kesintilere, yavaş veri aktarımına ve ileride yapılacak revizyonlarda ciddi maliyetlere yol açabilir.",
      "Öncelikle kablo kategorisinin doğru seçilmesi gerekir. Günümüz kurumsal ihtiyaçları için Cat6A ve üzeri kablolama, gelecekteki bant genişliği taleplerine karşı daha güvenli bir seçimdir.",
      "İkinci kritik nokta, kablo yollarının ve mesafelerin standartlara uygun planlanmasıdır. Elektrik hatlarına çok yakın döşenen veri kabloları, sinyal bozulmalarına (crosstalk) neden olabilir.",
      "Üçüncüsü, patch panel ve rack düzenlemesinin etiketleme standardına uygun yapılması, ileride yapılacak arıza tespitini ve genişletmeleri büyük ölçüde kolaylaştırır.",
      "Dördüncü olarak, kablolama tamamlandıktan sonra sertifikasyon testi yapılması, hattın gerçekten belirtilen performansı sağladığını garanti altına alır.",
      "Son olarak, kablolama projesini yalnızca bugünün ihtiyacına göre değil, önümüzdeki 5-10 yıllık büyüme planına göre tasarlamak, tekrar yatırım yapma ihtiyacını ortadan kaldırır.",
    ],
  },
  {
    slug: "kurumsal-agda-guvenlik-katmanlari",
    title: "Kurumsal Ağlarda Güvenlik Katmanları Nasıl Kurulur?",
    excerpt:
      "Firewall'dan VLAN segmentasyonuna kadar kurumsal network güvenliğinin temel katmanlarını inceliyoruz.",
    category: "Güvenlik",
    date: "2026-04-02",
    readingTime: "6 dk",
    image: "/images/blog/kurumsal-agda-guvenlik-katmanlari.jpg",
    content: [
      "Kurumsal ağ güvenliği tek bir üründen değil, birbirini tamamlayan birden fazla katmandan oluşur. Bu yazıda temel katmanları ve neden önemli olduklarını ele alıyoruz.",
      "İlk katman, ağın dış dünyayla temas noktası olan firewall'dur. Doğru yapılandırılmış bir firewall, yetkisiz erişim girişimlerinin büyük çoğunluğunu daha ağa girmeden engeller.",
      "İkinci katman VLAN segmentasyonudur. Farklı departmanların veya sistemlerin (misafir Wi-Fi, üretim hattı, muhasebe) birbirinden izole edilmesi, bir noktadaki ihlalin tüm ağa yayılmasını önler.",
      "Üçüncü katman, uzaktan erişimlerde kullanılan VPN altyapısıdır. Şifrelenmemiş uzak bağlantılar, saldırganlar için en kolay giriş noktalarından biridir.",
      "Dördüncü katman ise sürekli izlemedir. Ağ trafiğinin düzenli olarak izlenmesi, anormal davranışların erken tespit edilmesini sağlar.",
      "Bu katmanların hepsi birlikte çalıştığında, kurumsal ağınız hem dış tehditlere hem de iç kaynaklı risklere karşı çok daha dayanıklı hale gelir.",
    ],
  },
  {
    slug: "sunucu-sanallastirmanin-getirdigi-tasarruf",
    title: "Sunucu Sanallaştırmanın İşletmenize Getirdiği Tasarruf",
    excerpt:
      "Fiziksel sunucu sayısını azaltmak, sadece donanım maliyetinde değil enerji ve bakımda da ciddi tasarruf sağlar.",
    category: "Sanallaştırma",
    date: "2026-03-18",
    readingTime: "4 dk",
    image: "/images/blog/sunucu-sanallastirmanin-getirdigi-tasarruf.jpg",
    content: [
      "Birçok işletme, her uygulama için ayrı bir fiziksel sunucu kullanmanın maliyetinin farkında değildir. Sanallaştırma, bu maliyeti önemli ölçüde azaltan bir çözümdür.",
      "Sanallaştırma ile tek bir güçlü fiziksel sunucu üzerinde birden fazla sanal sunucu çalıştırılabilir. Bu, donanım alım maliyetini doğrudan düşürür.",
      "Daha az fiziksel sunucu, daha az enerji tüketimi ve daha az soğutma ihtiyacı anlamına gelir. Bu da uzun vadede işletme giderlerine olumlu yansır.",
      "Ayrıca sanal sunucular, yedekleme ve felaket kurtarma senaryolarında fiziksel sunuculara göre çok daha hızlı ve esnek şekilde yönetilebilir.",
      "Sonuç olarak sanallaştırma, yalnızca teknik bir tercih değil, aynı zamanda stratejik bir maliyet yönetimi aracıdır.",
    ],
  },
  {
    slug: "guvenlik-kamera-sistemi-secerken",
    title: "Güvenlik Kamera Sistemi Seçerken Nelere Dikkat Edilmeli?",
    excerpt:
      "Çözünürlükten depolama kapasitesine, doğru kamera sistemini seçmek için bilmeniz gereken temel kriterler.",
    category: "Güvenlik",
    date: "2026-02-09",
    readingTime: "5 dk",
    image: "/images/blog/guvenlik-kamera-sistemi-secerken.jpg",
    content: [
      "Güvenlik kamerası sistemi kurarken yalnızca çözünürlük değil, kullanım amacına uygun bir sistem tasarımı da en az o kadar önemlidir.",
      "Çözünürlük, kamera lensinin görüş açısı ile birlikte değerlendirilmelidir. Geniş bir alanı tek kamerayla kaplamaya çalışmak, detay kaybına yol açabilir.",
      "Depolama kapasitesi planlanırken, kaç gün geriye dönük kayıt tutulacağı ve kaç kameranın eş zamanlı kayıt yapacağı hesaba katılmalıdır.",
      "Uzaktan erişim ve mobil bildirim özellikleri, özellikle birden fazla lokasyonu yönetenler için operasyonel kolaylık sağlar.",
      "Son olarak, sistemin düzenli bakımı ve yazılım güncellemeleri, güvenlik açıklarının önüne geçmek için ihmal edilmemelidir.",
    ],
  },
];
