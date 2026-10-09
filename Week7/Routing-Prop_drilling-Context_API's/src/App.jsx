// useNavigate hooks lets us to navigate from one route to another
// It does not doing the hard re load of the page 
// It simply changing the route by keeping the same client bundle and changing the page
// because the route has changed

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'


function App() {

    // Whenever we are using useNavigate hook we have to make sure we are suing it in a component
    // inside the BrowserRouter
    // We can't use useNavigate hook ina component that is outside the bbrowserRouter
    return (
        <div>
            <BrowserRouter>
                <Appbar />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function Appbar() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => {
                    navigate("/");
                }}>Landing page</button>

                <button onClick={() => {
                    navigate("/dashboard");
                }}>Dashboard</button>
            </div>
        </div>
    )
}

export default App