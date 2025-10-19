import Image from "next/image";
import HeroSec from "./HeroSec/page";
import Skills from "./Skills/page";


export default function Home() {
  return (
   <div className="space-y-4">
   <HeroSec/>
   <Skills/></div>
  );
}
