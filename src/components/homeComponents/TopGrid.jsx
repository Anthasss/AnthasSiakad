import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";

import IpsGraph from "./IpsGraph";

export default function TopGrid() {
  return (
    <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
      {/* greetings part */}
      <div className="card card-side bg-base-100 shadow-sm px-2">
        <img src="src\assets\greetingChara.svg" alt="Movie" className="w-48" />
        <div className="card-body">
          <h2 className="card-title">Hai, mahasiswa!</h2>
          <p>Saat ini anda berada di Semester 4 dengan hasil IPS & IPK sebagai berikut.</p>
        </div>
      </div>

      {/* ips ipk part */}
      <div className="flex shadow-sm">
        {/* ips ipk score */}
        <div className="h-full w-1/3 grid grid-rows-2 items-center">
          {/* ips */}
          <div className="flex w-full px-4">
            {/* score */}
            <div className=" w-2/3">
              <h1>IPS</h1>
              <h1 className="text-5xl">0.00</h1>
            </div>

            {/* rise fall */}
            <div className=" w-1/3 flex flex-col items-center justify-center ">
              <ChevronDownCircle />
              <h1>0.00</h1>
            </div>
          </div>

          {/* ipk */}
          <div className="flex w-full px-4">
            {/* score */}
            <div className=" w-2/3">
              <h1>IPK</h1>
              <h1 className="text-5xl">0.00</h1>
            </div>

            {/* rise fall */}
            <div className=" w-1/3 flex flex-col items-center justify-center ">
              <ChevronUpCircle />
              <h1>3.98</h1>
            </div>
          </div>
        </div>

        {/* graph */}
        <div className="w-2/3 h-full">
          <IpsGraph />
        </div>
      </div>
    </div>
  );
}
