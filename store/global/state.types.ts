export interface AlertInterface {
  state: boolean
  message?: string
  variant?: string
  dismiss?: boolean
  timeout?: number
}
export interface StateInterface {
  alert: AlertInterface
  title: string
}
