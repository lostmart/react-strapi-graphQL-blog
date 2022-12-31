import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Category from './pages/Category'
import Homepage from './pages/Homepage'
import Singlepost from './pages/Singlepost'
// layout
import SiteHeader from './components/SiteHeader'

function App() {
	return (
		<Router>
			<div className="App">
				<SiteHeader />

				<Routes>
					<Route exact path="/" element={<Homepage />} />

					<Route path="/details/:id" element={<Singlepost />} />

					<Route path="/category/:id" element={<Category />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
