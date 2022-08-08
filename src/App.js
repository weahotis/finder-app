import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./Components/layouts/Footer";
import Navbar from "./Components/layouts/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { GithubProvider } from "./Context/Github/GithubContext";

function App() {
  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-2 bb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          </main>
        <Footer />
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
