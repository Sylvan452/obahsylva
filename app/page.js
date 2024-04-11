import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
    <div className='container mx-auto mt-24 px-12 py-4'>
    <HeroSection/>
    <AchievementsSection/>
    <AboutSection/>
    <ProjectsSection/>
    <EmailSection/>
    <Footer/>
    </div>
    </main>
  );
}
