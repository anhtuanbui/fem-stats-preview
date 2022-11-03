import React, { Component } from 'react';
import header from '../images/image-header-desktop.jpg';
import headerMobile from '../images/image-header-mobile.jpg';
import './StatsPreview.scss';

export default class StatsPreview extends Component {
    render() {
        return (
            <main>
                <div className="session">
                    <div className="session__image">
                        <div className="session__image-overlay"></div>
                        <picture>
                            <source srcSet={headerMobile} media="(max-width: 375px)"/>
                            <img src={header} alt="header" aria-hidden/>
                        </picture>
                    </div>
                    <div className="session__info">
                        <h1 className="session__title">Get <span className="session__title--highlight">insights</span> that help your business grow.</h1>
                        <p className="session__description">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                        <div className="session__stats">
                            <Stat number="10k+" statName="COMPANIES"/>
                            <Stat number="314" statName="TEMPLATES"/>
                            <Stat number="12M+" statName="QUERIES"/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export class Stat extends Component {
  render() {
    return (
      <div className='stat'>
        <p className="stat__number">{this.props.number}</p>
        <p className="stat__name">{this.props.statName}</p>
      </div>
    )
  }
}

