export function getAQIStatus(value: number | undefined){
    let aqiStatus;
    switch (value) {
        case 1: aqiStatus = "Good"; break;
        case 2: aqiStatus = "Fair"; break;
        case 3: aqiStatus = "Moderate"; break;
        case 4: aqiStatus = "Poor"; break;
        case 5: aqiStatus = "Very Poor"; break;
    }

    return aqiStatus
}

export function getPM25Status(value: number | undefined) {
    if(!value){
        return "None"
    }
    if (value <= 12) return "Good";
    if (value <= 35.4) return "Moderate";
    if (value <= 55.4) return "Unhealthy for Sensitive Groups";
    if (value <= 150.4) return "Unhealthy";
    if (value <= 250.4) return "Very Unhealthy";
    return "Hazardous";
}

