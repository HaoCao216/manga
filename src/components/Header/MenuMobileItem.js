import React, { Component } from 'react';

class MenuMobileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false
    };
    this.openSubMenu = this.openSubMenu.bind(this);
  }

  openSubMenu() {
    this.setState({
      activeMenu: !this.state.activeMenu
    })
  }

  render() {
    return (
      <div className="list-menu__item" onClick={this.openSubMenu}>
        {
          this.props.data.drop ? 
          <div className={this.state.activeMenu ? 'arrow-icon active-arrow' : 'arrow-icon'}>
            <svg preserveAspectRatio="xMidYMid meet" x="0px" y="0px" viewBox="0 0 373.008 373.008">
              <path d="M61.792,2.588C64.771,0.864,68.105,0,71.444,0c3.33,0,6.663,0.864,9.655,2.588l230.116,167.2    c5.963,3.445,9.656,9.823,9.656,16.719c0,6.895-3.683,13.272-9.656,16.713L81.099,370.427c-5.972,3.441-13.334,3.441-19.302,0    c-5.973-3.453-9.66-9.833-9.66-16.724V19.305C52.137,12.413,55.818,6.036,61.792,2.588z" fill="#FFFFFF"/>
            </svg>
          </div> : null
        }
        <div className="list-menu__title">
          <span>{this.props.data.title}</span>
          {
            this.props.data.drop ? 
            <div className={this.state.activeMenu ? 'active sub-menu__list' : 'sub-menu__list'}>
              {this.props.data.dropDownMenu.map((item, index) =>
                <div key={index} className="sub-menu">
                  <span>{item.title}</span>
                </div>
              )}
            </div> : null
          }
        </div>
      </div>
    )
  }
}

export default MenuMobileItem;

