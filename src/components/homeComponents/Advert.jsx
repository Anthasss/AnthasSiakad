export default function Advert() {
  return (
    <div className="flex flex-col">
      <a href="">
        <div className="w-full h-64 bg-base-300 rounded-lg p-4 flex flex-row items-center gap-2 overflow-hidden">
          <img
            src="src\assets\AdvertChara.svg"
            alt="Tagihan kosong!"
            className="w-[50%] translate-y-4 -translate-x-4 lg:w-[35%] lg:translate-x-0 lg:translate-y-0"
          />
          <div className="text-center">
            <h1 className="font-bold text-2xl">Made by AnthasProg</h1>
            <p className="text-xl">Check out his github!</p>
          </div>
        </div>
      </a>
    </div>
  );
}
