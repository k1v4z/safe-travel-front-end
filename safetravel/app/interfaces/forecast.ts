export interface HourlyWeatherForecastData {
    list: IHourlyForecast[];
}

export interface DailyWeatherForecastData {
    list: IDailyForecast[]
}


export interface IHourlyForecast {
    dt: number; // UNIX timestamp for the forecast time
    main: {
        temp: number; // Current temperature in Kelvin
    };
    weather: {
        description: string; // Description of the weather condition (e.g., "moderate rain")
        icon: string; // Icon code to display the weather icon (e.g., "10n")
    }[];
}

export interface IDailyForecast {
    dt: number;
    temp: {
        day: number
    },
    weather: {
        description: string,
        icon: string,
    }[]
}
