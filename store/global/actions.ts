import { ActionTree } from 'vuex'
import { StateInterface } from './state.types'

const Actions: ActionTree<StateInterface, () => void> = {
  setTitle(context, payload: string) {
    context.commit('SET_TITLE', payload)
  }
}

export default Actions
