import ilustrasi1 from '/src/assets/icons/ilustrasi1.svg';
import ilustrasi2 from '/src/assets/icons/ilustrasi2.svg';
import ilustrasi3 from '/src/assets/icons/ilustrasi3.svg';
import ilustrasi4 from '/src/assets/icons/ilustrasi4.svg';
import ilustrasi5 from '/src/assets/icons/ilustrasi5.svg';
import ilustrasi6 from '/src/assets/icons/ilustrasi6.svg';
import ilustrasi7 from '/src/assets/icons/ilustrasi7.svg';
import banner from '/src/assets/class-banner.webp';
import icProfile from '/src/assets/default-user.png';
import icLevel from '/src/assets/icons/lvl-pemula.svg';
import icUsers from '/src/assets/icons/users.svg';
import lup from '/src/assets/lup.webp';
import sttnf from '/src/assets/sttnf.webp';

export const navlinks = [
    {
        id: "home",
        title: "Home",
        link: "/",
        current: true,
    },
    {
        id: "STTNF",
        title: "STT Terpadu Nurul Fikri",
        link: "/sttnf",
        current: false,
    },
];

export const navmini = [
    {
        id: "Identitas",
        title: "Identitas",
        link: "identitas",
        current: false,
    },
    {
        id: "Struktur Organisasi",
        title: "Struktur Organisasi",
        link: "organisasi",
        current: false,
    },
    {
        id: "Visi, Misi, & Tujuan",
        title: "Visi, Misi, & Tujuan",
        link: "profile",
        current: false,
    },
];

export const hero = {
    title: "PENMA Membantu Kamu Sebagai Mahasiswa",
    subtitle: "Mulai belajar terstruktur berdasarkan studi kasus",
};

export const uv = [
    {
        id: "unique-1",
        icon: ilustrasi1,
        heading: "Akses Seumur Hidup",
        desc: "Nyaman belajar kapanpun dimanapun tanpa takut kehabisan waktu."
    },
    {
        id: "unique-2",
        icon: ilustrasi2,
        heading: "Video Berkualitas",
        desc: "Video pembelajaran berkualitas tinggi untuk memberi kenyamanan saat belajar."
    },
    {
        id: "unique-3",
        icon: ilustrasi3,
        heading: "Modul",
        desc: "Dilengkapi dengan modul materi dasar hingga materi tingkat lanjut."
    },
    {
        id: "unique-4",
        icon: ilustrasi4,
        heading: "Seminar Rutin",
        desc: "Menambah pengetahuan penting dalam dunia kerja."
    },
    {
        id: "unique-5",
        icon: ilustrasi5,
        heading: "E-Certificate",
        desc: "Sertifikat membantu kamu menjadi lebih terpercaya akan skill-mu."
    },
    {
        id: "unique-6",
        icon: ilustrasi6,
        heading: "Forum Diskusi",
        desc: "Nyaman  tanya jawab dunia IT dengan mentor mengenai tugas kuliah-mu."
    },
    {
        id: "unique-7",
        icon: ilustrasi7,
        heading: "Materi Up To Date",
        desc: "Materi yang bertambah seiring berjalan-nya waktu."
    }
]

export const promo = [
    {
        id: "class-1",
        banner: banner,
        className: "HTML, CSS, & Javascript",
        mentor: {
            profile: icProfile,
            name: "Hafidz Naufal",
            profession: "Front-End Developer"
        },
        tags: [
            {
                icon: icLevel,
                tag: "Pemula"
            },
            {
                tag: "E-Certificate"
            },
            {
                icon: icUsers,
                tag: "556"
            },
        ],
        rating: 5,
        price: "Rp100.000",
        promoPrice: "Rp50.000",
    },
    {
        id: "class-2",
        banner: banner,
        className: "HTML, CSS, & Javascript",
        mentor: {
            profile: icProfile,
            name: "Hafidz Naufal",
            profession: "Front-End Developer"
        },
        tags: [
            {
                icon: icLevel,
                tag: "Pemula"
            },
            {
                tag: "E-Certificate"
            },
            {
                icon: icUsers,
                tag: "556"
            },
        ],
        rating: 5,
        price: "Rp100.000",
        promoPrice: "Rp50.000",
    },
    {
        id: "class-3",
        banner: banner,
        className: "HTML, CSS, & Javascript",
        mentor: {
            profile: icProfile,
            name: "Hafidz Naufal",
            profession: "Front-End Developer"
        },
        tags: [
            {
                icon: icLevel,
                tag: "Pemula"
            },
            {
                tag: "E-Certificate"
            },
            {
                icon: icUsers,
                tag: "556"
            },
        ],
        rating: 5,
        price: "Rp100.000",
        promoPrice: "Rp50.000",
    },
    {
        id: "class-4",
        banner: banner,
        className: "HTML, CSS, & Javascript",
        mentor: {
            profile: icProfile,
            name: "Hafidz Naufal",
            profession: "Front-End Developer"
        },
        tags: [
            {
                icon: icLevel,
                tag: "Pemula"
            },
            {
                tag: "E-Certificate"
            },
            {
                icon: icUsers,
                tag: "556"
            },
        ],
        rating: 5,
        price: "Rp100.000",
        promoPrice: "Rp50.000",
    },
    {
        id: "class-5",
        banner: banner,
        className: "HTML, CSS, & Javascript",
        mentor: {
            profile: icProfile,
            name: "Hafidz Naufal",
            profession: "Front-End Developer"
        },
        tags: [
            {
                icon: icLevel,
                tag: "Pemula"
            },
            {
                tag: "E-Certificate"
            },
            {
                icon: icUsers,
                tag: "556"
            },
        ],
        rating: 5,
        price: "Rp100.000",
        promoPrice: "Rp50.000",
    },
    {
        id: "class-6",
        banner: banner,
        className: "HTML, CSS, & Javascript",
        mentor: {
            profile: icProfile,
            name: "Hafidz Naufal",
            profession: "Front-End Developer"
        },
        tags: [
            {
                icon: icLevel,
                tag: "Pemula"
            },
            {
                tag: "E-Certificate"
            },
            {
                icon: icUsers,
                tag: "556"
            },
        ],
        rating: 5,
        price: "Rp100.000",
        promoPrice: "Rp50.000",
    }
]

