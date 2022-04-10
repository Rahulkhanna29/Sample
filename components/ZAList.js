import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
   title: 'Rahul',
  },
  {
   title: 'khanna',
  },
  {
   title: 'Mohan',
  },
  {
   title: 'Shivam',
  },
  {
    title: 'Arun',
  },
  {
    title: 'Amit',
  },
  {
   title: 'Kanwal',
  },
  {
   title: 'Kiran',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        // data={DATA}
        data={DATA.sort((a, b) => b.title >a.title)}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
});

export default App;