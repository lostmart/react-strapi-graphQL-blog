import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Category from './pages/Category'
import Homepage from './pages/Homepage'
import Singlepost from './pages/Singlepost'
import Notfoundpage from './pages/Notfoundpage'
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

					<Route path="*" element={<Notfoundpage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
