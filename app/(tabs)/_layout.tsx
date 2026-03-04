import images from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text } from 'react-native'


const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#030014',
        borderTopWidth: 0,
        height: 80,
        position: 'absolute',
      }
    }}>
      <Tabs.Screen options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? (
          <ImageBackground className='flex flex-row w-32 h-14 justify-center items-center rounded-full overflow-hidden' source={images.highlights} >
            <Image source={images.home} tintColor="#151312" className='size-5'/>
            <Text className='text-lg font-bold text-[#151312] ml-2'>Home</Text>
          </ImageBackground>
        ) : (
          <Image source={images.home} tintColor="#A8b5db" className='size-6'/>
        )
      }} name="index" />
      <Tabs.Screen options={{
        title: "Search",
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? (
          <ImageBackground className='flex flex-row w-32 h-14 justify-center items-center rounded-full overflow-hidden' source={images.highlights} >
            <Image source={images.search} tintColor="#151312" className='size-5'/>
            <Text className='text-lg font-bold text-[#151312] ml-2'>Search</Text>
          </ImageBackground>
        ) : (
          <Image source={images.search} tintColor="#A8b5db" className='size-6'/>
        )
      }} name="search" />
      <Tabs.Screen options={{
        title: "Saved",
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? (
          <ImageBackground className='flex flex-row w-32 h-14 justify-center items-center rounded-full overflow-hidden' source={images.highlights} >
            <Image source={images.saved} tintColor="#151312" className='size-5'/>
            <Text className='text-lg font-bold text-[#151312] ml-2'>Saved</Text>
          </ImageBackground>
        ) : (
          <Image source={images.saved} tintColor="#A8b5db" className='size-6'/>
        )
      }} name="saved" />
      <Tabs.Screen options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? (
          <ImageBackground className='flex flex-row w-32 h-14 justify-center items-center rounded-full overflow-hidden' source={images.highlights} >
            <Image source={images.profile} tintColor="#151312" className='size-5'/>
            <Text className='text-lg font-bold text-[#151312] ml-2'>Profile</Text>
          </ImageBackground>
        ) : (
          <Image source={images.profile} tintColor="#A8b5db" className='size-6'/>
        )
      }} name="profile" />
    </Tabs>
  )
}

export default _layout