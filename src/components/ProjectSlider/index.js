import Divider from "../Divider"
import FadeIn from "../FadeIn"
import ProjectItem from "./components/ProjectItem"
import styles from "./ProjectSlider.module.scss"

export default function ProjectSlider({ repos }) {
  return (
    <>
      <FadeIn>
        <Divider id="projects" title="Projects" />
        <section className={styles.container}>
          <p>
            Here you can check some of my personal projects currently on my
            Github
          </p>
          <div className={styles.slider}>
            {repos.map((repo) => (
              <ProjectItem key={repo.title} repo={repo} />
            ))}
          </div>
        </section>
      </FadeIn>
    </>
  )
}
