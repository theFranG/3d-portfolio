import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/work" element={<WorkPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
      <Route path="/:projectName" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
