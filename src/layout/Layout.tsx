import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <main className='text-white h-max min-h-screen flex relative flex-col w-full'>
        <Nav />

        <section className='lg:ml-60 mb-16'>
            {children}
        </section>

        <Footer />
    </main>
  )
}

export default Layout