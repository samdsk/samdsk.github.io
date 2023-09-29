/* eslint-disable react/no-unescaped-entities */
import Nav from "../components/Nav.js"
import HomeSection from "../components/HomeSection.js"

export default function Home() {
  return (
    <>
    <Nav/>
    <main className="min-h-screen p-1">
      <HomeSection/>
      <section id="projects" className=" bg-zinc-800 min-h-screen min-w-full"> Projects </section>
      <section id="contacts" className=" bg-gray-800 min-h-screen min-w-full"> Contacts </section>
    </main>    
    </>
  )
}
