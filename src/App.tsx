import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Notfound, Links } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Links} />
        <Route path="/invite" Component={Home} />
        <Route path="*" Component={Notfound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
