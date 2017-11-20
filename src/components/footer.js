import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import amazonLogo from '../images/amazon-logo.png';
import bodybuildingLogo from '../images/bodybuilding-logo.png';
import myfitpalLogo from '../images/myfitpal-logo.png'

export default class Footer extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div>
                    <ul className="nav navbar-nav">
                        <li className="nav1buttons">
                            <NavLink to='/QandA'>
                                Q and A forum
                            </NavLink>
                        </li>
                        <li className="nav1buttons">
                            <a href='https://play.google.com/store/apps/developer?id=MyFitnessPal,+Inc.&hl=en'>Partner 5/3/1 with myfitnesspal <img src={myfitpalLogo} /></a>

                        </li>
                        <li className="nav1buttons">
                            <a href='https://www.amazon.com/Simplest-Effective-Training-System-Strength-ebook/dp/B00AJ8CIQM/ref=sr_1_1?ie=UTF8&qid=1511123020&sr=8-1&keywords=5%2F3%2F1+wendler' >5/3/1 Book <img src={amazonLogo} /></a>

                        </li>
                        <li className="nav1buttons">
                            <a href='https://www.bodybuilding.com/exercises/finder'>Exercise Finder + Demonstration <img src={bodybuildingLogo} /></a>
                            <p>Ryan is a crackhead</p>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}