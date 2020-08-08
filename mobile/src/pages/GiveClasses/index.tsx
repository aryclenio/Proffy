import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import giveClassesBgImages from '../../assets/images/give-classes-background.png';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImages}
        style={styles.content}>
        <Text style={styles.title}>Want to be a Proffy?</Text>
        <Text style={styles.description}>
          At first, you need to sign up in our web platform.
          </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Understood</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;