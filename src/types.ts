export type LocationProps = {
  city: string
  uf: string
  country: string
}

export type ProfileProps = {
  profileImage: string
  name: string
  username: string
  bio: string
  status: string
  statusIcon: string
  followers: number
  following: number
  stars: number
  location: LocationProps
  email: string
  company?: string
  website?: string
  twitter?: string
}
