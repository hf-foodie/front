import { getAllMagazines } from '@/data/posts'
import { _demo_author_image_urls } from './authors'

const _demo_post_image_urls = [
  'https://images.unsplash.com/photo-1731437519600-f1219cded2cd?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1539477857993-860599c2e840?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1534445867742-43195f401b6c?q=80&w=2454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1666792890871-0e332b76967d?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1532347922424-c652d9b7208e?q=80&w=2639&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1535640597419-853d35e6364f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1674507593594-964ea25ce06a?q=80&w=2171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560703650-db93f86c37b3?q=80&w=3791&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1641301365918-c8d4b9ce7d11?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1556104577-09754a15dff2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1743832354699-c89a3a138237?q=80&w=3057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1559601531-503da8fa81f7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1622272516403-69dbe7ec7ecd?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

// TODO: replace with actual audio urls
// length NOTE: supported media files mp3, wav, ogg, aac, flac, webm, mp4, mov, etc.
const _demo_post_audio_urls = [
  'https://files.booliitheme.com/wp-content/uploads/2024/12/paudio.mp3',
  'https://files.booliitheme.com/wp-content/uploads/2024/12/paudio2.mp3',
  'https://files.booliitheme.com/wp-content/uploads/2025/06/paudio3.mp3',
  'https://files.booliitheme.com/wp-content/uploads/2025/06/paudio4.mp3',
  'https://files.booliitheme.com/wp-content/uploads/2025/06/paudio5.mp3',
  'https://files.booliitheme.com/wp-content/uploads/2025/06/paudio6.mp3',
  'https://files.booliitheme.com/wp-content/uploads/2025/06/paudio7.mp3',
  'https://files.booliitheme.com/wp-content/uploads/2024/12/paudio.mp3',
  'https://files.booliitheme.com/wp-content/uploads/2024/12/paudio2.mp3',
]

export type TTouristAttraction = Awaited<ReturnType<typeof getTouristAttraction>>[number] & {
  galleryImgs?: string[]
}

export async function getTouristAttraction() {
  return [
    {
      id: 'ta-00001',
      featuredImage: {
        src: _demo_post_image_urls[10],
        alt: "Lenovo's smarter devices stoke professional passions",
        width: 1920,
        height: 1080,
      },
      title: '대한민국 1세대 기업인, 포스코의 아버지 故 박태준 회장 생가',
      handle: 'where-the-internet-lives-from-trauma-to-triumph-oval',
      excerpt: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      date: '2025-06-10',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: false,
      likeCount: 3007,
      liked: false,
      postType: 'gallery',
      status: 'published',
      author: {
        id: 'author-1',
        name: '문성욱',
        handle: 'john-doe',
        avatar: {
          src: _demo_author_image_urls[0],
          alt: 'John Doe',
          width: 1920,
          height: 1080,
        },
      },
      categories: [
        {
          id: 'category-1',
          name: '박태준기념관',
          handle: 'technology',
          color: 'yellow',
        },
      ],
      galleryImgs: [
        '/images/tourist-attraction/first/01.png',
        '/images/tourist-attraction/first/02.png',
        '/images/tourist-attraction/first/03.png',
        '/images/tourist-attraction/first/04.png',
      ],
    },
    {
      id: 'ta-00002',
      featuredImage: {
        src: _demo_post_image_urls[10],
        alt: "Lenovo's smarter devices stoke professional passions",
        width: 1920,
        height: 1080,
      },
      title: '부산의 데이트 성지, 연인도 만족하고 부모님도 좋아하는 관광열차',
      handle: 'where-the-internet-lives-from-trauma-to-triumph-oval',
      excerpt: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      date: '2025-06-10',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: false,
      likeCount: 3007,
      liked: false,
      postType: 'gallery',
      status: 'published',
      author: {
        id: 'author-pocketmun1216',
        name: '문성욱',
        handle: 'john-doe',
        avatar: {
          src: _demo_author_image_urls[0],
          alt: 'John Doe',
          width: 1920,
          height: 1080,
        },
      },
      categories: [
        {
          id: 'category-1',
          name: '블루라인파크',
          handle: 'technology',
          color: 'blue',
        },
      ],
      galleryImgs: [
        '/images/tourist-attraction/second/01.png',
        '/images/tourist-attraction/second/02.png',
        '/images/tourist-attraction/second/03.png',
        '/images/tourist-attraction/second/04.png',
      ],
    },
    {
      id: 'ta-00004',
      featuredImage: {
        src: _demo_post_image_urls[10],
        alt: "Lenovo's smarter devices stoke professional passions",
        width: 1920,
        height: 1080,
      },
      title: '도심속의 힐링, 콧솟에서 느껴지는 피톤치드의 향기 ~',
      handle: 'where-the-internet-lives-from-trauma-to-triumph-oval',
      excerpt: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      date: '2025-06-10',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: false,
      likeCount: 3007,
      liked: false,
      postType: 'gallery',
      status: 'published',
      author: {
        id: 'author-1',
        name: '문성욱',
        handle: 'john-doe',
        avatar: {
          src: _demo_author_image_urls[0],
          alt: 'John Doe',
          width: 1920,
          height: 1080,
        },
      },
      categories: [
        {
          id: 'category-1',
          name: '아홉산숲',
          handle: 'technology',
          color: 'green',
        },
      ],
      galleryImgs: [
        '/images/tourist-attraction/third/01.png',
        '/images/tourist-attraction/third/02.png',
        '/images/tourist-attraction/third/03.png',
        '/images/tourist-attraction/third/04.png',
      ],
    },
    {
      id: 'ta-00004',
      featuredImage: {
        src: _demo_post_image_urls[10],
        alt: "Lenovo's smarter devices stoke professional passions",
        width: 1920,
        height: 1080,
      },
      title: '부산 하면 광안리, 광안리하면 드론쇼 아이가',
      handle: 'where-the-internet-lives-from-trauma-to-triumph-oval',
      excerpt: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      date: '2025-06-10',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: false,
      likeCount: 3007,
      liked: false,
      postType: 'gallery',
      status: 'published',
      author: {
        id: 'author-1',
        name: '문성욱',
        handle: 'john-doe',
        avatar: {
          src: _demo_author_image_urls[0],
          alt: 'John Doe',
          width: 1920,
          height: 1080,
        },
      },
      categories: [
        {
          id: 'category-1',
          name: '광안리 드론쇼',
          handle: 'technology',
          color: 'dark',
        },
      ],
      galleryImgs: [
        '/images/tourist-attraction/forth/01.png',
        '/images/tourist-attraction/forth/02.png',
        '/images/tourist-attraction/forth/03.png',
        '/images/tourist-attraction/forth/04.png',
      ],
    },
  ]
}