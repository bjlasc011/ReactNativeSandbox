import { View, Text, StyleSheet } from "react-native";
import { pallete } from "../constants/Style";
import React from "react";

export interface Item {
  title: string,
  data: string
}

export interface Props { 
  item: Item
}

interface State {
}

export class ListItem extends React.Component<Props, State>  {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>
          {this.props.item.title}
        </Text>
        <Text style={styles.data}>
          {this.props.item.data}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: pallete.lightGray
  },
  item: {
    flex: 1,
    padding: 8
  },
  data: {
    borderLeftColor: pallete.lightGray,
    borderLeftWidth: 1
  }
});