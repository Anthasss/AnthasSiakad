import TopGrid from "../components/homeComponents/TopGrid";

export default function HomePage() {
  return (
    <div className="h-auto">
      <div className="grid grid-rows-[auto,auto] p-4">
        <TopGrid />
        <div className="">Rest of content</div>
      </div>
    </div>
  );
}
