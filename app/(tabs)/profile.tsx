import { useSaveContext } from '@/context/SaveContext';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const MENU_ITEMS = [
  { id: '1', title: 'Account Settings', icon: 'person-outline', color: '#AB8EFF' },
  { id: '2', title: 'Notifications', icon: 'notifications-outline', color: '#AB8EFF' },
  { id: '3', title: 'App Preferences', icon: 'settings-outline', color: '#AB8EFF' },
  { id: '4', title: 'Help & Support', icon: 'help-circle-outline', color: '#AB8EFF' },
  { id: '5', title: 'Log Out', icon: 'log-out-outline', color: '#EF4444' },
] as const;

const Profile = () => {
  const { savedMovies } = useSaveContext();

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="px-4 py-6 items-center">
          <View className="w-28 h-28 rounded-full bg-gray-900 items-center justify-center border-2 border-[#AB8EFF] shadow-lg shadow-[#AB8EFF]/20">
            <Image
              source={require('@/assets/images/app-logo.png')}
              className="w-26 h-26 rounded-full"
              resizeMode="cover"
            />
          </View>
          <Text className="text-white text-2xl font-outfit-bold mt-4">Yusuf</Text>
          <Text className="text-light-300 text-sm font-outfit-regular mt-1">yusuf@example.com</Text>

          {/* Stats */}
          <View className="flex-row justify-between w-full px-8 mt-8">
            <View className="items-center">
              <Text className="text-white text-xl font-outfit-bold">{savedMovies.length}</Text>
              <Text className="text-light-300 text-xs font-outfit-regular mt-1">Saved</Text>
            </View>
            <View className="w-px h-full bg-gray-800" />
            <View className="items-center">
              <Text className="text-white text-xl font-outfit-bold">14</Text>
              <Text className="text-light-300 text-xs font-outfit-regular mt-1">Watched</Text>
            </View>
            <View className="w-px h-full bg-gray-800" />
            <View className="items-center">
              <Text className="text-white text-xl font-outfit-bold">4.8</Text>
              <Text className="text-light-300 text-xs font-outfit-regular mt-1">Avg Rating</Text>
            </View>
          </View>
        </View>

        {/* Settings Menu */}
        <View className="px-4 mt-8">
          <Text className="text-white text-lg font-outfit-semibold mb-4 ml-2">Settings</Text>
          <View className="bg-gray-900 rounded-3xl overflow-hidden">
            {MENU_ITEMS.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                className={`flex-row items-center justify-between p-4 ${
                  index !== MENU_ITEMS.length - 1 ? 'border-b border-gray-800' : ''
                }`}
                activeOpacity={0.7}
              >
                <View className="flex-row items-center">
                  <View className="w-10 h-10 rounded-full bg-black/50 items-center justify-center mr-4">
                    <Ionicons name={item.icon} size={20} color={item.color} />
                  </View>
                  <Text className={`text-base font-outfit-regular ${item.color === '#EF4444' ? 'text-red-500' : 'text-light-200'}`}>
                    {item.title}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#4b5563" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;