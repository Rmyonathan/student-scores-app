import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StudentManagement from './pages/StudentManagement';
import About from './pages/About';

function App() {
  return (
    <Router>
      <StudentProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<StudentManagement />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </StudentProvider>
    </Router>
  );
}

export default App;