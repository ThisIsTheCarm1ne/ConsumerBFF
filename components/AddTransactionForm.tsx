"use client"
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AddTransactionForm() {
  const [title, setTitle] = useState<string>('')
  const [amount, setAmount] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClientComponentClient<Database>()

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user);
    if (user) {
      await supabase.from("transactions").insert([
        {
          title: title,
          user_id: user.id,
          amount: amount
        },
      ])
      window.location.reload();
    }
  }

  const btnStyle: string = "py-2 px-4 rounded-md border-red-600 border-2 w-52 hover:ring-4 hover:ring-red-600 hover:ring-opacity-50 transition duration-300 ease-in-out";
  //bg-green-700 rounded px-4 py-2 text-white mb-2
  return(
    <form
      className="flex-1 flex flex-col w-1/3 justify-center gap-2 text-foreground mt-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="text-md" htmlFor="title">
        Transaction
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6 border-red-600"
        name="title"
        placeholder="Name of the transaction"
        required
        value={title ?? ''}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="text-md" htmlFor="amount">
        Amount
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6 border-red-600"
        name="amount"
        placeholder="Income or expense"
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className={btnStyle}
       >
        +
      </button>
    </form>
  )
}
