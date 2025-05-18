import './App.css'
import {Outlet} from "react-router-dom";
import Menu from "./components/Menu.tsx";
import ThemeContext from "./context/ThemeContext.tsx";
import {useState} from "react";
import CounterContext from "./context/CounterContext.tsx";

function App() {

    const [value, setValue] = useState<number>(0)
    const [theme, setTheme] = useState<'bg-white' | 'bg-black'>('bg-white')

    const toggleTheme = () => {
        setTheme(prevState => prevState === 'bg-white' ? 'bg-black' : 'bg-white');
    }

    const inc = () => {
        setValue(prevState => ++prevState)
    }

    const dec = () => {
        setValue(prevState => --prevState)
    }



    return (
        <main>
            <Menu/>
            <ThemeContext.Provider value={{
                theme,
                toggleTheme
            }}>
                <CounterContext value={{count: value, inc, dec}}>
                <Outlet/>
                </CounterContext>
            </ThemeContext.Provider>
        </main>
    )
}

export default App
