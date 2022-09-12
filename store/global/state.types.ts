export interface AlertInterface {
  state: boolean
  message?: string
  variant?: string
}
export interface StateInterface {
  alert: AlertInterface
  title: string
}
