import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, Dimensions } from 'react-native';
import { Item, ListItem } from '../components/Item';

export interface Props {
}

interface State {
}

export class DeviceMeta extends React.Component<Props, State> {
  getDeviceMeta(): ReadonlyArray<Item> {
    return [
      { title: 'Platform OS', data: Platform.OS },
      { title: 'Version', data: `${Platform.Version}` },
      { title: 'Screen Dimension', data: `${Dimensions.get('screen').width} x ${Dimensions.get('screen').height}` },
      { title: 'Window Dimension', data: `${Dimensions.get('window').width} x ${Dimensions.get('window').height}` }
    ]
  }
  
  render() {
    return (
      <View style={styles.deviceMeta}>
      <Text style={styles.metaHeader}>
        { 'Device Meta' }
      </Text>
      <FlatList
        data={this.getDeviceMeta()}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item: Item) => item.title}
      />
      </View>
    );
  }
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

