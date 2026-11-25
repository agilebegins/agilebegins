
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import FourPillars from "@/components/sections/FourPillars";
import MissionSheet from "@/components/sections/MissionSheet";
import ActionPlan from "@/components/sections/ActionPlan";
import ImpactBanner from "@/components/sections/ImpactBanner";
import GetInvolved from "@/components/sections/GetInvolved";
import MakerStories from "@/components/sections/MakerStories";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-[7.25rem] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          {/* <Ticker /> */}
          <FourPillars />
          <MissionSheet />
          <ActionPlan />
          <ImpactBanner />
          <GetInvolved />
          <MakerStories />
          <UpcomingEvents />
        </div>
      </main>
      <Footer />
    </>
  );
}
