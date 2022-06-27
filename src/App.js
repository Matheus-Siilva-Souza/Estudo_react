import Layout from "./Layouts/layouts"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./Views/calculator";
import DigitalWatch from "./Views/digitalWatch";
import Register from "./Views/registration";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Calculator />} />
          <Route path="/digitalWatch" element={<DigitalWatch />} />
          <Route path="/resgistration" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


