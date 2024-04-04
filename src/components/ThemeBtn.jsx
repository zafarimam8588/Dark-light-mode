
import { useTheme } from '../context/ThemeContext';

const ThemeBtn = () => {
    const {themeMode,setDarkTheme,setLightTheme} = useTheme();
    const onChangeBtn = (e)=>{
        const darkModeStatus = e.currentTarget.checked;
        if(darkModeStatus){
            setDarkTheme()
        } else{
            setLightTheme();
        }
    }
  return (
    <label className="relative inline-flex items-center cursor-pointer">
    <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode=== "dark"}
    />
    
    <span className="ml-3 py-3 px-2 bg-yellow-400 hover:bg-yellow-500 rounded-md text-sm font-medium text-gray-900">Toggle Theme</span>
    </label>
  )
}

export default ThemeBtn