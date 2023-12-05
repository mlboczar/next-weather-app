export interface WeatherType {
  info: {
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

export interface Props {
  onSubmitChange: (city: string) => void
}