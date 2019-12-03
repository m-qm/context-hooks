import React, {Component} from 'react';
import {ThemeContext} from '../context/ThemeContext';

class EventList extends Component {
  static contextType = ThemeContext;

  render () {
    const {isLightTheme, dark, light} = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="event-list"
        style={{background: theme.bg, color: theme.syntax}}
      >
        <ul>
          <li style={{background: theme.ui}}>VH</li>
          <li style={{background: theme.ui}}>HV</li>
          <li style={{background: theme.ui}}>LR</li>

        </ul>
      </div>
    );
  }
}

export default EventList;
