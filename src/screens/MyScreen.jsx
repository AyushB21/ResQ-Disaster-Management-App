import React from 'react';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Input from '../components/Input';
import TextComponent from '../components/Text';
import Header from '../components/Header';
import HeaderLayout from "../layouts/HeaderLayout"
import tailwind from 'tailwind-rn';

const MyScreen = () => {
  return (
    <HeaderLayout>
        <StatusBar>
            <Header/>
        </StatusBar>
        <ScrollView>
            <View>
                <Header/>
                <Header/>
                <Header/>
                <Header/>
                <Header/>
                <Header/>
                <Header/>
                <Header/>
                <Header/>
                <Header/>
                <TextComponent>Welcome to My App</TextComponent>
                <Input placeholder="Enter your text" />
                <PrimaryButton title="Primary Button" onPress={() => console.log('Primary button pressed')} />
                <SecondaryButton title="Secondary Button" onPress={() => console.log('Secondary button pressed')} />
            </View>
        </ScrollView>
    </HeaderLayout>
  );
};

// const styles = StyleSheet.create({
//     fixed:{
        
//     }
// })

export default MyScreen;
