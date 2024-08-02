import Image from 'next/image'
import ThemeButton from '../Buttons/ThemeButton'
import MobileToggle from './MobileToggle'
import Navigation from './Navigation'
import NetworkDropDown from './NetworkDropDown'

type HeaderProps = {}

const Header = ({ }: HeaderProps) => {
  return (
    <header className='w-full h-16 fixed bg-primary-foreground z-20'>
      <nav className='flex justify-between items-center h-full container'>
        <div className='md:flex justify-center items-center'>
          <Image
            src="/logoicon.png"
            alt='logo_icon'
            width={35}
            height={35}
            className='md:hidden'
            sizes="auto"
          />
          <Image
            src="/logowithname.png"
            alt='logo_icon'
            width={130}
            height={65}
            className='md:block hidden w-40'
          />
        </div>
        <Navigation className='hidden md:flex' />
        <div className='flex gap-4'>
          <NetworkDropDown className='hidden md:block' />
          <ThemeButton />
          <MobileToggle>
            <Navigation />
          </MobileToggle>
        </div>
      </nav>
    </header>
  )
}

export default Header