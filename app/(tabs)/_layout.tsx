import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#AB8EFF',
      tabBarInactiveTintColor: '#6B7280',
      tabBarShowLabel: true,
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 4,
      },
      tabBarStyle: {
        position: 'absolute',
        bottom: 24, // Lifted off the bottom edge
        left: 20, // Padding from sides
        right: 20,
        height: 64, // Slightly taller for the curve
        backgroundColor: '#0F1121', // Dark clean background
        borderRadius: 32, // Perfect pill shape
        borderTopWidth: 0, // Remove default border
        // Elegant shadow for floating effect
        shadowColor: '#AB8EFF',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 10, // For Android
        paddingBottom: 0, // Reset default iOS padding
      },
      tabBarItemStyle: {
        paddingVertical: 10, // Center content vertically
      }
    }}>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={focused ? 26 : 24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} size={focused ? 26 : 24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} size={focused ? 26 : 24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="profile"
        options={{
          title: 'You',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <View style={{
              width: 28, 
              height: 28, 
              borderRadius: 14,
              borderWidth: focused ? 2 : 0, // Highlight border when active
              borderColor: color, // Uses active/inactive tint colors
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
               <Image
                 source={require('@/assets/images/app-logo.png')}
                 style={{ width: '100%', height: '100%' }}
                 resizeMode="cover"
               />
            </View>
          )
        }} 
      />
    </Tabs>
  )
}

export default _layout