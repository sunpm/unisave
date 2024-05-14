import { useRouter } from '@uni-helper/uni-use'
import { getPathQueryString } from '@/utils'

const { navigate } = useRouter()

export function useNavigation() {
  return {
    navigateToHi: (options: { name: string }) => {
      navigateTo('/pages/hi', options)
    },
    navigateToIndex: () => {
      navigateTo('/pages/index/index')
    },
  }
}

function navigateTo(path: NavigateToOptions['url'], params?: Record<string, any>) {
  return navigate({
    url: getPathQueryString(path, params),
  })
}
