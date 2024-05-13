import { vi } from 'vitest'

const uniMock = {
  showToast: vi.fn(),
}

vi.stubGlobal('uni', uniMock)
