import { useState, useRef, useEffect } from "react"
import styles from "./FadeIn.module.scss"

export default function FadeIn({ children }) {
  const [isVisible, setVisible] = useState(false)

  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true)

        observer.unobserve(domRef.current)
      }
    })
1
    observer.observe(domRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`${styles.container} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  )
}
