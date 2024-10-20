// Convert K temp to C temp
export const convertKToC = (kTemp: number) => {
    const cTemp: number = kTemp - 273.15
    return cTemp.toFixed(2)
}

//Convert M/s to km/h
export const convertMToKm = (m: number) => {
    const km: number = m * 3.6
    return km.toFixed(2);
}