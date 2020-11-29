import { mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { Header } from '@/components/header'

const vuetify = new Vuetify()
let wrapper: Wrapper<Header>

const factory = (computed = {}) => {
  return mount(Header, {
    vuetify,
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
    computed,
  })
}

beforeEach(() => {
  wrapper = factory()
})

afterEach(() => {
  wrapper.destroy()
})

describe('Header', () => {
  test('component has a div element', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
