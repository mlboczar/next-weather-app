export interface Weather {
  weather: {
    description: string
    icon: string
  }[]
  main: {
    temp: number
    feels_like: number
  }
  wind: {
    speed: number
  }
  name: string
}