import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { generateResponse } from '../utils/api';

const AIResponseScreen = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) {
      setResponse('⚠️ Please enter a prompt.');
      return;
    }

    setLoading(true);
    setResponse('');

    const aiResponse = await generateResponse(input);
    setResponse(aiResponse);

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your event details:</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe your event..."
        value={input}
        onChangeText={setInput}
      />

      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Generate AI Response</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007bff" />}

      {response !== '' && (
        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>{response}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  responseContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    width: '100%',
  },
  responseText: { fontSize: 16, fontStyle: 'italic' },
});

export default AIResponseScreen;
