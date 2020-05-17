import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { LanguageContextConsumer } from '../context/LanguageContext';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="layout">
                <header className='layout__header'>
                    <LanguageContextConsumer>
                        {(context) => {
                            if (context.language === 'IND') {
                                return (< div >
                                    <button onClick={() => context.changeLang()}>Ganti Bahasa</button>

                                </div>)
                            } else {
                                return (< div >
                                    <button onClick={() => context.changeLang()}>Change Lang</button>
                                </div>)
                            }
                        }}
                    </LanguageContextConsumer>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;

