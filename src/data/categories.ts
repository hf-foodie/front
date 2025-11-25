import { getAllPosts, getPostsDefault, TPost } from './posts'
import { getBranches } from '@/data/branches'
import stayCategoryCoverImage from '@/images/hero-right-2.png'
import filghtCategoryCoverImage from '@/images/hero-right-flight.png'
import realEstateCategoryCoverImage from '@/images/hero-right-real-estate.png'

// TODO: replace with actual images
// TODO: replace with actual images
// _demo_category_image_urls has length 10
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

// stay categories --------
export async function getStayCategories() {
  return [
    {
      id: 'stay-cat://1',
      name: 'New York, USA',
      region: 'United States',
      handle: 'new-york-usa',
      href: '/stay-categories/new-york-usa',
      count: 5000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://2',
      name: 'Singapore',
      region: 'Singapore',
      handle: 'singapore',
      href: '/stay-categories/singapore',
      count: 2500,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://3',
      name: 'Paris, France',
      region: 'France',
      handle: 'paris-france',
      href: '/stay-categories/paris-france',
      count: 3000,
      thumbnail: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://4',
      name: 'London, UK',
      region: 'United Kingdom',
      handle: 'london-uk',
      href: '/stay-categories/london-uk',
      count: 116288,
      thumbnail: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://5',
      name: 'Tokyo, Japan',
      region: 'Japan',
      handle: 'tokyo-japan',
      href: '/stay-categories/tokyo-japan',
      count: 5000,
      thumbnail: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://6',
      name: 'Maldives',
      region: 'Indian Ocean',
      handle: 'maldives',
      href: '/stay-categories/maldives',
      count: 7500,
      thumbnail: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'The Maldives, officially the Republic of Maldives',
    },
    {
      id: 'stay-cat://7',
      name: 'Roma, Italy',
      region: 'Italy',
      handle: 'roma-italy',
      href: '/stay-categories/roma-italy',
      count: 8100,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Italy, a European country with a long Mediterranean.',
    },
    {
      id: 'stay-cat://8',
      name: 'Enjoy the great cold',
      region: 'Arctic',
      handle: 'enjoy-the-great-cold',
      href: '/stay-categories/enjoy-the-great-cold',
      count: 15600,
      thumbnail: 'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'The Arctic is the northernmost region of Earth.',
    },
    {
      id: 'stay-cat://9',
      name: 'Sleep in a floating way',
      region: 'Worldwide',
      handle: 'sleep-in-a-floating-way',
      href: '/stay-categories/sleep-in-a-floating-way',
      count: 1000,
      thumbnail: 'https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'A floating hotel is a type of hotel.',
    },
    {
      id: 'stay-cat://10',
      name: "In the billionaire's house",
      region: 'Worldwide',
      handle: 'in-the-billionaires-house',
      href: '/stay-categories/in-the-billionaires-house',
      count: 3000,
      thumbnail: 'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: "A billionaire's house.",
    },
    {
      id: 'stay-cat://11',
      name: 'Cool in the deep forest',
      region: 'Worldwide',
      handle: 'cool-in-the-deep-forest',
      href: '/stay-categories/cool-in-the-deep-forest',
      count: 6000,
      thumbnail: 'https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Cool in the deep forest.',
    },
    {
      id: 'stay-cat://12',
      name: 'Sunset in the desert',
      region: 'Worldwide',
      handle: 'sunset-in-the-desert',
      href: '/stay-categories/sunset-in-the-desert',
      count: 1000,
      thumbnail:
        'https://images.pexels.com/photos/32223288/pexels-photo-32223288/free-photo-of-ngoi-nha-da-d-a-trung-h-i-quy-n-ru-v-i-di-m-nh-n-mau-vang.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Sunset in the desert.',
    },
  ]
}
export async function getStayCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'stay://all',
      name: 'Explore stays',
      handle: 'all',
      href: '/stay-categories/all',
      region: 'Worldwide',
      count: 144000,
      description: 'Explore all stays around the world',
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
    }
  }

  // get all categories
  const categories = await getStayCategories()
  return categories.find((category) => category.handle === handle)
}

