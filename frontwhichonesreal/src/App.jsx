import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Button from "./components/Button/Button";
import AdminVote from "./components/AdminVote/AdminVote";
import ClientVote from "./components/ClientVote/ClientVote";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Cards />
                <Button />
                <AdminVote />
              </>
            }
          />
          <Route path="/vote" element={<ClientVote />} />
          <Route path="/v" element={<ClientVote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 