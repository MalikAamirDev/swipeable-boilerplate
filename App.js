import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  let messageList = [
    {
      id: 1,
      sender: 'John',
      message: 'Hello!',
      timestamp: '2023-05-30 10:05:23',
    },
    {
      id: 2,
      sender: 'Sarah',
      message: 'Hey there!',
      timestamp: '2023-05-30 10:07:45',
    },
    {
      id: 3,
      sender: 'Simon',
      message: 'How are you?',
      timestamp: '2023-05-30 10:10:12',
    },
    {
      id: 4,
      sender: 'Gemmy',
      message: "I'm good, thanks!",
      timestamp: '2023-05-30 10:12:34',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <Pressable style={styles.cardBox}>
        <Ionicons
          name="person-circle"
          size={45}
          color={'lightgrey'}
          style={{paddingRight: 10}}
        />
        <View>
          <Text style={styles.sender}>{item.sender}</Text>
          <Text style={styles.lastMessage}>{item.message}</Text>
        </View>
      </Pressable>
    );
  };

  const keyExtractor = item => item.id;

  const ItemSeparatorComponent = () => (
    <View style={{height: 1, backgroundColor: 'lightgrey'}} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={messageList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    padding: 20,
    fontWeight: 'bold',
    color: '#323232',
  },
  cardBox: {
    height: 100,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sender: {
    fontSize: 22,
    fontWeight: '600',
    color: '#232323',
  },
  lastMessage: {
    fontSize: 16,
    paddingTop: 5,
  },
});
