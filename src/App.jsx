import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductItem from './components/ProductItem'
import SentenceSwiper from './components/SentenceSwiper'
import ArrivalProducts from './components/ArrivalProducts'
import Experience from './components/Experience'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
    localStorage.setItem('theme', 'light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
    localStorage.setItem('theme', 'dark')
  }

  // Read from localStorage on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }, [])

  // Apply theme class to <html>
  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Navbar />
      <Hero />
      <ProductItem />
      <SentenceSwiper/>
      <ArrivalProducts/>
      <Experience/>
    </ThemeProvider>
  )
}

export default App
