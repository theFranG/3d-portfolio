import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/work" element={<WorkPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
      <Route path="/:projectName" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
