import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Header: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Ionicons
            name="md-arrow-round-back"
            size={24} color="white"
            onPress={handleGoBack}
          />

          <Text style={styles.logo}>Blueshop</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Header;
