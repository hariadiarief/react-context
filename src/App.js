import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { RootProvider } from './context/RootContext'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {}

	render() {
		return (
			<RootProvider>
				<Router>
					<Layout>
						<Route path='/' exact component={Home} />
						<Route path='/profile' component={Profile} />
					</Layout>
				</Router>
			</RootProvider>
		)
	}
}
