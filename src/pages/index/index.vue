<script setup lang="ts">
import { fetchGithubRepos, type GithubReposRes } from '@/services/apis/repos'

const repos = ref<GithubReposRes | null>(null)

async function getRepos() {
  const result = await fetchGithubRepos()
  repos.value = result
  console.log(result)
}

onLoad(() => {
  getRepos()
})
</script>

<template>
  <view flex="~ col items-center justify-center" p-50px>
    <Logos />
    <InputEntry />
    <view v-if="repos" border="1 solid" mt-4>
      <h2>
        请求返回结果：
      </h2>
      <p>{{ repos.name }}</p>
      <p>{{ repos.description }}</p>
      <a icon-btn :href="repos.html_url" target="_blank">仓库地址</a>
    </view>
  </view>
</template>

<route lang="yaml" type="home">
style:
  navigationBarTitleText: 首页
</route>
