import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <>
      <div>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
