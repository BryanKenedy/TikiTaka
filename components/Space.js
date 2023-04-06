import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { spaceStyle } from '../styles/styles'

const Space = ({ spaceID, spaceValue, setTurn }) => {
  return (
    <View style={spaceStyle.container}>
      <TouchableOpacity style={spaceStyle.space} onPress={() => setTurn(spaceID)} disabled={spaceValue ? true : ""}>
        <Text style={spaceStyle.spaceValue}>{spaceValue}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Space