import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { UserResponseInterface } from './social.types'

const API_URL: string = '/users'

export default ($axios: AxiosInstance) => ({
  /**
   * Get all users
   *
   * @return {Promise}
   */
  GetUsers(): Promise<UserResponseInterface[]> {
    return $axios
      .get(`${API_URL}`)
      .then((response: AxiosResponse<UserResponseInterface[]>) => {
        const { data } = response

        return data
      })
      .catch((error: AxiosError) => {
        throw error
      })
  },

  /**
   * Get user by id
   *
   * @return {Promise}
   */
  GetUserByID(id: number): Promise<UserResponseInterface> {
    return $axios
      .get(`${API_URL}/${id}`)
      .then((response: AxiosResponse<UserResponseInterface>) => {
        const { data } = response

        return data
      })
      .catch((error: AxiosError) => {
        throw error
      })
  },
})
