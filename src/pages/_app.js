import {useState} from 'react';
import Head from 'next/head';
import CartContext from '../../components/cartContext';
import Navbar from '../../components/Navbar';

export default function App({ Component, pageProps }) {
  const [items, setItems] = useState({});
  return(
    <>
    <Head>
      <link href='https://unpkg.com/tailwindcss@%5E2/dist/tailwind.min.css' rel="stylesheet"/>
    </Head>
    <CartContext.Provider value={{items, setItems}}>
      <Navbar/>
      <div className=''>
        <Component {...pageProps} />
      </div>
    </CartContext.Provider>
    </>
  )
}
