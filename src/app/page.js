/* eslint-disable react/no-unescaped-entities */
import Nav from "../components/Nav.js"
import HomeSection from "../components/HomeSection.js"
import Projects from "../components/Projects.js"
import Contact from "../components/Contact.js"
import Footer from "../components/Footer.js"

export default function Home() {
  return (
    <>
    <Nav/>
    <main className="min-h-screen">
      <HomeSection/>
      <Projects/>
      <Contact/>
    </main>    
    <Footer/>
    </>
  )
}
