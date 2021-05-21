'use strict';

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import Video from 'react-native-video';
import PictureInPicture from 'react-native-picture-in-picture';

class VideoPlayer extends Component {
  state = {
    paused: false,
  };

  componentDidMount() {
    PictureInPicture.configureAspectRatio(4, 3);
    PictureInPicture.enableAutoPipSwitch();
  }

  render() {
    const playpauseicon = this.state.paused
      ? require('./assets/pause.png')
      : require('./assets/play.png');
    return (
      <View style={styles.container}>
        <View style={styles.fullScreen}>
          <Video
            /* For ExoPlayer */
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              type: 'mp4',
            }}
            // source={require('./broadchurch.mp4')}
            style={styles.fullScreen}
            paused={this.state.paused}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({paused: !this.state.paused});
          }}
          style={styles.playPauseStyle}>
          <Image
            resizeMode={'contain'}
            source={playpauseicon}
            style={styles.backArrow}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  backArrow: {
    height: 20,
    width: 20,
  },
  playPauseStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
});

export default VideoPlayer;
