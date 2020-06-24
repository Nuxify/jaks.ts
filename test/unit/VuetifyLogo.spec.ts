import { mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { VuetifyLogo } from '@/components'

const vuetify = new Vuetify()
let wrapper: Wrapper<VuetifyLogo>

const factory = (computed = {}) => {
  return mount(VuetifyLogo, {
    vuetify,
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
    computed
  })
}

beforeEach(() => {
  wrapper = factory()
})

afterEach(() => {
  wrapper.destroy()
})

describe('VuetifyLogo', () => {
  test('component has an img element', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
})
