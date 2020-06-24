import { GetterTree } from 'vuex'
import { StateInterface } from './state.types'

const Getters: GetterTree<StateInterface, () => any> = {
  getCapitalizedTitle(state): string {
    return state.title.toUpperCase()
  }
}

export default Getters
