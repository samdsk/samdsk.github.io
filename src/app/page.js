/* eslint-disable react/no-unescaped-entities */
import Nav from "../components/Nav.js"
import HomeSection from "../components/HomeSection.js"

export default function Home() {
  return (
    <>
    <Nav/>
    <main className="flex flex-col min-h-screen items-center p-1">
      <HomeSection/>
      <section id="about"  className=" bg-slate-950 min-h-screen min-w-full"> About me </section>
      <section id="projects" className=" bg-zinc-800 min-h-screen min-w-full"> Projects </section>
      <section id="contacts" className=" bg-gray-800 min-h-screen min-w-full"> Contacts </section>
    </main>    
    </>
  )
}
