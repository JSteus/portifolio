import Divider from '../Divider'
import ProjectItem from './components/ProjectItem'
import styles from './ProjectSlider.module.scss'

export default function ProjectSlider({ repos }) {
  return <>
    <Divider id="projects" title="Projects" />
    <section className={styles.container}>
      <p>Here you can check some of my personal projects currently on my Github</p>
      <div className={styles.slider}>
        {repos.map(repo => <ProjectItem key={repo.name} repo={repo} />)}
      </div>
    </section>
  </>
}

