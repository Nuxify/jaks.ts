import { MutationTree } from 'vuex'
import { StateInterface } from './state.types'

const Mutations: MutationTree<StateInterface> = {
  SET_TITLE(state, data: string) {
    state.title = data
  },
}

export default Mutations
