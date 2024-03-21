import { createContext } from "react";
import { useContext } from "react";

export  const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = () =>{
    return useContext(ThemeContext);
}