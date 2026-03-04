import images from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => (
  <View className={`flex-row items-center justify-center px-4 py-2 rounded-full ${focused ? 'bg-[#8b5cf6]' : ''}`}>
    <Image 
      source={icon} 
      tintColor={focused ? '#FFFFFF' : '#A8b5db'} 
      className='size-5'
      resizeMode="contain"
    />
    {focused && (
      <Text className='text-white ml-2 font-bold'>
        {title}
      </Text>
    )}
  </View>
)

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarStyle: {
        backgroundColor: '#0f0D23',
        borderRadius: 50,
        height: 64,
        position: 'absolute',
        bottom: 20,
        marginHorizontal: 16,
        borderTopWidth: 0,
        overflow: 'hidden',
        elevation: 0,
      }
    }}>
      <Tabs.Screen 
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.home} title="Home" />
          )
        }} 
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.search} title="Search" />
          )
        }} 
      />
      <Tabs.Screen 
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.saved} title="Saved" />
          )
        }} 
      />
      <Tabs.Screen 
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.profile} title="Profile" />
          )
        }} 
      />
    </Tabs>
  )
}

export default _layout