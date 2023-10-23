import type { ActionTree } from 'vuex'
import { StateInterface } from './state.types'

const Actions: ActionTree<StateInterface, () => void> = {
  setAlert(context, payload: StateInterface) {
    context.commit('SET_ALERT', payload)
  },
  setTitle(context, payload: string) {
    context.commit('SET_TITLE', payload)
  },
}

export default Actions
