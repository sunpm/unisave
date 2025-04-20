import { objectToQueryString } from '@pmun/utils'
import { useRouter } from '@uni-helper/uni-use'

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
  params = params ?? {}
  return navigate({
    url: path + (objectToQueryString(params) && `?${objectToQueryString(params)}`),
  })
}
