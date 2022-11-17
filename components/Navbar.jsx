import Link from "next/link";
import Image from "next/image";
import Confetti from "../public/confetti.gif";

export default function Navbar() {
  return (
    <main className='bg-none   md:pt-5 font-CircularMedium tracking-wide'>
      <section className='px-3    md:px-5  lg:max-w-7xl lg:mx-auto '>
        <nav className='flex justify-between   '>
          <div className='grid place-items-center'>
            <div className='pt-8 '>
              <a className=' text-6xl md:pl-1 cursor-pointer self-center'>👨‍🎓</a>
            </div>
          </div>

          <ul className='flex items-center pt-8'>
            <li className='mr-2 hover:scale-105 transition-all md:mx-2'>
              <Link
                className='text-white mr-8 text-xl font-extrabold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600'
                href={"/enter"}
              >
                labs
              </Link>
            </li>
            <li className='hover:scale-105 transition-all md:mx-2'>
              <Link
                className='font-extrabold font-FredokaOne bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full text-lg px-5  py-3 cursor-pointer text-black '
                href={"/enter"}
              >
                LOG IN
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
