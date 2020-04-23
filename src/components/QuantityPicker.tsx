import React, { useState } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export function QuantityPicker() {
  const [selectedValue, setSelectedValue] = useState(1);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 32, width: 60 }}
        onValueChange={(value, index) => setSelectedValue(value)}
      >
      { PickerOptions() }
      </Picker>
    </View>
  );
}

function PickerOptions() {
  const optionsCount = 25;
  let arr = [];
  for(let i = 1; i <= optionsCount; ++i) {
    arr.push(i);
  }
  return arr.map(option => (<Picker.Item label={option.toString()} value={option} key={option}/>));
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    height: 40,
    width: 80
  }
});