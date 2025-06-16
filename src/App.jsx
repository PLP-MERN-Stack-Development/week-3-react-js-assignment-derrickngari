import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import { ThemeProvider, useTheme } from './utils/ThemeContext';

function App() {
  const { theme } = useTheme()
  return (
    <ThemeProvider>
      <main className={`${theme === 'dark' ? 'bg-linear-to-r from-slate-950 to-slate-800 text-gray-300 dark' : 'bg-gray-200 text-slate-900 light'} flex flex-col items-center justify-between w-full min-h-screen font-sans text-sm md:text-lg md:flex-col md:space-x-4 md:justify-evenly md:items-center md:px-10`}>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App
