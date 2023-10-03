import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Navbar from '../../components/Navbar'
import Transactions from '../../components/Transactions'
import AddTransactionForm from '../../components/AddTransactionForm'

export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login");
  }

  return(
    <div className="w-full ">
      <Navbar />
      <div className="flex items-start justify-center mx-32">
        <Transactions />
        <div className="w-0.5 h-screen mx-10 bg-red-600"></div>
        <AddTransactionForm />
      </div>
    </div>
  )
}
