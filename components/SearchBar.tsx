import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

interface SearchBarProps {
  onPress?: () => void;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
  editable?: boolean;
}

const SearchBar = ({
  onPress,
  placeholder = 'Search for movies...',
  value,
  onChangeText,
  onClear,
  editable = true,
}: SearchBarProps) => {
  return (
    <View className="px-4 mt-6">
      <TouchableOpacity
        activeOpacity={editable ? 1 : 0.7}
        onPress={!editable ? onPress : undefined}
      >
        <View className="flex-row items-center bg-gray-900/80 border border-gray-800 rounded-2xl px-4 py-3">
          <Ionicons name="search-outline" size={20} color="#A8B1CF" />
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#A8B1CF"
            className="flex-1 ml-3 text-white font-outfit-regular text-base"
            editable={editable}
            returnKeyType="search"
            autoFocus={editable}
          />
          {value ? (
            <TouchableOpacity onPress={onClear}>
              <Ionicons name="close-circle" size={20} color="#A8B1CF" />
            </TouchableOpacity>
          ) : (
            <Ionicons name="options-outline" size={20} color="#AB8EFF" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
