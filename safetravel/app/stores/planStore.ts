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
    isAITrip?: boolean;
    type: string;
}

interface PlanState {
    plan: Plan;
    setPlan: (plan: Plan) => void;
    clearStore: () => void;
}

const initialPlanState = {
    user_id: '',
    title: '',
    date: '26/11/2024',
    transportation: 'Private Vehicle',
    money: 0,
    state: 'pending',
    have_children: false,
    kind_name: '',
    province_name: 'Da Nang',
    activities: [],
    isAITrip: false,
    type: ''
};

const usePlanStore = create<PlanState>((set) => ({
    plan: { ...initialPlanState },
    setPlan: (plan: Plan) => set({ plan }),
    clearStore: () => set({ plan: { ...initialPlanState } })
}));

export default usePlanStore;