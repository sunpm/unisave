import { request } from '../request'

export interface GithubReposRes {
  name: string
  description: string
  url: string
}

export async function fetchGithubRepos() {
  return await request<GithubReposRes>('/repos/sunpm/vitesse-uniapp-vue3', {}, {
    method: 'GET',
  })
}
