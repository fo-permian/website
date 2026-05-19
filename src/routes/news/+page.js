import { getAllPosts } from '$lib/data/news';

export const prerender = true;

export function load() {
  return {
    posts: getAllPosts()
  };
}
