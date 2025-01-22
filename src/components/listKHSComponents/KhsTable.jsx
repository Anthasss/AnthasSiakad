/* eslint-disable react/prop-types */
export default function KhsTable({ periode }) {
  if (periode == "20251") {
    return (
      <div className="w-full grid place-items-center m-4">
        <img src="src\assets\EmptyClassChara.svg" alt="Kelas Kosong" className="w-[40%]" />
        <h1 className="font-bold text-xl">Nilai Masih Kosong...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table bg-base-300 rounded-lg">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>No.</th>
              <th>Nama Mata Kuliah</th>
              <th>Nilai Angka</th>
              <th>Nilai Huruf</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Pemrogramman Berorientasi Obyek</td>
              <td>1.25</td>
              <td>D+</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Bahasa Indonesia</td>
              <td>4.00</td>
              <td>A</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Sistem Informasi</td>
              <td>4.00</td>
              <td>A</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>Logika Fuzzy</td>
              <td>4.00</td>
              <td>A</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>Pendidikan Anti Korupsi</td>
              <td>4.00</td>
              <td>A</td>
            </tr>
            {/* row 6 */}
            <tr>
              <th>6</th>
              <td>Struktur Data</td>
              <td>3.50</td>
              <td>AB</td>
            </tr>
            {/* row 7 */}
            <tr>
              <th>7</th>
              <td>Bisnis Digital</td>
              <td>3.75</td>
              <td>A-</td>
            </tr>
            {/* row 8 */}
            <tr>
              <th>8</th>
              <td>Jaringan Syaraf Tiruan</td>
              <td>4</td>
              <td>A</td>
            </tr>
            {/* row 9 */}
            <tr>
              <th>9</th>
              <td>Basis Data</td>
              <td>4</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>

        <h1 className="text-md font-bold">Indeks Prestasi Semester: 3.56</h1>
      </div>
    </div>
  );
}