// CATEGORIES
export async function getCategories() {
  return [
    {
      id: 'first',
      name: 'Garden',
      handle: 'garden',
      description:
        'Explore the world of gardening, from planting to harvesting and everything in between. Discover tips, tricks, and expert advice to make your garden thrive.',
      color: 'indigo',
      count: 13,
      date: '2025-06-10',
      thumbnail: {
        src: _demo_category_image_urls[0],
        alt: 'Garden',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-2',
      name: 'Technology',
      handle: 'technology',
      description:
        'Stay updated with the latest technology news, trends, and innovations. Explore the world of AI, blockchain, and the future of technology.',
      color: 'blue',
      count: 25,
      date: '2025-05-15',
      thumbnail: {
        src: _demo_category_image_urls[1],
        alt: 'Technology',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-3',
      name: 'Fitness',
      handle: 'fitness',
      description:
        'Discover workout routines, health tips, and wellness advice for a better lifestyle. Stay fit and healthy with our expert tips and advice.',
      color: 'red',
      count: 18,
      date: '2025-04-20',
      thumbnail: {
        src: _demo_category_image_urls[2],
        alt: 'Fitness',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-4',
      name: 'Finance',
      handle: 'finance',
      description:
        'Stay updated with financial news, investment strategies, and money management tips. Make informed decisions with our expert advice.',
      color: 'green',
      count: 22,
      date: '2025-03-05',
      thumbnail: {
        src: _demo_category_image_urls[3],
        alt: 'Finance',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-5',
      name: 'Travel',
      handle: 'travel',
      description:
        'Explore travel guides, destination reviews, and adventure stories from around the world. Plan your next adventure with our expert tips and advice.',
      color: 'yellow',
      count: 30,
      date: '2025-02-15',
      thumbnail: {
        src: _demo_category_image_urls[4],
        alt: 'Travel',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-6',
      name: 'Photography',
      handle: 'photography',
      description:
        'Discover the art of photography, from landscape shots to portrait techniques and editing tips. Capture the beauty of the world with our expert tips and advice.',
      color: 'purple',
      count: 28,
      date: '2025-01-20',
      thumbnail: {
        src: _demo_category_image_urls[5],
        alt: 'Photography',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-7',
      name: 'Music',
      handle: 'music',
      description:
        'Explore music reviews, artist interviews, and the latest trends in the music industry. Stay updated with the latest music news and trends.',
      color: 'pink',
      count: 35,
      date: '2025-01-15',
      thumbnail: {
        src: _demo_category_image_urls[6],
        alt: 'Music',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-8',
      name: 'Architecture',
      handle: 'architecture',
      description:
        'Discover architectural marvels, design trends, and insights into the world of building and construction. Explore the world of architecture with our expert tips and advice.',
      color: 'gray',
      count: 22,
      date: '2025-01-10',
      thumbnail: {
        src: _demo_category_image_urls[7],
        alt: 'Architecture',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-9',
      name: 'Wellness',
      handle: 'wellness',
      description:
        'Find tips and advice for mental and physical wellness, including meditation, yoga, and healthy living. Stay fit and healthy with our expert tips and advice.',
      color: 'teal',
      count: 27,
      date: '2025-01-05',
      thumbnail: {
        src: _demo_category_image_urls[8],
        alt: 'Wellness',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-10',
      name: 'Education',
      handle: 'education',
      description:
        'Stay informed about educational trends, learning resources, and academic insights. Stay updated with the latest educational news and trends.',
      color: 'orange',
      count: 31,
      date: '2025-01-01',
      thumbnail: {
        src: _demo_category_image_urls[9],
        alt: 'Education',
        width: 1920,
        height: 1080,
      },
    },
    {
      id: 'category-11',
      name: 'Typography',
      handle: 'typography',
      description:
        'Stay informed about educational trends, learning resources, and academic insights. Stay updated with the latest educational news and trends.',
      color: 'sky',
      count: 31,
      date: '2025-06-15',
      thumbnail: {
        src: _demo_category_image_urls[1],
        alt: 'Education',
        width: 1920,
        height: 1080,
      },
    },
  ]
}

export async function getCategoryByHandle(handle: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  // for demo purpose, get all posts
  const posts = (await getAllPosts()).slice(0, 12)

  if (handle === 'all') {
    return {
      id: 'category-all',
      name: 'All articles',
      handle: 'all',
      description: 'Explore all articles',
      count: 2500,
      date: '2025-01-01',
      thumbnail: {
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'All',
        width: 1920,
        height: 1080,
      },
      cover: {
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'All',
        width: 1920,
        height: 1080,
      },
      color: 'indigo',
      posts,
    }
  }

  // get all categories
  const categories = await getCategories()
  let category = categories.find((category) => category.handle === handle)
  if (!category) {
    // return null
    // for demo purpose, return the first category
    category = categories[0]
  }
  return {
    ...category,
    posts,
  }
}

export async function getCategoriesWithPosts() {
  const categories = await getCategories()
  const posts = await getPostsDefault()
  return categories.map((category) => ({
    ...category,
    posts: posts.slice(0, 8),
  }))
}

// TAGS
export async function getTags() {
  return [
    {
      id: 'tag-1',
      name: 'Technology',
      handle: 'technology',
      description: 'Explore the latest innovations, gadgets, and tech trends shaping our digital future.',
      count: 10,
    },
    {
      id: 'tag-2',
      name: 'Travel',
      handle: 'travel',
      description: 'Explore travel guides, destination reviews, and adventure stories from around the world.',
      count: 10,
    },
    {
      id: 'tag-3',
      name: 'Food',
      handle: 'food',
      description: 'Discover the best food and drink experiences, from local cuisine to gourmet dining.',
      count: 10,
    },
    {
      id: 'tag-4',
      name: 'Health',
      handle: 'health',
      description: 'Stay updated with health and wellness news, tips, and expert advice.',
      count: 10,
    },
    {
      id: 'tag-5',
      name: 'Science',
      handle: 'science',
      description: 'Explore the latest scientific discoveries, research, and breakthroughs.',
      count: 10,
    },
    {
      id: 'tag-6',
      name: 'History',
      handle: 'history',
      description: 'Discover historical events, cultural heritage, and the stories of our past.',
      count: 10,
    },
    {
      id: 'tag-7',
      name: 'Art',
      handle: 'art',
      description: 'Explore the world of art, from painting to sculpture and everything in between.',
      count: 10,
    },
    {
      id: 'tag-8',
      name: 'Photography',
      handle: 'photography',
      description: 'Discover the art of photography, from landscape shots to portrait techniques and editing tips.',
      count: 15,
    },
    {
      id: 'tag-9',
      name: 'Music',
      handle: 'music',
      description: 'Explore music reviews, artist interviews, and the latest trends in the music industry.',
      count: 12,
    },
    {
      id: 'tag-10',
      name: 'Architecture',
      handle: 'architecture',
      description:
        'Discover architectural marvels, design trends, and insights into the world of building and construction.',
      count: 8,
    },
    {
      id: 'tag-11',
      name: 'Wellness',
      handle: 'wellness',
      description:
        'Find tips and advice for mental and physical wellness, including meditation, yoga, and healthy living.',
      count: 14,
    },
    {
      id: 'tag-12',
      name: 'Education',
      handle: 'education',
      description: 'Stay informed about educational trends, learning resources, and academic insights.',
      count: 11,
    },
  ]
}

export async function getTagsWithPosts() {
  const tags = await getTags()
  const posts = await getPostsDefault()
  return tags.map((tag) => ({
    ...tag,
    posts: posts.slice(0, 8),
  }))
}

export async function getTagByHandle(handle: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  const posts = (await getAllPosts()).slice(0, 12)

  if (handle === 'all') {
    return {
      id: 'tag-all',
      name: 'All articles',
      handle: 'all',
      description: 'Explore all articles',
      count: 2500,
      posts,
    }
  }

  const tags = await getTags()
  let tag = tags.find((tag) => tag.handle === handle)
  if (!tag) {
    // return null
    // for demo purpose, return the first tag
    tag = tags[0]
  }
  return {
    ...tag,
    posts,
  }
}

// Flight categories --------
export async function getFlightCategories() {
  return [
    {
      id: 'flight://1',
      name: 'New York',
      handle: 'new-york',
      href: '/flight-categories/new-york',
      count: 1500,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: filghtCategoryCoverImage.src,
        width: filghtCategoryCoverImage.width,
        height: filghtCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United States',
    },
    {
      id: 'flight://2',
      name: 'Singapore',
      handle: 'singapore',
      href: '/flight-categories/singapore',
      count: 2500,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: filghtCategoryCoverImage.src,
        width: filghtCategoryCoverImage.width,
        height: filghtCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Singapore',
    },
  ]
}
export async function getFlightCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'flight://all',
      name: 'Book Flights',
      handle: 'all',
      href: '/flight-categories/all',
      count: 3000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: filghtCategoryCoverImage.src,
        width: filghtCategoryCoverImage.width,
        height: filghtCategoryCoverImage.height,
      },
      region: 'Worldwide',
      description: 'Explore all flights around the world',
    }
  }

  const categories = await getFlightCategories()
  return categories.find((category) => category.handle === handle)
}

// Real-Estate categories --------
export async function getRealEstateCategories() {
  return [
    {
      id: 'real-estate://1',
      name: 'New York, USA',
      handle: 'new-york',
      href: '/real-estate-categories/new-york',
      count: 144000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United States',
    },
    {
      id: 'real-estate://2',
      name: 'Singapore',
      handle: 'singapore',
      href: '/real-estate-categories/singapore',
      count: 188288,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Singapore',
    },
    {
      id: 'real-estate://3',
      name: 'Paris, France',
      handle: 'paris',
      href: '/real-estate-categories/paris',
      count: 218288,
      thumbnail: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'France',
    },
    {
      id: 'real-estate://4',
      name: 'London, UK',
      handle: 'london',
      href: '/real-estate-categories/london',
      count: 116288,
      thumbnail: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United Kingdom',
    },
    {
      id: 'real-estate://5',
      name: 'Tokyo, Japan',
      handle: 'tokyo',
      href: '/real-estate-categories/tokyo',
      count: 232288,
      thumbnail: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Japan',
    },
    {
      id: 'real-estate://6',
      name: 'Maldives',
      handle: 'maldives',
      href: '/real-estate-categories/maldives',
      count: 77566,
      thumbnail: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Indian Ocean',
    },
  ]
}
export async function getRealEstateCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'real-estate://all',
      name: 'Real-estates',
      handle: 'all',
      href: '/real-estate-categories/all',
      count: 20000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      region: 'Worldwide',
      description: 'Explore all real estates around the world',
    }
  }
  const categories = await getRealEstateCategories()
  return categories.find((category) => category.handle === handle)
}

// Types
export type TCategory = Awaited<ReturnType<typeof getCategories>>[number] & {
  posts?: TPost[]
}

export type TTag = Awaited<ReturnType<typeof getTags>>[number] & {
  posts?: TPost[]
}

export type TStayCategory = Awaited<ReturnType<typeof getStayCategories>>[number]
export type TFlightCategory = Awaited<ReturnType<typeof getFlightCategories>>[number]