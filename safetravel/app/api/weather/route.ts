import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {searchParams} = req.nextUrl
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    // Avoid duplicate code
    const type = searchParams.get('type'); //define which endpoint to use in this case is weather or air pollution
    const domain = searchParams.get('domain'); //define domain of api eg: pro.openweathermap, api.openweather map
    const apiKey = process.env.NEXT_OPEN_WEATHER_API_KEY;
    
    //Fetch weather data api from server side to hide api key
    try {
        const response = await fetch(
            `https://${domain}/data/2.5/${type}?lat=${lat}&lon=${lng}&appid=${apiKey}`
        );
        const data = await response.json();

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch weather data'});
    }
}
