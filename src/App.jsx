import { useState ,useEffect} from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from "./components/Card"
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [themeMode,setThememode] = useState("light");

  const setDarkTheme = ()=>{
    setThememode("dark")
  }

  const setLightTheme = ()=>{
    setThememode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, setLightTheme, setDarkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
    </div>
  </ThemeProvider>
  )
}

export default App
