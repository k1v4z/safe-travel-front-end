export interface Activity {
    id: string,
    start_date: string,
    end_date: string,
    activity_location: ActivityLocation
}

export interface Plan {
    title: string;
    date: string;
    activities: Activity[];
    plan_on_province: ProvincePlan[];
}


export interface ActivityLocation {
    id: string;
    name: string;
    address: string;
    open_at: string;
    close_at: string;
    longitude: string;
    latitude: string;
    imageUrl: string;
}

export interface ProvincePlan {
    province: Province;
}

interface Province {
    name: string;
    imageUrl: string;
}


export interface PlansResponse {
    plans: Plan[];
}
