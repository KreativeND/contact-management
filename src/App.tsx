import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Contacts from "./pages/Contacts";
import Charts from "./pages/Charts";

function App() {
  return (
    <main className="bg-gray-100">
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/" element={<Contacts />} /> {/* Default route */}
            </Routes>
          </main>
        </div>
      </Router>
    </main>
  );
}

export default App;
