import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
// import MobileNav from './MobileNav'

function Navbar() {
  return (
    <nav className="h-14 sticky top-0 transition-all border-gray-200 border-b z-40 bg-white/75 backdrop-blur-lg">
      <MaxWidthWrapper className="h-full flex items-center justify-between">
        <Link href={'/'} className=" font-semibold text-base flex z-40">
          Leon
        </Link>
        {/* <MobileNav isAuth={!!user} /> */}

        <div className=" hidden ml-auto space-x-8 text-sm font-medium sm:flex justify-center items-center">
          <Link
            href={'/pricing'}
            className={buttonVariants({
              variant: 'ghost',
              size: 'sm'
            })}>
            Work
          </Link>
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'ghost',
              size: 'sm'
            })}>
            About
          </Link>
          <Link
            href={'/'}
            target="_blank"
            className={buttonVariants({
              size: 'sm'
            })}>
            Contact me
            <ArrowRight className=" ml-1.5 h-5 w-5" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
