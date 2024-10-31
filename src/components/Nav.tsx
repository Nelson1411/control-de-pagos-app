import { Link, useLocation } from 'wouter'
import { Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../components/Tremor/Drawer'
import { Button } from '../components/Tremor/Button'
import {
  RiBarChartGroupedLine,
  RiWallet2Line,
  RiHome5Line,
  RiMenu3Line
} from '@remixicon/react'
import { siteConfig } from '../siteConfitg'
import { cx } from '../lib/utils'

function Nav() {
    const [location] = useLocation()
  const navigation = [
    {
      name: 'Principal',
      href: siteConfig.baseLinks.principal,
      icon: RiHome5Line
    },
    {
      name: 'Gráficas',
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
  return (
    <>
        <nav className='hidden bg-[#242629]  lg:fixed lg:flex lg:flex-col gap-4 
                p-4 border-r relative h-dvh border-gray-700'>
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
                <Link className={
                  cx(
                    isActive(item.href)
                      ? 'dark:text-[#7f5af0]'
                      : 'dark:text-[#fffffe]',
                      'font-title font-bold text-sm md:text-lg'
                  )
                }
                  to={item.href}
                >
                  {item.name}
                </Link>
              </div>
            ))
          }
        </nav>
        
        <header className='lg:hidden flex justify-end'>
          <Drawer>
            <DrawerTrigger asChild className='fixed right-5 top-5 z-50'>
              <Button variant="primary">
                <RiMenu3Line />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col">
              <DrawerHeader aria-describedby='Menu de la pagina'>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <DrawerBody className='flex justify-center items-center flex-col gap-4'>
              {
                navigation.map((item) => (
                  <div key={item.name} className='flex gap-1 items-center'>
                    <DrawerClose asChild  className='flex gap-1 items-center'>
                      <Link className={
                        cx(
                          isActive(item.href)
                            ? 'dark:text-[#7f5af0]'
                            : 'dark:text-[#fffffe]',
                            'font-title font-bold text-2xl'
                        )
                      }
                        to={item.href}
                      >
                        <item.icon className={
                          cx(
                            isActive(item.href)
                            ? 'dark:fill-[#7f5af0]'
                            : 'dark:fill-[#fffffe]',
                            'fill'
                          )
                        } />
                        {item.name}
                      </Link>
                    </DrawerClose>
                  </div>
                ))
              }
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </header>
    </>
  )
}

export default Nav