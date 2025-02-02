import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [text, setText] = useState('');

  const addReminder = async () => {
    if (!text.trim()) return;
    const reminder = { id: Date.now().toString(), text };

    await Notifications.scheduleNotificationAsync({
      content: { title: '📅 Event Reminder', body: text },
      trigger: { seconds: 10 },
    });

    setReminders([...reminders, reminder]);
    setText('');
  };

  const removeReminder = (id) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⏰ Set Event Reminders</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Reminder"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.button} onPress={addReminder}>
        <Text style={styles.buttonText}>Set Reminder</Text>
      </TouchableOpacity>

      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => removeReminder(item.id)}>
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Reminder;
