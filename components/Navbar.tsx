import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Navbar(){
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return(
    <nav className="w-full flex justify-center border-red-600 border-b">
      <div className="my-3">
        {user ? (
          <div className="flex items-center gap-4">
            {user.email}
            <Link
              href="/dashboard"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Dashboard
            </Link>
            <LogoutButton />
          </div>
        ) : (
          <Link
            href="/login"
            className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
