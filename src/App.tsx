import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Navbar from './components/Navbar';
import { Footer } from './components/AboutAndFooter';
import { useEffect, useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <Router>
            <div className="min-h-screen transition-colors duration-300">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cv" element={<CV />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
