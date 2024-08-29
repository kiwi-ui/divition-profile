import img1 from '../assets/images/1.webp';
import img2 from '../assets/images/2.webp';
import img3 from '../assets/images/3.png';
import comingSoonImg from '../assets/images/comingsoon.webp';
import clock from '../assets/svg/clock-white.svg';
import gallery from '../assets/svg/gallery.svg';
import music from '../assets/svg/music.svg';
import responsive from '../assets/svg/responsive.svg';
import map from '../assets/svg/map.svg';
import guest from '../assets/svg/guest.svg';

interface FlippedItemType {
    id:number,
    title: string,
    link: string,
    image: string
}
export const AllItmes: FlippedItemType[] = [
    {
        'id': 1,
        'title': 'simple',
        'link': 'http://divition1.vercel.app/yourcustomname',
        'image': img1,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 2,
        'title': 'flipped',
        'link': 'http://divition2.vercel.app/yourcustomname',
        'image': img2,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 3,
        'title': 'simple',
        'link': 'https://divition-3.vercel.app/yourcustomname',
        'image': img3,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 4,
        'title': 'Coming Soon!',
        'link': '',
        'image': comingSoonImg,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 5,
        'title': 'Coming Soon!',
        'link': '',
        'image': comingSoonImg,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 6,
        'title': 'Coming Soon!',
        'link': '',
        'image': comingSoonImg,
        // 'type': 'Eksklusif' 
    },
]
export const FlippedItem: FlippedItemType[] = [
    {
        'id': 1,
        'title': 'simple',
        'link': 'http://divition1.vercel.app/yourcustomname',
        'image': img1,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 2,
        'title': 'dark',
        'link': 'http://divition2.vercel.app/yourcustomname',
        'image': img1,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 3,
        'title': 'old',
        'link': '',
        'image': img1,
        // 'type': 'Eksklusif' 
    }
]

export const ScrolledItem = [
    {
        'id': 1,
        'title': 'simple',
        'link': 'http://divition1.vercel.app/yourcustomname',
        'image': img2,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 2,
        'title': 'simple',
        'link': 'http://divition1.vercel.app/yourcustomname',
        'image': img2,
        // 'type': 'Eksklusif' 
    },
    {
        'id': 3,
        'title': 'simple',
        'link': 'http://divition1.vercel.app/yourcustomname',
        'image': img2,
        // 'type': 'Eksklusif' 
    }
]

export const Features = [
    {
        'id': 1,
        'title': 'Hitung Mundur',
        'desc': 'Bisa juga membuat share dengan nama Teman/Saudara/Keluarga agar lebih ekslusif.',
        'icon': clock,
    },
    {
        'id': 2,
        'title': 'Desain Responsif',
        'desc': 'Tampilan dari undangan kamu akan tetap teratur meskipun dibuka diukuran layar yang berbeda.',
        'icon': responsive
    },
    {
        'id': 3,
        'title': 'Custom Nama Tamu',
        'desc': 'Bagikan undanganmu dengan menyertakan nama tamu/undangan yang dituju, nama tamu dapat diubah',
        'icon': guest,
    },
    {
        'id': 4,
        'title': 'Musik Latar',
        'desc': 'Buat undanganmu lebih berkesan dengan musik favorit kamu untuk diputar setiap ada yang buka undanganmu.',
        'icon': music,
    },    
    {
        'id': 5,
        'title': 'Lokasi',
        'desc': 'Fitur keren ini yang bisa tersambung dengan googlemaps untuk navigasi para tamu.',
        'icon': map,
    },
    {
        'id': 6,
        'title': 'Amplop Digital',
        'desc': 'Kirim hadiah/amplop kepada pengantin lewat rekening bank yang tercantum atau cara menarik lainnya.',
        'icon': guest,
    },
    {
        'id': 7,
        'title': 'Galeri Foto',
        'desc': 'Bagikan foto preweddingmu dengan layout yang keren untuk menambah kesan terbaik kepada para tamu',
        'icon': gallery,
    }
] 