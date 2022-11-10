import styles from './Divider.module.scss'

export default function Divider({ id, title }) {
  return <div id={id} className={styles.container}>
    <h1>{title}</h1>
  </div>
}