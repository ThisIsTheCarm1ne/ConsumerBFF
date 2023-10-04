import Navbar from '../components/Navbar'

import Link from 'next/link'
import Image from 'next/image'
export const dynamic = 'force-dynamic'

export default async function Index() {

  return (
    <div className="w-full">
      <Navbar />
      <div className="mt-20 w-72 ml-96">
        <h1 className="text-6xl text-left tracking-wide w-96">
          <span className="text-red-600"> ConsumerBFF</span>
          - the best 
          <span className="text-red-600"> expense/income </span>
          tracker on the web
        </h1>
        <Link
          href="/login"
          className="py-2 px-3 flex rounded-md no-underline border-red-600 border-2 mt-10 w-52 hover:ring-4 hover:ring-red-600 hover:ring-opacity-50 transition duration-300 ease-in-out"
        >
          You should try it NOW
        </Link>
      </div>
        <Image
          className="absolute top-10 right-72 w-1/3 h-auto"
          src="/logo.svg"
          alt="Big logo"
          width={600}
          height={600}
        />
      <div className="text-center flex flex-col items-center">
        <h1 className="my-14 text-2xl w-72 m-auto">Why you should trust us with your finances?</h1>
        <div className="flex items-center">
          <p className="w-80">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nam accumsan erat lectus,
            at lobortis purus dapibus id.
            Sed quam ante, efficitur vitae eleifend sit amet,
            vulputate id massa
            Nullam vulputate feugiat ex ut lobortis.
          </p>
          <div className="w-0.5 h-48 mx-10 bg-red-600"></div>
          <p className="w-80">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nam accumsan erat lectus,
            at lobortis purus dapibus id.
            Sed quam ante, efficitur vitae eleifend sit amet,
            vulputate id massa
            Nullam vulputate feugiat ex ut lobortis.
          </p>
          <div className="w-0.5 h-48 mx-10 bg-red-600"></div>
          <p className="w-80">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nam accumsan erat lectus,
            at lobortis purus dapibus id.
            Sed quam ante, efficitur vitae eleifend sit amet,
            vulputate id massa
            Nullam vulputate feugiat ex ut lobortis.
          </p>
        </div>
      </div>
    </div>
  )
}
