import React, { Component } from 'react';
import typeManga from '../../resource/typeManga';
import listMenu from '../../resource/listMenu';
import MenuMobile from './MenuMobile';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSearch: true,
      toggleMenu: true
    };
    this.buttonToggleSearch = this.buttonToggleSearch.bind(this);
    this.buttonToggleMenu = this.buttonToggleMenu.bind(this);
  }

  buttonToggleSearch() {
    this.setState({toggleSearch : !this.state.toggleSearch});
  }

  buttonToggleMenu() {
    this.setState({toggleMenu : !this.state.toggleMenu});
  }

  render() {
    return (
      <div>
        <MenuMobile active={this.state.toggleMenu} toggleMenu={this.buttonToggleMenu} />
        <div className={this.state.toggleSearch ? 'search-group' : 'search-group active-search'}>
          <form onSubmit={this.handleSubmit}>
            <input className="input-search" type="text" placeholder="Search..." />
            <input className="submit-search" type="submit" value="Search" />
          </form>
        </div>
        <div id="header" className="header">
          <div className="flex-header">
            <div>
              <img alt="logo" src={require('../../assets/images/logo-light.png')}/>
            </div>
            <div className="list-menu">
              <ul className="list-menu__parent">
                {listMenu.map((item, index) => 
                  <li className="list-ment__parent__item" key={index}>
                    <span>{item.title}</span>
                    <img className={item.drop ? 'show' : 'hide'} alt="down" src={require('../../assets/images/chevron-arrow-down.png')}/>
                    {
                      item.drop ?
                      <ul className="list-menu__child">
                        {item.dropDownMenu.map((item, index) =>
                          <li key={index}>{item.title}</li>
                        )}
                      </ul>
                      :
                      null
                    }
                  </li>)}
              </ul>
            </div>
            <div className="search-header">
              <svg onClick={this.buttonToggleSearch} preserveAspectRatio="xMidYMid meet" x="0px" y="0px" viewBox="0 0 339.921 339.921">
                {
                  this.state.toggleSearch ? 
                  <path d="M335.165,292.071l-81.385-84.077c-5.836-6.032-13.13-8.447-16.29-5.363   c-3.171,3.062-10.47,0.653-16.306-5.379l-1.164-1.207c36.425-47.907,32.89-116.499-10.851-160.24   c-47.739-47.739-125.142-47.739-172.875,0c-47.739,47.739-47.739,125.131,0,172.87c44.486,44.492,114.699,47.472,162.704,9.045   l0.511,0.533c5.825,6.032,7.995,13.402,4.814,16.469c-3.166,3.068-1.012,10.443,4.83,16.464l81.341,84.11   c5.836,6.016,15.452,6.195,21.49,0.354l22.828-22.088C340.827,307.735,340.99,298.125,335.165,292.071z M182.306,181.81   c-32.852,32.857-86.312,32.857-119.159,0.011c-32.852-32.852-32.847-86.318,0-119.164c32.847-32.852,86.307-32.847,119.148,0.005   C215.152,95.509,215.152,148.964,182.306,181.81z" fill="#f45c43"/>
                  :
                  <path fill="#f45c43" d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                  c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                  c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                  l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                  L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/>
                }
              </svg>
              <span>Advanced</span>
              <span>
                <button onClick={this.buttonToggleMenu} className={this.state.toggleMenu ? 'nav-toggle' : 'opened nav-toggle'}>
                  <span className="bar-top"></span>
                  <span className="bar-mid"></span>
                  <span className="bar-bot"></span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="list-manga-type">
          <div className="list-manga-inside">
            <ul>
              {
                typeManga.map((item, index) =>
                  <li key={index}>
                    <div className="list-manga__main">
                      <a>{item.name}</a>
                      {
                        item.name === 'More'?
                          <svg preserveAspectRatio="xMidYMid meet" x="0px" y="0px" viewBox="0 0 339.921 339.921">
                            <path fill="#666" d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                            C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                            s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
                          </svg>
                          : null
                      }
                    </div>
                    {
                      item.subMenu ? 
                      <div className="list-manga__sub">
                        {item.subMenu.map((item,index) => 
                          <div key={index}>
                            <a>{item.name}</a>
                          </div> 
                        )}
                      </div>  : null
                    }
                  </li>
                )
              }
            </ul>
            {/* <div className="account-group">
              <div>Sign in</div>
              <div>Sign up</div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
