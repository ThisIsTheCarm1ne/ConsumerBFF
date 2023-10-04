import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return(
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl mb-10">Page Not Found</h1>
        <Link
          href="/"
          className="py-2 px-4 rounded-md border-red-600 border-2 hover:ring-4 hover:ring-red-600 hover:ring-opacity-50 transition duration-300 ease-in-out"
        >
          Back
        </Link>
      </div>
    </div>
  )
}
