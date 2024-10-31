import { create } from 'zustand';

interface Activity {
    activity_location_id: string;
    start_date: string;
    end_date: string;
}

interface Plan {
    user_id: string;
    title: string;
    date: string;
    transportation: string;
    money: number;
    state: string;
    have_children: boolean;
    kind_name: string;
    province_name: string;
    activities: Activity[];
}

interface PlanState {
    plan: Plan;
    setPlan: (plan: Plan) => void;
}

const usePlanStore = create<PlanState>((set) => ({
    plan: {
        user_id: '',
        title: '',
        date: '',
        transportation: '',
        money: 0,
        state: '',
        have_children: false,
        kind_name: '',
        province_name: '',
        activities: []
    },
    setPlan: (plan: Plan) => set({ plan })
}));

export default usePlanStore;