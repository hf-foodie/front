import { getAuthors } from './authors'
import { getCategories, getTags } from './categories'
import { getAllPosts } from '@/data/posts.server'

export async function getSearchResults(
  query: string,
  type: 'posts' | 'categories' | 'tags' | 'authors',
  page: number = 1,
  perPage: number = 8
) {
  const allPosts = await getAllPosts()

  switch (type) {
    case 'categories':
      return {
        query,
        categories: (await getCategories()).slice(0, 15).sort(() => Math.random() - 0.5),
        totalResults: 1500,
        recommendedSearches: ['Travel', 'Food', 'Fashion', 'Technology'],
      }
    case 'tags':
      return {
        query,
        tags: (await getTags()).sort(() => Math.random() - 0.5),
        totalResults: 1000,
        recommendedSearches: ['Travel', 'Food', 'Fashion', 'Technology'],
      }
    case 'authors':
      return {
        query,
        authors: (await getAuthors()).slice(0, 12).sort(() => Math.random() - 0.5),
        totalResults: 200,
        recommendedSearches: ['Design', 'Photo', 'Vector', 'Frontend'],
      }
    default: {
      const totalPosts = allPosts.length
      const totalPages = Math.ceil(totalPosts / perPage)
      const start = (page - 1) * perPage
      const end = start + perPage
      const posts = allPosts.slice(start, end)
      return {
        query,
        posts: posts,
        totalResults: totalPosts,
        totalPages: totalPages,
        recommendedSearches: ['Design', 'Photo', 'Vector', 'Frontend'],
      }
    }
  }
}
