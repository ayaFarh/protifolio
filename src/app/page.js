import Image from "next/image";
import HeroSec from "./HeroSec/page";
import Skills from "./Skills/page";
import About from "./About/page";
import Interested from "./_Component/Interested";
import Contact from "./Contact/page";


export default function Home() {
  return (
   <div className="space-y-4">
   <HeroSec/>
   <About/>
   <Interested/>
   <Skills/>
   
   <Contact/>
   
   </div>
  );
}
