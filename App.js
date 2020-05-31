import React from 'react'
import { View } from 'react-native'
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(200, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 140,
    height: 300,
    backgroundColor: 'rgba(200, 200, 200, 0.6)',
    borderRadius: 26
  }
}

function ReanimatedExample() {
  const s = useSharedValue(1);

  const tapGestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      console.log('ON_GESTURE_EVENT onStart!')
      // s.value = withSpring(Math.random(6, 9));
    },
    onActive: (event, ctx) => {
      console.log('ON_GESTURE_EVENT onActive!')
    },
    onEnd: (event, ctx) => {
      console.log('ON_GESTURE_EVENT onEnd!')
      // s.value = withSpring(1);
    },
    onFail: (event, ctx) => {
      console.log('ON_GESTURE_EVENT onFail!')
      // s.value = withSpring(1);
    },
    onCancel: (event, ctx) => {
      console.log('ON_GESTURE_EVENT onCancel!')
    },
    onFinish: (event, ctx) => {
      console.log('ON_GESTURE_EVENT onFinish!')
    },
  });

  const onHandlerStateChange = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      console.log('ON_HANDLER_STATE_CHANGE onStart!')
    },
    onActive: (event, ctx) => {
      console.log('ON_HANDLER_STATE_CHANGE onActive!')
    },
    onEnd: (event, ctx) => {
      console.log('ON_HANDLER_STATE_CHANGE onEnd!')
      // s.value = withSpring(1);
    },
    onFail: (event, ctx) => {
      console.log('ON_HANDLER_STATE_CHANGE onFail!')
      // s.value = withSpring(1);
    },
    onCancel: (event, ctx) => {
      console.log('ON_HANDLER_STATE_CHANGE onCancel!')
    },
    onFinish: (event, ctx) => {
      console.log('ON_HANDLER_STATE_CHANGE onFinish!')
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: s.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <TapGestureHandler
        // onGestureEvent={tapGestureHandler}
        onHandlerStateChange={onHandlerStateChange}
        onGestureEvent={tapGestureHandler}
      >
        <Animated.View style={[
          styles.box,
          animatedStyle
        ]} />
      </TapGestureHandler>
    </View>
  );
}

export default ReanimatedExample