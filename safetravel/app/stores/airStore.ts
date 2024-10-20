import { create } from 'zustand'
import { AirQualityData } from '../interfaces/airquality';

interface AirQualityState {
    air: AirQualityData | null
    setAirQuality: (air: AirQualityData) => void
}

const useAirStore = create<AirQualityState>((set, get) => ({
    air: null,
    setAirQuality: (air: AirQualityData) => set({ air })
}));

export default useAirStore


