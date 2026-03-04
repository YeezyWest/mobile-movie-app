import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#8b5cf6',
      tabBarInactiveTintColor: '#A8B1CF',
      tabBarStyle: {
        backgroundColor: '#0F1121',
        height: 60,
        borderTopColor: '#1E213A',
        borderTopWidth: 1,
      }
    }}>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} size={24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} size={24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
          )
        }} 
      />
    </Tabs>
  )
}

export default _layout