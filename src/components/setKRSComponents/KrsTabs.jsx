/* eslint-disable react/prop-types */
import { useState } from "react";

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex bg-base-300 rounded-t-lg border-b border-gray-200 justify-center">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-md font-medium transition-colors duration-200
              ${activeTab === index ? "text-white border-b-2 border-white" : "text-gray-500 hover:text-white"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="bg-base-300 p-4 rounded-lg flex flex-col gap-4">{items[activeTab].content}</div>
    </div>
  );
};

const Cards = ({ items, onToggle, buttonText }) => {
  if (items.length === 0) {
    return (
      <div className="w-full grid place-items-center m-4">
        <img src="src\assets\EmptyClassChara.svg" alt="Kelas Kosong" className="w-[40%]" />
        <h1 className="font-bold text-xl">Belum ada kelas di sini...</h1>
      </div>
    );
  }

  return items.map((item, index) => (
    <div key={index} className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{item.matkul}</h2>
        <p>
          {item.dosen} ({item.ruang})
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => onToggle(item)}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  ));
};

export default function KrsTab() {
  const [cardItems, setCardItems] = useState([
    {
      matkul: "Jaringan Syaraf Tiruan",
      dosen: "Pak Yanto Polly",
      ruang: "202",
    },
    {
      matkul: "Basis Data",
      dosen: "Ibu Bertha Djahi",
      ruang: "Lab",
    },
    {
      matkul: "Pendidikan Anti Korupsi",
      dosen: "Pak Kornelis Letelay",
      ruang: "204",
    },
    {
      matkul: "Bisnis Digital",
      dosen: "Ibu Dessy Rumaklak",
      ruang: "205",
    },
  ]);

  const [krsTersimpan, setKrsTersimpan] = useState([]);

  const handleToggle = (item) => {
    // Check if item is in cardItems
    if (cardItems.some((card) => card.matkul === item.matkul)) {
      // Move from cardItems to krsTersimpan
      setCardItems(cardItems.filter((card) => card.matkul !== item.matkul));
      setKrsTersimpan([...krsTersimpan, item]);
    } else {
      // Move from krsTersimpan to cardItems
      setKrsTersimpan(krsTersimpan.filter((card) => card.matkul !== item.matkul));
      setCardItems([...cardItems, item]);
    }
  };

  const tabItems = [
    {
      label: "KRS Tersedia",
      content: <Cards items={cardItems} onToggle={handleToggle} buttonText="Daftar" />,
    },
    {
      label: "KRS Tersimpan",
      content: <Cards items={krsTersimpan} onToggle={handleToggle} buttonText="Batalkan" />,
    },
  ];

  return <Tabs items={tabItems} />;
}
