
import React from 'react'
import styles from "@/styles/header.module.css"
import Container from './Container'
import {FiSearch, FiShoppingCart} from 'react-icons/fi';
import Link from 'next/link';



function Header() {

  
  return (
    <header className={`${styles.header} py-3 px-1 shadow`}>
        <Container className="flex justify-between">

            <div className='flex items-center'>
              <span className='text-pink-500 font-bold text-4xl'>
                MY STORE
              </span>
            </div>


            {/* Search Bar */}

            <div className={`${styles.searchBar} flex items-center`}>
                <input type="text"
                placeholder="Search for Products..." className={`${styles.searchInput} text-black`}>
                </input>

                <button className={styles.searchButton}>
                  <FiSearch size={18}/>

                </button>
            </div>

           
       
       
        

            {/* Navbar */}

            <NavBar/>

        </Container>
    </header>
  )
}

export default Header

const NavBar=()=>{

    return(
      <nav className='flex items-center gap-5'>
        {/* Navigation LInks */}
        <ul className='flex items-center gap-3 font-semibold'>
          <li className={`${styles.navLink} text-black`}>
            <Link href="/">Home</Link>
           
          </li>
          <li className={`${styles.navLink} text-black`}>
            <Link href="/store">Store</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* cart icon */}
          <div className='relative'>
            <FiShoppingCart color='black' size={24}></FiShoppingCart>
            <span className={`${styles.cartBadge} absolute top-[-15px] right-[-20px] bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}>
              3
              </span>
            </div>
        </div>
      </nav>
    )
}