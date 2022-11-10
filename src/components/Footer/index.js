import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

import styles from './Footer.module.scss'

export default function Footer() {
  return <section className={styles.container}>
    <footer>
      <a href="mailto:mateus2021r@outlook.com">
        mateus2021r@outlook.com
      </a>
      <div className={styles.badges}>
        <div>
          <FaGithub onClick={() => window.open('https://github.com/JSteus')} />
          <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/mateus-nascimento-735b7b1b6/')} />
          <FaDiscord onClick={() => window.open('https://discord.com/users/4461/')} />
        </div>
      </div>
      <p>© 2022 Mateus Nascimento</p>
      <span onClick={() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })}>
        <FaArrowUp />
      </span>
    </footer>
  </section>
}

