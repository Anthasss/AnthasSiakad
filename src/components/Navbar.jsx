import {
  ChevronDown,
  Menu,
  X,
  University,
  Megaphone,
  CalendarClock,
  CalendarDays,
  PenLine,
  TrendingUpDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-200">
      <div className="flex-none">
        <button className="btn btn-square btn-outline" onClick={() => document.getElementById("menuModal").showModal()}>
          <Menu />
        </button>
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold mx-4">Universitas Anthas</h1>
      </div>

      {/* avatar button */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="rounded-lg w-10 h-10"
              />
            </div>
            <ChevronDown />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow">
            {/* avatar items */}
            {/* profile */}
            <li className="mb-4">
              <div className="grid-cols-[auto, 1fr] gap-2">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="rounded-lg w-10 h-10"
                />
                <div>
                  <h3>Nama User</h3>
                </div>
              </div>
            </li>
            <li>
              <a>Notifikasi</a>
            </li>
            <li>
              <a>Data Mahasiswa</a>
            </li>
            <li>
              <a>Status Semester</a>
            </li>
            <li>
              <a>Kemajuan Belajar</a>
            </li>
            <li>
              <a>Berhenti Studi</a>
            </li>
          </ul>
        </div>
      </div>

      {/* menu modal */}
      <dialog id="menuModal" className="modal">
        <div className="modal-box max-h-screen max-w-[100%] h-screen w-screen">
          {/* modal actions */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-md btn-circle btn-ghost absolute right-[2em] top-[2em]">
                <X />
              </button>
            </form>
          </div>

          {/* modal contents */}
          <div className="flex mt-8 mb-4 items-center gap-4">
            <University className="w-12 h-12" />
            <div>
              <p>Sim Akademik</p>
              <h3 className="font-bold text-lg">Universitas Anthas</h3>
            </div>
          </div>

          <div className="join join-vertical w-full menu">
            <li className="collapse join-item border-base-300 border flex item-center h-full">
              <Link to="/" className="p-0">
                <div className="collapse-title text-xl font-medium flex">
                  <h1>Beranda</h1>
                </div>
              </Link>
            </li>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Jadwal</div>
              <div className="collapse-content">
                {/* Section Menu */}

                <ul className="menu w-full p-0">
                  <li>
                    <a className="p-2">
                      <Megaphone />
                      Pengumuman
                    </a>
                  </li>

                  <li>
                    <a className="p-2">
                      <CalendarClock />
                      Kalender Akademik
                    </a>
                  </li>

                  <li>
                    <a className="p-2">
                      <CalendarDays />
                      Jadwal Minggu Ini
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Akademik</div>
              <div className="collapse-content">
                <ul className="menu w-full p-0">
                  {/* Section Menu */}

                  <li>
                    <Link to="/set-krs-mahasiswa" className="p-2">
                      <PenLine />
                      Pengisian KRS
                    </Link>
                  </li>

                  <li>
                    <a className="p-2">
                      <CalendarClock />
                      Kalender Akademik
                    </a>
                  </li>

                  <li>
                    <a className="p-2">
                      <CalendarDays />
                      Jadwal Minggu Ini
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Tingkat Akhir</div>
              <div className="collapse-content">
                <ul className="menu w-full p-0">
                  {/* Section Menu */}

                  <li>
                    <a className="p-2">
                      <Megaphone />
                      Pengumuman
                    </a>
                  </li>

                  <li>
                    <a className="p-2">
                      <CalendarClock />
                      Kalender Akademik
                    </a>
                  </li>

                  <li>
                    <a className="p-2">
                      <CalendarDays />
                      Jadwal Minggu Ini
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Hasil Studi</div>
              <div className="collapse-content">
                <ul className="menu w-full p-0">
                  {/* Section Menu */}

                  <li>
                    <Link to="list-khs" className="p-2">
                      <TrendingUpDown />
                      Kartu Hasil Studi
                    </Link>
                  </li>

                  <li>
                    <a className="p-2">
                      <CalendarClock />
                      Transkrip
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </nav>
  );
}
