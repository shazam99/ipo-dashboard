import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { useSelector } from 'react-redux';
import Currency from './pages/currency/Currency';
import IPO from './pages/ipo/IPO';

function App() {
    const user = useSelector((state) => state.user);
    const { theme, colors } = useSelector((state) => state.theme);

    const isAuthenticated = (user) => {
        return user === true;
        // return true;
    };

    return (
        <div className="App" style={{
            background: colors[theme].background,
            color: colors[theme].text,
        }}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/ipo' element={isAuthenticated(user) ? <IPO />  : <Navigate to="/login" />} />
                    <Route path='/currency' element={isAuthenticated(user) ? <Currency /> : <Navigate to="/login" />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
