'use client'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from '../components/Navbar'
import Introduction from '@/components/Introduction'
import ValueProject from '@/components/ValueProject'
import Work from '@/components/Work'
import Experience from '@/components/Experience'
import Loader from '@/components/Loader'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   loading
  //     ? document.querySelector('body').classList.add('overflow-hidden', 'h-screen')
  //     : document.querySelector('body').classList.remove('overflow-hidden', 'h-screen')
  // }, [loading])

  return (
    <main className=" h-full">
      <Navbar />
      <Introduction />
      <ValueProject />
      <Work />
      <Experience />
    </main>
  )
}
