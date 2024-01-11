import Header from 'components/header';
import Main from 'components/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function AppRouter () {
    return (
        <main className='container'>
            <Router>
                <Header />
                <Main />
            </Router>
        </main>
    );
}