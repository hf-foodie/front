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

export type TMagazine = Awaited<ReturnType<typeof getMagazines>>[number] & {
  galleryImgs?: string[]
}

export async function getMagazines() {
  return [
    {
      id: 'magazine-00001',
      featuredImage: {
        src: '/images/magazines/first/main.png',
        width: 1000,
        height: 600,
      },
      title: '짬뽕에 소고기 육향을 입히다.',
      names: {
        name: '흥미원',
        handle: 'name',
        color: 'indigo'
      },
      handle: '00002',
      excerpt: '매콤한 쟁반짜장과 얼큰한 차돌짬뽕 한입이면 해장 뚝딱.',
      date: '2025-09-10T12:00:00Z',
      readingTime: 2,
      commentCount: 11,
      viewCount: 0,
      bookmarkCount: 0,
      bookmarked: true,
      likeCount: 0,
      liked: true,
      postType: 'standard',
      status: 'published',
      author: {
        id: '2007',
        name: '문성욱',
        handle: 'author',
      },
    },
    {
      id: 'magazine-00002',
      featuredImage: {
        src: '/images/magazines/second/main.png',
        width: 400,
        height: 400,
      },
      title: '감칠맛을 후루루루룩~ 일본식 비빔면 아부라소바',
      names: {
        name: '김씨네붴',
        handle: 'name',
        color: 'red'
      },
      handle: '00002',
      excerpt: '도쿄에서 처음 만들어진 일본식 아부라소바와 나고야에서 다진 고기를 넣어 만들어낸 대만식 마제소바에 이어 우리 입맛에 맞춘 한국식 아부라소바',
      date: '2025-10-11T12:00:00Z',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: true,
      likeCount: 3007,
      liked: true,
      postType: 'standard',
      status: 'published',
      author: {
        id: '2007',
        name: '문성욱',
        handle: 'author',
      },
    },
    {
      id: 'magazine-00003',
      featuredImage: {
        src: '/images/magazines/third/main.png',
        width: 400,
        height: 400,
      },
      title: '이것은 우동인가? 국밥인가?',
      names: {
        name: '동동국밥',
        handle: 'name',
        color: 'yellow'
      },
      handle: 'magazine',
      excerpt: '국밥에 우동을 말았다고? 쫄깃한 우동면과 시원한 국밥을 한입하는 순간 이것이 신세계 국밥이다.',
      date: '2025-05-12T12:00:00Z',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: true,
      likeCount: 3007,
      liked: true,
      postType: 'standard',
      status: 'published',
      author: {
        id: '2007',
        name: '문성욱',
        handle: 'author',
      },
    },
    {
      id: 'magazine-00004',
      featuredImage: {
        src: '/images/magazines/forth/main.png',
        width: 400,
        height: 400,
      },
      title: '얼큰한 대구탕과 쫀득매콤 대구뽈찜',
      names: {
        name: '외가집',
        handle: 'name',
        color: 'red'
      },
      handle: 'magazine',
      excerpt: '얼큰한 대구탕과 쫀득매콤 대구뽈찜',
      date: '2025-11-26T12:00:00Z',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: true,
      likeCount: 3007,
      liked: true,
      postType: 'standard',
      status: 'published',
      author: {
        id: '2007',
        name: '문성욱',
        handle: 'author',
        avatar: {
          src: _demo_author_image_urls[0],
          alt: 'Sarah Wilson',
          width: 1920,
          height: 1080,
        },
      },
    },
  ]
}