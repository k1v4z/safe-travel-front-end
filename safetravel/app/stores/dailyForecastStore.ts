import { create } from 'zustand'
import { DailyWeatherForecastData } from '../interfaces/forecast';

interface DailyForecastState {
    dailyForecast: DailyWeatherForecastData | null
    setDailyForecast: (dailyForecasts: DailyWeatherForecastData) => void
}

const useDailyForecastStore = create<DailyForecastState>((set, get) => ({
    dailyForecast: null,
    setDailyForecast: (dailyForecast: DailyWeatherForecastData) => set({ dailyForecast })
}));

export default useDailyForecastStore


