interface Geo {
  readonly lat: string
  readonly lng: string
}

interface Address {
  readonly street: string
  readonly suite: string
  readonly city: string
  readonly zipcode: string
  readonly geo: Geo
}

interface Company {
  readonly name: string
  readonly catchPhrase: string
  readonly bs: string
}
export interface UserResponseInterface {
  readonly id: number
  readonly name: string
  readonly username: string
  readonly email: string
  readonly address: Address
  readonly phone: string
  readonly website: string
  readonly company: Company
}
