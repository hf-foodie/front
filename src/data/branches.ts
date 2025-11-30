import { TPost } from '@/data/posts'

export type TBranch = Awaited<ReturnType<typeof getBranches>>[number] & {
  posts?: TPost[]
}

export async function getBranches() {
  return [
    {
      id: 'branch-first',
      name: '부산광역시',
      handle: '부산',
      count: 13,
      thumbnail: {
        src: '/images/branches/busan.png',
        alt: '부산광역시',
        width: 300,
        height: 300,
      },
    },
    {
      id: 'branch-P00002',
      name: '서울특별시',
      handle: '서울',
      count: 13,
      thumbnail: {
        src: '/images/branches/seoul.png',
        alt: '서울특별시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00003',
      name: '경주시',
      handle: '경주',
      count: 13,
      thumbnail: {
        src: '/images/branches/gyeongju.png',
        alt: '서울특별시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00004',
      name: '제주시',
      handle: '제주',
      count: 13,
      thumbnail: {
        src: '/images/branches/jeju.png',
        alt: '제주시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00005',
      name: '대구광역시',
      handle: '대구',
      count: 13,
      thumbnail: {
        src: '/images/branches/daegu.png',
        alt: '대구광역시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00006',
      name: '울산광역시',
      handle: '울산',
      count: 13,
      thumbnail: {
        src: '/images/branches/ulsan.png',
        alt: '울산광역시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00007',
      name: '광주광역시',
      handle: '광주',
      count: 13,
      thumbnail: {
        src: '/images/branches/gwangju.png',
        alt: '광주광역시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-P00008',
      name: '순천시',
      handle: '순천',
      count: 13,
      thumbnail: {
        src: '/images/branches/suncheon.png',
        alt: '대구광역시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00009',
      name: '창원특례시',
      handle: '창원',
      count: 13,
      thumbnail: {
        src: '/images/branches/changwon.png',
        alt: '창원특례시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00010',
      name: '세종특별자치시',
      handle: '세종',
      count: 13,
      thumbnail: {
        src: '/images/branches/sejong.png',
        alt: '세종특별자치시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00011',
      name: '대전광역시',
      handle: '대전',
      count: 13,
      thumbnail: {
        src: '/images/branches/daejeon.png',
        alt: '대전광역시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00012',
      name: '안동시',
      handle: '안동',
      count: 13,
      thumbnail: {
        src: '/images/branches/andong.png',
        alt: '안동시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00013',
      name: '청주시',
      handle: '청주',
      count: 13,
      thumbnail: {
        src: '/images/branches/cheongju.png',
        alt: '안동시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00014',
      name: '천안시',
      handle: '천안',
      count: 13,
      thumbnail: {
        src: '/images/branches/cheonan.png',
        alt: '천안시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00015',
      name: '원주시',
      handle: '원주',
      count: 13,
      thumbnail: {
        src: '/images/branches/wonju.png',
        alt: '원주시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00016',
      name: '춘천시',
      handle: '춘천',
      count: 13,
      thumbnail: {
        src: '/images/branches/chuncheon.png',
        alt: '춘천시',
        width: 350,
        height: 350,
      },
    },
  ]
}