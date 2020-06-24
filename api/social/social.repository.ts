import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { CommentInterface } from './social.types'

const API_URL: string = '/comments'

export default ($axios: AxiosInstance) => ({
  /**
   * Get all comments
   *
   * @return {Promise}
   */
  GetComments(): Promise<CommentInterface[]> {
    return $axios
      .get(`${API_URL}`)
      .then((response: AxiosResponse<CommentInterface[]>) => {
        const { data } = response

        const comments: CommentInterface[] = data

        return comments
      })
      .catch((error: AxiosError) => {
        throw error
      })
  }
})
