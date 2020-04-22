import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, Dimensions } from 'react-native';
import { Item, ListItem } from '../components/Item';

function getDeviceMeta(): ReadonlyArray<Item> {
  const screen = Dimensions.get('screen');
  const window = Dimensions.get('window');
  return [
    { title: 'Platform OS', data: Platform.OS },
    { title: 'Version', data: `${Platform.Version}` },
    { title: 'Screen Dimension', data: `${screen.width} x ${screen.height}` },
    { title: 'Window Dimension', data: `${window.width} x ${window.height}` }
  ]
}

export default function DeviceMeta() {
  return (
    <View style={styles.deviceMeta}>
      <Text style={styles.metaHeader}>
        {'Device Meta'}
      </Text>
      <FlatList
        data={getDeviceMeta()}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item: Item) => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  deviceMeta: {
    height: 300
  },
  metaHeader: {
    fontWeight: 'bold',
    padding: 8
  }
});

