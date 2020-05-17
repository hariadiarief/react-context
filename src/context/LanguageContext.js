import React, { Component, createContext } from "react";

export const LanguageContext = createContext();
export const LanguageContextConsumer = LanguageContext.Consumer;

export class LanguageProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: "IND",
		};
	}

	changeLang = () => {
		if (localStorage.getItem('language') === 'IND') {
			this.setState({ language: 'ENG' }, () => {
				localStorage.setItem('language', 'ENG');
			});
		} else {
			this.setState({ language: 'IND' }, () => {
				localStorage.setItem('language', 'IND');
			});
		}
	};

	componentDidMount() {
		const lang = localStorage.getItem("language");
		if (!lang) {
			this.setState({ language: "IND" }, () => {
				localStorage.setItem("language", "IND");
			});
		}
		else {
			this.setState({ language: localStorage.getItem("language") });
		}
	}

	render() {
		return (
			<LanguageContext.Provider value={{ language: this.state.language, changeLang: this.changeLang }}>
				{this.props.children}
			</LanguageContext.Provider>
		)
	}
}
