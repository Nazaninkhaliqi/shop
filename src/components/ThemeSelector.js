import './ThemeSelector.css'
import { useTheme } from './hook/useTheme'
import modeIcon from '../assets/brightness_4_FILL0_wght400_GRAD0_opsz24 (1).svg'
const themeColors = ['#58249c' , '#249c6b' , '#b70233']
export default function ThemeSelector() {
    const { changeColor, changeMode,mode } = useTheme()
    const toggleMode = ()=>{
            changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode);
  return (
    <div>
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                onClick={toggleMode}
                    src={modeIcon} 
                    style={{filter : mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color =>(
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background: color}}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
