import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const BudgetCalculator = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [total, setTotal] = useState(0);

  const addItem = () => {
    if (name.trim() === '' || cost.trim() === '') return;

    const newItem = { id: Date.now().toString(), name, cost: parseFloat(cost) };
    const updatedItems = [...items, newItem];

    setItems(updatedItems);
    setTotal(updatedItems.reduce((sum, item) => sum + item.cost, 0));
    setName('');
    setCost('');
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    setTotal(updatedItems.reduce((sum, item) => sum + item.cost, 0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💰 Budget Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Item Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Cost"
        keyboardType="numeric"
        value={cost}
        onChangeText={setCost}
      />

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name} - ₹{item.cost.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={styles.total}>Total Budget: ₹{total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 12, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 },
  deleteText: { color: 'red', fontWeight: 'bold' },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
});

export default BudgetCalculator;
