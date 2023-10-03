"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react';

export default function Transactions() {
  const supabase = createClientComponentClient<Database>()
  const [transactions, setTransactions] = useState<Database>([]);
  const [timeSpan, setTimeSpan] = useState<string>(() => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    return currentDate.toISOString();
  });

  const currentDate = new Date();
  const handleTimespanChange = (timespan: string) => {
    switch (timespan) {
      case 'y':
        currentDate.setFullYear(currentDate.getFullYear() - 1)
        setTimeSpan(currentDate.toISOString());
        break;
      case 'm':
        currentDate.setMonth(currentDate.getMonth() - 1)
        setTimeSpan(currentDate.toISOString());
        break;
      case 'w':
        currentDate.setDate(currentDate.getDate() - 7)
        setTimeSpan(currentDate.toISOString());
        break;
      case 'd':
        currentDate.setDate(currentDate.getDate() - 1)
        setTimeSpan(currentDate.toISOString());
        break;

      default:
        currentDate.setFullYear(currentDate.getFullYear() - 1)
        setTimeSpan(currentDate.toISOString());
        break;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        const {
          data
        } = await supabase.from("transactions")
          .select("*")
          .eq("user_id", user.id)
          .gte("created_at", timeSpan)
          .order('created_at', { ascending: false });

        setTransactions(data);
      }
    }
    fetchData();
  }, [timeSpan])

  const total: number = transactions?.reduce((accumulator: number, currentObject) => {
    return accumulator + currentObject.amount;
  }, 0);

  const btnStyle: string = "mx-5 py-2 px-3 rounded-md border-red-600 border-2 w-52 text-center hover:ring-4 hover:ring-red-600 hover:ring-opacity-50 transition duration-300 ease-in-out";

  return(
    <div className="w-1/2 mt-3 mb-20 flex flex-col items-center ">
      <div className="w-full my-10">
        <h1 className="text-center text-3xl mb-10">Select by the period</h1>
        <div className="w-full flex justify-center">
          <button className={btnStyle} onClick={() => handleTimespanChange('y')}>Year</button>
          <button className={btnStyle} onClick={() => handleTimespanChange('m')}>Month</button>
          <button className={btnStyle} onClick={() => handleTimespanChange('w')}>Week</button>
          <button className={btnStyle} onClick={() => handleTimespanChange('d')}>Day</button>
        </div>
      </div>
      <div className="">
        <h1 className="text-center ml-5 text-3xl">Total: {total.toFixed(2)}</h1>
        <div className="my-5 h-50 overflow-y-auto custom-scroll">
          {transactions?.map((transaction) => (
            <div key={transaction.id} className={`${transaction.amount < 0 ? 'below_zero' : 'above_zero'} border-b-2 mb-2`}>
              <h1 className="inline-block font-semibold">{transaction.title}</h1>
              <p className="inline-block float-right">{new Date(transaction.created_at).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}</p>
              <p className="mt-10 mb-4">{transaction.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
