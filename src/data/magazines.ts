import { _demo_author_image_urls } from './authors'

const allMagazines = [
    {
      id: 'M00001',
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
      handle: 'P00002',
      excerpt: '매콤한 쟁반짜장과 얼큰한 차돌짬뽕 한입이면 해장 뚝딱.',
      date: '2025-09-10T12:00:00Z',
      readingTime: 2,
      commentCount: 11,
      viewCount: 0,
      bookmarkCount: 0,
      bookmarked: false,
      likeCount: 0,
      liked: true,
      author: {
        id: '2007',
        name: '문성욱',
        handle: 'author',
      },
    },
    {
      id: 'M00002',
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
      handle: 'P00003',
      excerpt: '도쿄에서 처음 만들어진 일본식 아부라소바와 나고야에서 다진 고기를 넣어 만들어낸 대만식 마제소바에 이어 우리 입맛에 맞춘 한국식 아부라소바',
      date: '2025-10-11T12:00:00Z',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: false,
      likeCount: 3007,
      liked: false,
      author: {
        id: '2007',
        name: '문성욱',
        handle: 'author',
      },
    },
    {
      id: 'M00003',
      featuredImage: {
        src: '/images/magazines/third/main.png',
        width: 400,
        height: 400,
      },
      title: '이것은 국밥인가? 우동인가?',
      names: {
        name: '동동국밥',
        handle: 'name',
        color: 'yellow'
      },
      handle: 'P00004',
      excerpt: '국밥에 우동을 말았다고? 쫄깃한 우동면과 시원한 국밥을 한입하는 순간 이것이 신세계 국밥이다.',
      date: '2025-05-12T12:00:00Z',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: false,
      likeCount: 3007,
      liked: false,
      author: {
        id: '2007',
        name: '문성욱',
        handle: 'author',
      },
    },
    {
      id: 'M00004',
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
      handle: 'P00005',
      excerpt: '얼큰한 대구탕과 쫀득매콤 대구뽈찜',
      date: '2025-11-26T12:00:00Z',
      readingTime: 2,
      commentCount: 11,
      viewCount: 2504,
      bookmarkCount: 3007,
      bookmarked: true,
      likeCount: 3007,
      liked: true,
      author: {
        id: '2007',
        name: '문성욱',
        handle: 'author',
      },
    },
];

export type TMagazine = (typeof allMagazines)[number] & {
  galleryImgs?: string[]
};

const magazinesMap = new Map<string, TMagazine>(allMagazines.map(m => [m.id, m as TMagazine]));

export async function getMagazines(): Promise<TMagazine[]> {
  return Array.from(magazinesMap.values());
}

export async function getMagazineById(id: string): Promise<TMagazine | undefined> {
  return magazinesMap.get(id);
}
