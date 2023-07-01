import Head from "next/head"

import { getMyRepos } from "../services/api"

import Header from "../components/Header"
import Navbar from "../components/Navbar"
import ProjectSlider from "../components/ProjectSlider"
import About from "../components/About"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"

export default function Home({ repos }) {
  return (
    <div>
      <Head>
        <title>Home | Portifolio</title>
      </Head>
      <Navbar />
      <Header />
      {repos && <ProjectSlider repos={repos} />}
      <About />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await getMyRepos()

  const repos = data
    .map(
      (i) =>
        i.language && {
          name: i.name,
          description: i.description,
          language: i.language,
          url: i.html_url,
          updated_at: i.updated_at,
        }
    )
    .filter((repo) => !!repo)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

  return {
    props: {
      repos,
    },
    // revalidate: 60 * 60 * 8,
  }
}
