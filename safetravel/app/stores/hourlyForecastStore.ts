import { create } from 'zustand'
import { HourlyWeatherForecastData } from '../interfaces/forecast';

interface HourlyForecastState {
    hourlyForecast: HourlyWeatherForecastData | null
    setHourlyForecast: (hourlyForecasts: HourlyWeatherForecastData) => void
}

const useHourlyForecastStore = create<HourlyForecastState>((set, get) => ({
    hourlyForecast: null,
    setHourlyForecast: (hourlyForecast: HourlyWeatherForecastData) => set({ hourlyForecast })
}));

export default useHourlyForecastStore


