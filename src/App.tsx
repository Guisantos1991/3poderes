import Header from "./components/Header"
import MidSection from "./components/MidSection"
import MainService from "./components/MainService"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col gap-6 sm:gap-10">
      <Header />
      <MidSection />
      <MainService />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}