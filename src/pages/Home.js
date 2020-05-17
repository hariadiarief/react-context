import React, { Component } from "react";
import { RootContextConsumer } from '../context/RootContext';
import { RootContext } from '../context/RootContext'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	static contextType = RootContext;


	render() {
		const { theme } = this.context

		return (
			<RootContextConsumer>
				{(context) => {
					if (context.language === 'IND') {
						return (< div >
							<h1>Ini Judul</h1>
							<span>ini paragraf</span>
							<div>{theme}</div>

						</div>)
					} else {
						return (< div >
							<h1>This is title</h1>
							<span>this is paragraph</span>
						</div>)
					}
				}}
			</RootContextConsumer>
		)
	}
}
