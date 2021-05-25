'use strict';

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';
import PIP from 'react-native-picture-in-picture';

class VideoPlayer extends Component {
  state = {
    paused: false,
  };

  componentDidMount() {
    PIP.configureAspectRatio(4, 3);
    PIP.enableAutoPipSwitch();
    PIP.updatePlayerState(this.state.paused)
    console.log("Value of paused inside componentDidMount = ",this.state.paused);
    PIP.addEventListener('pipActivityState', state => {
    
        this.setState({
          paused : !state.state
        })

        console.log("This is inside listener",this.state.paused)
        PIP.updatePlayerState(this.state.paused);
    
      
      
    });
  }
  render() {
    console.log("Inside render",this.state.paused);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => { 
            // this.setState({paused: !this.state.paused});
            // console.log("Value of paused being sent into updatePlayerState = ",!this.state.paused);
            // PIP.updatePlayerState(!this.state.paused)

            //PIP.isInPictureInPictureMode();
          }}>
          <Video
            /* For ExoPlayer */
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              type: 'mp4',
            }}
            paused={this.state.paused}
            playInBackground={true}
            // controls={true}
            // source={require('./broadchurch.mp4')}
            style={styles.fullScreen}
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
});

export default VideoPlayer;
