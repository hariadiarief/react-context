import React, { Component, createContext } from "react";

export const RootContext = createContext();
export const RootContextConsumer = RootContext.Consumer;

export class RootProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: "IND",
			theme: "light",
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

	changeTheme = () => {
		if (localStorage.getItem('theme') === 'light') {
			this.setState({ theme: 'dark' }, () => {
				localStorage.setItem('theme', 'dark');
			});
		} else {
			this.setState({ theme: 'light' }, () => {
				localStorage.setItem('theme', 'light');
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

		const theme = localStorage.getItem("theme");
		if (!theme) {
			this.setState({ theme: "light" }, () => {
				localStorage.setItem("theme", "light");
			});
		}
		else {
			this.setState({ theme: localStorage.getItem("theme") });
		}
	}

	render() {
		return (
			<RootContext.Provider value={{ language: this.state.language, changeLang: this.changeLang, theme: this.state.theme, changeTheme: this.changeTheme }}>
				{this.props.children}
			</RootContext.Provider>
		)
	}
}
