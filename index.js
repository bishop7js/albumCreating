import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => {
  return (
    <View>
      <Header headerText={'pakaya'} />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('anupa', () => App);
