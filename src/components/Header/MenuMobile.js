import React, { Component } from 'react';
import listMenu from '../../resource/listMenu';
import MenuMobileItem from './MenuMobileItem';
import './MenuMobile.scss';

class MenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectMenu: null,
    };
  }

  render() {
    return (
      <div className={this.props.active ? '' : 'active'}> 
        <div onClick={this.props.toggleMenu} className="background-dark">
        </div>
        <div className="menu-mobile">
          <div className="account-group">
            <div>Sign in</div>
            <div>Sign up</div>
          </div>
          <div className="menu-mobile__group">
            {
              listMenu.map((item,index) => 
                <MenuMobileItem key={index} data={item} /> 
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MenuMobile;
