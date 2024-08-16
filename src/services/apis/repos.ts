import { request } from '../request'

export interface GithubReposRes {
  name: string
  description: string
  html_url: string
}

export async function fetchGithubRepos() {
  return await request<GithubReposRes>('/repos/sunpm/unisave', {}, {
    method: 'GET',
  })
}