export const cta = {
    title: "Bingung dan ingin bertanya?",
    subtitle: "Ngga perlu sungkan hehe. Konsultasikan aja dulu ke mimin lewat Whatsapp ya...",
    wa: "https://wa.me/+6281284262787",
    img: lup
}

export const testimonials = [
    {
        id: "testi 1",
        username: "Bagas Fauzan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolorem error. Quas provident tenetur inventore laboriosam a alias id eum quam itaque, veniam ex ea neque facilis at placeat impedit officia optio. Odit, dolorem error. Quas provident tenetur inventore laboriosam a alias id eum quam itaque, veniam ex ea neque facilis at placeat impedit officia optio",
    },
    {
        id: "testi 2",
        username: "Jakiati Rifqoh",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolorem error. Quas provident tenetur inventore laboriosam a alias id eum quam itaque, veniam ex ea neque facilis at placeat impedit officia optio.",
    },
    {
        id: "testi 3",
        username: "Ichda Rahma",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolorem error. Quas provident tenetur inventore laboriosam a alias id eum quam itaque, veniam ex ea neque facilis at placeat impedit officia optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit"
    },
];

export const content = {
    banner: sttnf,
    name: "sttnf",
    visi: "Pada tahun 2045 menjadi Sekolah Tinggi Teknologi yang unggul di Indonesia, berbudaya inovasi, berjiwa teknopreneur, dan berkarakter religius.",
    misi: [
        "1. Menyelenggarakan pendidikan tinggi berkualitas yang mengembangkan jiwa kepemimpinan dan teknopreneurship berlandaskan iman dan takwa.",
        "2. Melaksanakan penelitian yang inovatif dan berorientasi pada pengembangan teknologi masa depan.",
        "3. Menyelenggarakan pengabdian kepada masyarakat dengan memanfaatkan teknologi tepat guna.",
        "4. Membangun lingkungan akademik yang kondusif bagi terwujudnya kebebasan akademik, otonomi keilmuan, dan budaya inovasi.",
    ],
    tujuan: [
        "1. Menghasilkan sarjana yang kompeten, profesional, berakhlak mulia, sehingga mampu berkompetisi di dunia kerja.",
        "2. Menghasilkan karya-karya ilmiah dibidang teknologi informasi berwawasan masa depan yang inovatif dan bercirikan keterbukaan (openness) seperti open source, open standar dan open access/content, sehingga bermanfaat bagi bangsa Indonesia dan diakui secara Internasional.",
        "3. Menerapkan ilmu pengetahuan dan teknologi tepat guna bagi masyarakat dengan melibatkan sivitas akademika.",
        "4. Menciptakan kultur akademik yang inovatif, kompetitif dan kondusif untuk mewujudkan institusi yang unggul dan terkemuka.",
    ]
};

export const teams = [
    {
        photo: "",
        name: "Hafidz Naufal Bariklana T",
        nim: "",
        role: "Product Leader | Developer"
    },
    {
        photo: "",
        name: "Rakha Zahran Nurfirmansyah",
        nim: "0110221254",
        role: "Developer"
    },
    {
        photo: "",
        name: "Bagas Fauzan Hidayat",
        nim: "",
        role: "Developer"
    },
    {
        photo: "",
        name: "Raihan Ahmad Fahrizal",
        nim: "",
        role: "Developer"
    },
    {
        photo: "",
        name: "Ichda Rahma",
        nim: "",
        role: "Marketing"
    },
    {
        photo: "",
        name: "Jakiati Rifqoh",
        nim: "",
        role: "Designer"
    }
]
