import { useState, useEffect } from 'react'
import Image from 'next/image'
import useWindowSize from '../../hooks/useWindowSize'
import styles from './Header.module.scss'

export default function Header() {
  const { width } = useWindowSize()
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(width <= 768)
  }, [width])

  return <section id="header" className={styles.container}>
    <header>
      <h1>Mateus Nascimento</h1>
      <h2>Frontend Developer</h2>
      <Image src="/images/profile.jpg" alt="profile mateus" width={mobile ? 100 : 144} height={mobile ? 100 : 144} />
      <p>Hello there! My Name is Mateus Nascimento. I'm 23 years old currently living in Brasil.
        I'm a software developer (with a preference to frontend development) aways looking for new learning oportunities and challenges! </p>
    </header>
  </section>
}

