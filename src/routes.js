import Footer from 'components/footer';
import Header from 'components/header';
import About from 'pages/about';
import Contact from 'pages/contact';
import Home from 'pages/home';
import ScrollToTop from 'components/scrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function AppRouter () {
    return (
        <main className='container'>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}