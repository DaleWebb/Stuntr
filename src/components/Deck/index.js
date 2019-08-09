/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { connect } from 'react-redux';

import styles from './styles';
import { likeWorker, dislikeWorker } from '../../actions';
import Controls from '../Controls';

class Deck extends Component {

  constructor (props) {
    super(props);
    this.swipeLeft = this.swipeLeft.bind(this);
    this.swipeRight = this.swipeRight.bind(this);
    this.onTapLike = this.onTapLike.bind(this);
    this.onTapDislike = this.onTapDislike.bind(this);
  }

  swipeLeft() {
    this.props.dislikeWorker();
  }

  swipeRight() {
    this.props.likeWorker();
  }

  onTapDislike() {
    this.swiperComponent.swipeLeft();
  }

  onTapLike() {
    this.swiperComponent.swipeRight();
  }

  emptyDeckMessage() {
    Alert.alert('No more stunt people', 'There are no more stunt people to check out; restart the app to start again');
  }

  renderCard(worker, index) {
    const { name, image } = worker;

    return (
      <View style={styles.card}>
        <Image style={styles.photo} source={image} />
        <Text style={styles.name}>{ name }</Text>
      </View>
    )
  }

  render() {

    const { workers, cardIndex } = this.props;

    return (
        <>
          <View style={styles.container}>
            <Swiper
              ref={swiperComponent => {
                this.swiperComponent = swiperComponent;
              }}
              cards={workers}
              cardIndex={cardIndex}
              renderCard={this.renderCard}
              onSwipedLeft={this.swipeLeft}
              onSwipedRight={this.swipeRight}
              onSwipedAll={this.emptyDeckMessage}
              stackSize={3}
              stackSeparation={15}
              overlayLabels={{
                left: {
                  title: 'NOPE',
                  style: {
                    label: {
                      backgroundColor: '#e21b1b',
                      color: '#ffffff',
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: -30
                    }
                  }
                },
                right: {
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: '#1be28d',
                      color: '#ffffff',
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: 30
                    }
                  }
                }
              }}
              backgroundColor={'transparent'}
              disableTopSwipe={true}
              disableBottomSwipe={true}
              animateOverlayLabelsOpacity
              animateCardOpacity
            />
        </View>
        <Controls onTapLike={this.onTapLike} onTapDislike={this.onTapDislike} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.selection };
};

const mapDispatchToProps = dispatch => {
  return {
     likeWorker: () => dispatch(likeWorker()),
     dislikeWorker: () => dispatch(dislikeWorker())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
