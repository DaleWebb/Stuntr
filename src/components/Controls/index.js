/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { likeWorker, dislikeWorker } from '../../actions';
const tick = require('./tick.png');
const cross = require('./cross.png');

class Controls extends Component {

  constructor (props) {
    super(props);
    this.tapLike = this.tapLike.bind(this);
    this.tapDislike = this.tapDislike.bind(this);
  }

  tapLike() {
    this.props.onTapLike();
  }

  tapDislike() {
    this.props.onTapDislike();
  }

  render() {
    const { workers, cardIndex } = this.props;
    const isDisabled = cardIndex === workers.length;

    return (
      <View style={styles.container}>
        <TouchableHighlight style={[styles.button, (isDisabled) ? styles.disabled : null]} onPress={this.tapDislike} disabled={isDisabled}>
          <Image
            style={styles.buttonImage}
            source={cross}
          />
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, (isDisabled) ? styles.disabled : null]} onPress={this.tapLike} disabled={isDisabled}>
          <Image
            style={styles.buttonImage}
            source={tick}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.selection };
};

export default connect(
  mapStateToProps
)(Controls);
