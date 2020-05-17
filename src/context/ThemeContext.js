import React, { Component, createContext } from "react";

export const ThemeContext = createContext();
export const ThemeContextConsumer = ThemeContext.Consumer;

export default class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
        };
    }

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
            <ThemeContext.Provider value={{ theme: this.state.theme, changeTheme: this.changeTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
