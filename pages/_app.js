import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black min-h-screen text-zinc-50 font-CircularMedium'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
