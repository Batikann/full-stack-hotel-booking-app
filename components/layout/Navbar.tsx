'use client'

import { UserButton, useAuth } from '@clerk/nextjs'
import Container from '../Container'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import SearchInput from '../shared/SearchInput'

const Navbar = () => {
  const router = useRouter()
  const { userId } = useAuth()
  return (
    <div className="sticky flex top-0 border border-b-primary/10 bg-secondary justify-between">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image src={'/logo.png'} alt="logo" width={44} height={44} />
            <div className="font-bold text-xl">TravelDen</div>
          </div>
          <SearchInput />
          <div className="flex gap-3 items-center">
            <div>theme</div>
            {userId ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <Button
                  onClick={() => router.push('/sign-in')}
                  variant={'outline'}
                  size={'sm'}
                >
                  Sign In
                </Button>
                <Button onClick={() => router.push('/sign-up')} size={'sm'}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Navbar
