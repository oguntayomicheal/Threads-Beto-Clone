import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Platform, RefreshControl } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Lottie from 'lottie-react-native'

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null)
  return (
    <SafeAreaView>
      <ScrollView

        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 })
        }}

        refreshControl={<RefreshControl
          refreshing={false}
          onRefresh={() => { animationRef.current?.play() }}
          tintColor={'transparent'} />

        }
      >
        <Lottie
          ref={animationRef}
          source={require('../../assets/images/loader.json')}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90 }}
          onAnimationFinish={() => {
            alert('Finished')
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

