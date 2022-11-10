import Logos from '../../../Logos'
import styles from './ProjectItem.module.scss'

export default function ProjectItem({ repo }) {
  return <a className={styles.container} href={repo?.url} target="_blank">
    {repo?.language && <Logos lang={repo.language} />}
    <div className={styles.textContainer}>
      <h5>{repo?.name}</h5>
      <h6>{repo?.description}</h6>
    </div>
  </a>
}
