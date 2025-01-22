import { Menu } from "lucide-react";

import KrsTabs from "../components/setKRSComponents/KrsTabs";

export default function SetKrsPage() {
  return (
    <div className="w-full min-h-screen p-4 lg:px-36">
      <div className="breadcrumbs text-sm bg-base-300 px-4 py-3 rounded-lg">
        <ul>
          <li>
            <Menu className="w-4" />
          </li>
          <li>Akademik</li>
          <li>Pengisian Kartu Rencan Studi</li>
        </ul>
      </div>

      <h1 className="text-2xl font-bold mt-2 mb-4 ">Pengisian Kartu Rencana Studi Mahasiswa</h1>

      <div className="w-full bg-base-300 rounded-lg p-4 my-4 grid gap-6 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4">
        <div>
          <h1 className="text-xl font-bold">Semester Saat Ini</h1>
          <p>Semester 3</p>
        </div>

        <div>
          <h1 className="text-xl font-bold">Batas Total SKS</h1>
          <p>24 SKS</p>
        </div>

        <div>
          <h1 className="text-xl font-bold">Periode Akademik</h1>
          <p>2025 Ganjil</p>
        </div>

        <div>
          <h1 className="text-xl font-bold">Status</h1>
          <p>KRS belum diajukan</p>
        </div>
      </div>

      <KrsTabs />
    </div>
  );
}
