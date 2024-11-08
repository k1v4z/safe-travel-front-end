"use client"
import React, { useEffect, useState } from 'react'
import TripItem from './TripItem'
import useAuth from '@/app/hooks/useAuth'

const TripList = () => {
    useAuth();

    const [plan, setPlan] = useState<any>(null);
    const [page, setPage] = useState(1);
    const [limit, setPlanLimit] = useState(3);

    useEffect(() => {
    const fetchPlanData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plans?page=${page}&limit=${limit}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
           console.log(data);
          setPlan(data.plans.plans);
        } else {
          console.error('Failed to fetch plan data');
        }
      } catch (error) {
        console.error('Error fetching plan data:', error);
      }
    };

    fetchPlanData();
  }, []);

  return (
    <div>
      <section className="flex flex-col gap-6">
        {
          plan!= null && plan.map((item: any) => {
            return <TripItem key={item.id} plan={item} />
          })
        }
      </section>
    </div>
  )
}

export default TripList
