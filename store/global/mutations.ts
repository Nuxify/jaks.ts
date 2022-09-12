import { MutationTree } from 'vuex'
import { StateInterface, AlertInterface } from './state.types'

const Mutations: MutationTree<StateInterface> = {
  SET_ALERT(state, data: AlertInterface) {
    state.alert = data
  },
  SET_TITLE(state, data: string) {
    state.title = data
  },
}

export default Mutations
