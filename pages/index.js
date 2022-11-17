import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='flex  px-3 py-8 lg:h-[400px]  md:px-5  lg:max-w-7xl lg:mx-auto '>
          <div className='lg:w-1/2 self-center'>
            <h1 className='text-6xl font-FredokaOne'>
              Web3 is the{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500'>
                future.
              </span>
            </h1>
            <p className='mt-8 text-2xl text-zinc-300 tracking-wide'>
              Join the <span className='text-green-500'>movement</span> & learn
              <span className='text-yellow-500'> everything</span> you need to
              know about this{" "}
              <span className='text-blue-500'>game-changing</span> technology.
            </p>
          </div>
        </section>
        <section className='flex flex-col justify-center px-3  h-[calc(100vh-600px)]  md:px-5  lg:max-w-7xl lg:mx-auto '>
          <div className='mt-16 self-center bg-red-500 py-3 px-5 text-6xl text-zinc-900 font-FredokaOne tracking-wider'>
            {" "}
            HARD TRUTH
          </div>
          <p className='text-6xl mt-16 self-center animate-bounce'>👇</p>
        </section>
        <section className='motion-safe:animate-fadeIn flex flex-col justify-center px-3  h-screen  md:px-5  lg:max-w-7xl lg:mx-auto '>
          <div className='mt-16 max-w-2xl self-center text-center py-3 px-5 text-5xl text-zinc-300 tracking-wider'>
            {" "}
            Web3 is a{" "}
            <span className='text-purple-500 ease-in duration-300'>
              dark-forest
            </span>{" "}
            filled with scary things...
          </div>
          <p className='text-6xl mt-8 self-center animate-pulse'>😱</p>
        </section>
        <section className='text-center motion-safe:animate-fadeIn flex flex-col justify-center px-3  h-screen  md:px-5  lg:max-w-7xl lg:mx-auto '>
          <p className='text-6xl mt-16 self-center animate-pulse'>💡</p>
          <div className='mt-8 w-[450px] rounded text-center mx-auto bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 py-3 px-5 text-6xl text-zinc-900 font-FredokaOne tracking-wider'>
            {" "}
            THE LIGHT
          </div>
          <div className='mt-4 self-center max-w-lg py-3 px-5 text-2xl text-zinc-300 tracking-wider'>
            With web3.me at{" "}
            <span className='animate-pulse text-yellow-400 ease-in duration-300'>
              your-side
            </span>{" "}
            you don't have to be afraid of web3 anymore...
          </div>
        </section>
        <section className='motion-safe:animate-fadeIn flex flex-col justify-center px-3  h-screen  md:px-5  lg:max-w-7xl lg:mx-auto '>
          <div className='mt-16 max-w-3xl self-center text-center py-3 px-5 text-3xl text-zinc-300 tracking-wider'>
            {" "}
            This custom built web3 learning platform will give you{" "}
            <span className='font-FredokaOne text-red-500 animate-pulse'>
              DOPAMINE
            </span>{" "}
            hits in meme coins & NFT's for boss-level accomplishments.
          </div>
          <p className='text-lg mt-8 self-center animate-bounce'>
            Login now &{" "}
            <span className='font-FredokaOne text-red-500 animate-pulse'>
              learn-to-earn
            </span>{" "}
            our kinda useless token. 💎
          </p>
        </section>
      </main>
    </div>
  );
}
