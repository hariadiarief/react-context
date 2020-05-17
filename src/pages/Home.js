import React, { Component } from "react";
import { LanguageContextConsumer } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static contextType = ThemeContext;

	render() {
		return (
			<LanguageContextConsumer>
				{(context) => {
					if (context.language === 'IND') {
						return (< div >
							<h1>Ini Judul</h1>
							<span>ini paragraf</span>

						</div>)
					} else {
						return (< div >
							<h1>This is title</h1>
							<span>this is paragraph</span>
						</div>)
					}
				}}
			</LanguageContextConsumer>
		)
	}
}
