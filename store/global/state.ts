import { StateInterface } from './state.types'

const State: StateInterface = {
  alert: {
    state: false,
    message: '',
    variant: '',
    dismiss: false,
    timeout: 3000,
  },
  title: '',
}

export default () => State
