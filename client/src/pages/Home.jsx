import React, { PureComponent } from 'react';

import "../styles/global.css";
import "../styles/home.css";

export class Home extends PureComponent {
    render() {
        return (
            <div>
                <section className="body-page">
                <h2>Accueil</h2>
                    <p>I'm a sample text</p>
                </section>
            </div>
        )
    }
}

export default Home
