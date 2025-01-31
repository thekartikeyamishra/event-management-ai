import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const EventSuggestion = () => {
  const [details, setDetails] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const getSuggestion = async () => {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: `Suggest a creative event idea based on: ${details}`,
      max_tokens: 150,
      temperature: 0.7,
    }, {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    });

    setSuggestion(response.data.choices[0].text.trim());
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Describe your event..." onChangeText={setDetails} />
      <Button title="Generate" onPress={getSuggestion} />
      {suggestion ? <Text style={styles.result}>{suggestion}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 5 },
  result: { marginTop: 10, fontStyle: 'italic' },
});

export default EventSuggestion;
