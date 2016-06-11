import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Icon from 'react-native-vector-icons/FontAwesome';

import Constants from '../Utils/Constants';

import {
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {

    fontSize: 24,
    color: '#FFF'
  }
});

export default class ButtonBrowser extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    style: {}
  };

  onPress() {
    if (this.props.disabled) {
      return;
    }
    this.props.onPress();
  }

  render() {

    return (
      <TouchableHighlight
        style={[styles.button, this.props.style]}
        disabled={this.props.disabled}
        underlayColor={Constants.TOOLBAR_BG}
        onPress={() => this.onPress()}>
          <Icon name={this.props.icon} style={styles.icon} />
      </TouchableHighlight>
    );
  };

};
