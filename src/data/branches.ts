import { TPost } from '@/data/posts'

const _demo_category_image_urls = [
  'https://images.unsplash.com/photo-1539477857993-860599c2e840?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1636306950045-4dbb10b7e0f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1679913969285-64f089885005?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1680792563719-288027b2a090?q=80&w=2693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1679403855896-49b0bd34744a?q=80&w=2693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1660254149750-f31f1c59a86b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1462611290231-f44865b5750c?q=80&w=2271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

export type TBranch = Awaited<ReturnType<typeof getBranches>>[number] & {
  posts?: TPost[]
}

export async function getBranches() {
  return [
    {
      id: 'branch-first',
      name: '부산광역시',
      handle: 'busan',
      count: 13,
      thumbnail: {
        src: '/images/branches/busan.png',
        alt: '부산광역시',
        width: 300,
        height: 300,
      },
    },
    {
      id: 'branch-00002',
      name: '서울특별시',
      handle: 'seoul',
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
      handle: 'gyeongju',
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
      handle: 'jeju',
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
      handle: 'daegu',
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
      handle: 'ulsan',
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
      handle: 'gwangju',
      count: 13,
      thumbnail: {
        src: '/images/branches/gwangju.png',
        alt: '광주광역시',
        width: 350,
        height: 350,
      },
    },
    {
      id: 'branch-00008',
      name: '순천시',
      handle: 'suncheon',
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
      handle: 'changwon',
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
      handle: 'sejong',
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
      handle: 'daejeon',
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
      handle: 'andong',
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
      handle: 'cheongju',
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
      handle: 'cheonan',
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
      handle: 'wonju',
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
      handle: 'chuncheon',
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