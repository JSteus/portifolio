import Link from 'next/link'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return <nav className={styles.container}>
   <ul>
     <Link scroll={false} replace href="#header" className={styles.links}>Home</Link>
     <Link scroll={false} replace href="#projects" className={styles.links}>Projetos</Link>
     <Link scroll={false} replace href="#about" className={styles.links}>Sobre</Link>
   </ul>
  </nav>
}

