import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Schedule = () => {
  const [selected, setSelected] = useState();

  return (
    <div className="w-full h-full bg-base-300 shadow-sm flex flex-col overflow-hidden rounded-lg p-4">
      <div className="flex w-full justify-between">
        {/* Schedule dropdown */}
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn m-1 text-md font-bold">
            Jadwal Kuliah
            <ChevronDown className="w-4 h-4" />
          </div>
          <ul tabIndex={0} className="dropdown-content menu  rounded-box bg-base-200 z-10 w-52 p-2 shadow">
            <li>
              <a>Jadwal Kuliah</a>
            </li>
            <li>
              <a>Jadwal Ujian Semester</a>
            </li>
          </ul>
        </div>

        {/* Date picker dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            <Calendar className="w-4 h-4 mr-2" />
            {selected ? selected.toLocaleDateString() : "Select date"}
            <ChevronDown className="w-4 h-4" />
          </div>
          <div tabIndex={0} className="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              className="bg-base-200 rounded-lg p-4"
            />
          </div>
        </div>
      </div>

      {/* class cards */}
      <div className="w-full h-full flex flex-col text-center justify-center items-center">
        <img src="src\assets\EmptyClassChara.svg" alt="Class Empty" className="w-1/2 max-w-sm" />
        <h1
          className="texl-xl
        font-bold"
        >
          Tidak ada jadwal kuliah saat ini
        </h1>
        <p>
          Istirahat dulu ya, tidak ada jadwal kuliah saat ini ^v^
          <br /> Tapi jangan lupa, tetap belajar dan kerjakan tugas ya!
        </p>
      </div>
    </div>
  );
};

export default Schedule;
