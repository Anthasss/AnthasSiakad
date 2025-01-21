export default function TotalTagihan() {
  return (
    <div className="flex flex-col">
      <div className="font-bold mb-2">Total Tagihan</div>
      <div className="w-full h-64 bg-base-300 rounded-lg p-4 flex flex-col items-center justify-center gap-2">
        <img src="src\assets\EmptyTagihanChara.svg" alt="Tagihan kosong!" className="h-[60%]" />
        <div className="text-center">
          <h1 className="font-bold">Belum Ada Tagihan Baru</h1>
          <p>Terima kasih telah melunasi tagihan akademik di periode ini.</p>
        </div>
      </div>
    </div>
  );
}
