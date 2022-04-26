import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Metrics = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,

  // Card margin
  margin: 10,

  // Shadow style
  shadowOffsetWidth: 0,
  shadowOffsetHeight: 2,
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  // Border radius
  borderRadius: 20,
};

export default Metrics;
