import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { RootContextConsumer } from '../context/RootContext'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<header>
					<RootContextConsumer>
						{(context) => {
							if (context.language === 'IND') {
								return (
									<div>
										<button onClick={() => context.changeLang()}>Ganti Bahasa</button>
										<button onClick={() => context.changeTheme()}>{context.theme === 'dark' ? 'Tema Terang' : 'Tema Gelap'}</button>
									</div>
								)
							} else {
								return (
									<div>
										<button onClick={() => context.changeLang()}>Change Lang</button>
										<button onClick={() => context.changeTheme()}>{context.theme === 'dark' ? 'Dark Theme' : 'Light Theme'}</button>
									</div>
								)
							}
						}}
					</RootContextConsumer>
				</header>
				<main>{this.props.children}</main>
			</div>
		)
	}
}

export default Layout
