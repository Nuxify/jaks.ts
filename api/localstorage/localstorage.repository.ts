import { LsKeys } from './localstorage.types'

export default () => ({
  Clear(): void {
    localStorage.clear()
  },
  GetItem(key: LsKeys): string | null {
    return localStorage.getItem(key)
  },
  RemoveItem(key: LsKeys): void {
    localStorage.removeItem(key)
  },
  SetItem(key: LsKeys, value: string): void {
    localStorage.setItem(key, value)
  },
})
