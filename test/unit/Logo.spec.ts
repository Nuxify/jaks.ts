import { mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { Logo } from '@/components'

const vuetify = new Vuetify()
let wrapper: Wrapper<Logo>

const factory = (computed = {}) => {
  return mount(Logo, {
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

describe('Logo', () => {
  test('component has a div element', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
