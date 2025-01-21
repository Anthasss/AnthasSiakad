import TopGrid from "../components/homeComponents/TopGrid";
import Schedule from "../components/homeComponents/Schedule";
import TotalTagihan from "../components/homeComponents/TotalTagihan";
import AcademicCalendar from "../components/homeComponents/AcademicCalendar";
import Advert from "../components/homeComponents/Advert";

export default function HomePage() {
  return (
    <div className="h-auto">
      <div className="grid grid-rows-[auto,auto]  p-4 gap-4">
        <TopGrid />
        <div className="grid grid-rows-[auto,auto] lg:grid-rows-1 lg:grid-cols-[auto,30%] gap-4">
          {/* schedule */}
          <Schedule />

          {/* asides */}
          <div className="flex flex-col gap-4">
            <TotalTagihan />
            <AcademicCalendar />
            <Advert />
          </div>
        </div>
      </div>
    </div>
  );
}
