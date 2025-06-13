import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Navbar from './components/Navbar'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => setThemeMode('light')
  const darkTheme = () => setThemeMode('dark')

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <>
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      
        <Navbar />
    </ThemeProvider>
</>
  )
}

export default App
