import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { useTheme } from './Theme/useTheme'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import './style/index.scss'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>About</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
