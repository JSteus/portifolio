import Divider from "../Divider"
import FadeIn from "../FadeIn"
import Logos from "../Logos"
import styles from "./About.module.scss"

export default function About() {
  return (
    <>
      <FadeIn>
      <Divider id="about" title="About" />
        <article className={styles.container}>
          <img
            src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png"
            alt="Computador iuriCode"
          ></img>
          <p>
            I started my journey in 2019, right before the pandemic and, since
            then, never stopped. I&apos;m always looking for learning
            opportunities, especially in technologies that I have never used. I
            worked with a multitude of tools, such as ReactJS, React Native,
            NextJS, NodeJS, Docker, PostgreSQL, Sass / Scss, Redux and
            Bootstrap.
          </p>
          <p>
            The world of webdevelopment is vast and ever growing, with endless
            possibilities to express creativity and problem-solving skills,and
            that&apos;s what sparked my love for programing. My curiosity knows
            no bounds, and you can expect various changes to this site with
            every new discovery and skill.
          </p>
          <div>
            <span>Powered By:</span>
            <div className={styles.badges}>
              <Logos lang="React" />
              <Logos lang="NextJS" />
            </div>
          </div>
        </article>
      </FadeIn>
    </>
  );
}
