import { Route, Routes } from "react-router-dom";

// pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
