
import JokePage from "./Pages/JokePage";
import Footer from "./Component/Footer";
import EditPage from "./Pages/EditPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<JokePage />} />
          <Route exact path="/editpage" element={<EditPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
