import { create } from 'zustand'
import { WeatherData } from '../interfaces/weather';

interface WeatherState {
    weather: WeatherData | null
    setWeather: (weather: WeatherData) => void
}

const useWeatherStore = create<WeatherState>((set, get) => ({
    weather: null,
    setWeather: (weather: WeatherData) => set({ weather })
}));

export default useWeatherStore


