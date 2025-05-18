import {createContext} from "react";

type ThemeContextType = {
    theme: 'bg-white' | 'bg-black',
    toggleTheme: () => void

}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'bg-white',
    toggleTheme: () => void {}
})

export default ThemeContext