import { Button } from '@/components/ui/button'
import { BrainIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HeroTitle = (props: Props) => {
  return (
    <div className='text-left max-w-lg mx-auto md:mx-0 flex flex-col gap-6'>
      <h1 className=''>
        Descubre Tu Potencial en la Tecnología
      </h1>
      <h3 className=''>
        Aprende nuevas tecnologías y mejora tus competencias.
      </h3>
      <div className='flex gap-4 mt-6'>
        <Button variant="secondary" size="lg" className='hover:shadow-md hover:shadow-card-foreground transition-all ease-in-out duration-300 hover:scale-105'>
          <Link href="/blog" className='flex justify-center items-center gap-2'>
            <BrainIcon className='size-6' />
            <span>Aprende</span>
          </Link>
        </Button>
        <Button variant="secondary" size="lg" className='px-6 py-3 hover:shadow-md hover:shadow-card-foreground transition-all ease-in-out duration-300 hover:scale-105'>
          <Link href="/contact" className='flex justify-center items-center gap-2'>
            <PhoneIcon className='size-6' />
            <span>Contactate</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default HeroTitle


