import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Notfound, Links } from "./pages";

function App() {
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
