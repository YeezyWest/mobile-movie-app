import images from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground } from 'react-native'


const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen options={{title: "Home", headerShown: false, tabBarIcon: ({focused, color, size}) => <>
      <ImageBackground source={images.highlights} >
        <Image source={images.home} tintColor="#151312" className='size-5'/>
      </ImageBackground>
      </>}}  name="index" />
      <Tabs.Screen options={{title: "Search", headerShown: false}} name="search" />
      <Tabs.Screen options={{title: "Saved", headerShown: false}} name="saved" />
      <Tabs.Screen options={{title: "Profile", headerShown: false}} name="profile" />
    </Tabs>
  )
}

export default _layout