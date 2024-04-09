import { useState } from 'react';
import { List, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <Searchbar
        placeholder="Aluno"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <List.Item
        style={{ marginTop: 16 }}
        title="Lucas Guimarães de Oliveira"
        left={(props) => <List.Icon {...props} icon="account-box" />}
      />
      <List.Item
        style={{ marginTop: 16 }}
        title="Nome e Sobrenome"
        left={(props) => <List.Icon {...props} icon="account-box" />}
      />
      <List.Item
        style={{ marginTop: 16 }}
        title="Nome e Sobrenome"
        left={(props) => <List.Icon {...props} icon="account-box" />}
      />
    </SafeAreaView>
  );
}
