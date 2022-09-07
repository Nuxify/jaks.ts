import { StateInterface } from './state.types'

const State: StateInterface = {
  alert: {
    state: false,
    message: '',
    variant: '',
  },
  title: '',
}

export default () => State
