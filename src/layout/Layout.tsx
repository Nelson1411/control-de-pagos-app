import React from 'react'
import { Link, useLocation } from 'wouter'
import { Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../components/Tremor/Drawer'
import { Button } from '../components/Tremor/Button'
import {
  RiBarChartGroupedLine,
  RiWallet2Line,
  RiHome5Line
} from '@remixicon/react'
import { siteConfig } from '../siteConfitg'
import { cx } from '../lib/utils'

function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation()
  const navigation = [
    {
      name: 'Principal',
      href: siteConfig.baseLinks.principal,
      icon: RiHome5Line
    },
    {
      name: 'Graficas',
      href: siteConfig.baseLinks.graficas,
      icon: RiBarChartGroupedLine
    },
    {
      name: 'Transacciones',
      href: siteConfig.baseLinks.transacciones,
      icon: RiWallet2Line
    }
  ] as const
  const isActive = (href: string) => location === href
  console.log(location)
  return (
    <main className='text-white grid grid-rows-1 lg:grid-cols-[150px_1fr] h-fit w-full'>
        <nav className='hidden lg:col-start-1 lg:col-end-2 lg:flex lg:flex-col gap-4 
                p-4 border-r border-gray-700'>
          {
            navigation.map((item) => (
              <div key={item.name} className='flex gap-1 items-center'>
                <item.icon className={
                  cx(
                    isActive(item.href)
                    ? 'dark:text-[#7f5af0]'
                    : 'dark:text-[#fffffe]'
                  )
                } />
                <Link className={cx(
                  isActive(item.href)
                    ? 'dark:text-[#7f5af0]'
                    : 'dark:text-[#fffffe]'
                  )}
                  to={item.href}
                >
                  {item.name}
                </Link>
              </div>
            ))
          }
            {/* <Link to={'/'}>Principal</Link>
            <div className='flex gap-1 items-center group'>
              <RiBarChartGroupedLine className='group-focus:fill-[#7f5af0]' />
              <Link className={cx(
                isActive()
              )} to={'/graficas'}>
                Graficas
              </Link>
            </div>
            <div className='flex gap-1 items-center'>
              <RiWallet2Line />
              <Link to={'/transacciones'}>Transacciones</Link>
            </div> */}
        </nav>
        
        <header className='lg:hidden flex justify-end'>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary">⩸</Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col">
              <DrawerHeader aria-describedby='Menu de la pagina'>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <DrawerClose asChild>
                  <Link to={'/graficas'}>Graficas</Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link to={'/transacciones'}>Transacciones</Link>
                </DrawerClose>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </header>

        <section>
            {children}
        </section>
    </main>
  )
}

export default Layout