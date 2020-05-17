import React, { Component, Fragment } from 'react'
import { RootContextConsumer } from '../context/RootContext'
import { RootContext } from '../context/RootContext'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	static contextType = RootContext

	render() {
		const { theme } = this.context

		return (
			<div className={`card--${theme}`}>
				<RootContextConsumer>
					{(context) => {
						if (context.language === 'IND') {
							return (
								<Fragment>
									<h1>Ini Judul</h1>
									<span>ini paragraf</span>
								</Fragment>
							)
						} else {
							return (
								<Fragment>
									<h1>This is title</h1>
									<span>this is paragraph</span>
								</Fragment>
							)
						}
					}}
				</RootContextConsumer>
			</div>
		)
	}
}
