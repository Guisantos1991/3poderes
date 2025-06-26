import Header from "./components/Header"
import MidSection from "./components/MidSection"
import MainService from "./components/MainService"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import { useEffect } from "react"


export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <MidSection />
      <MainService />
      <AboutUs />
      <Contact />
    </>
  )
}