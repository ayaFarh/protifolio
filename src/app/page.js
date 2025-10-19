import Image from "next/image";
import HeroSec from "./HeroSec/page";
import Skills from "./Skills/page";
import About from "./About/page";


export default function Home() {
  return (
   <div className="space-y-4">
   <HeroSec/>
   <About/>
   <Skills/>
   
   </div>
  );
}
