import { useState } from "react";

import { Menu } from "lucide-react";

import KhsTable from "../components/listKHSComponents/KhsTable";

export default function ListKhsPage() {
  const [periode, setPeriode] = useState("20242");
  return (
    <div className="w-full min-h-screen p-4 lg:px-36">
      {/* breadcrumbs */}
      <div className="breadcrumbs text-sm bg-base-300 px-4 py-3 rounded-lg">
        <ul>
          <li>
            <Menu className="w-4" />
          </li>
          <li>Hasil Studi</li>
          <li>Kartu Hasil Studi</li>
        </ul>
      </div>

      {/* title */}
      <h1 className="text-2xl font-bold mt-2 mb-4 ">Kartu Hasil Studi</h1>

      {/* stats */}
      <div className="w-full bg-base-300 rounded-lg p-4 my-4 grid gap-2 lg:gap-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-2">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">NIM</h1>
          <p className="text-sm">2306080013</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">Tahun Kurikulum</h1>
          <p className="text-sm">222</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">Nama Mahasiswa</h1>
          <p className="text-sm">Samuel Bertolens Jacob</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">Semester</h1>
          <p className="text-sm">4</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">Program Studi</h1>
          <p className="text-sm">Ilmu Komputer</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">Pembimbing Akademik</h1>
          <p className="text-sm">Meiton Boru, S.T., M.Kom.</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">Status Mahasiswa</h1>
          <p className="text-sm">Aktif</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">SKS Lulus / IPK Lulus</h1>
          <p className="text-sm">64 / 3.93</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">Angkatan</h1>
          <p className="text-sm">2023</p>
        </div>

        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <h1 className="text-md font-bold">Total SKS / IPK</h1>
          <p className="text-sm">67 / 3.81</p>
        </div>
      </div>

      {/* select */}
      <p className="text-lg font-bold">Periode</p>
      <select
        className="select select-bordered w-full mb-4"
        onChange={(e) => setPeriode(e.target.value)}
        value={periode}
      >
        <option value="20242">20242</option>
        <option value="20251">20251</option>
      </select>

      {/* actual table */}
      <KhsTable periode={periode} />
    </div>
  );
}
