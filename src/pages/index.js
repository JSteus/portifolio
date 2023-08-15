import Head from "next/head"

import Header from "../components/Header"
import Navbar from "../components/Navbar"
import ProjectSlider from "../components/ProjectSlider"
import About from "../components/About"
import Footer from "../components/Footer"

import { projects } from "../utils"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Portifolio</title>
      </Head>
      <Navbar />
      <Header />
      <ProjectSlider repos={projects} />
      <About />
      <Footer />
    </div>
  )
}
