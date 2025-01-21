import { DayPicker } from "react-day-picker";

export default function AcademicCalendar() {
  return (
    <div className="flex flex-col">
      <div className="font-bold mb-2">Kalender Akademik</div>

      <div className="w-full h-full bg-base-300 rounded-lg p-4 flex flex-col items-center justify-center">
        <DayPicker className="bg-base-300" />
      </div>
    </div>
  );
}
