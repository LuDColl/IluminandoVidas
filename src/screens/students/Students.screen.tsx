import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { ActivityIndicator, Button, Searchbar } from 'react-native-paper';
import { supabase } from 'utils/supabase';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentsScreen() {
  const [query, setQuery] = useState('');
  const [students, setStudents] = useState<any[] | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const students = await supabase
      .from('aluno')
      .select('id_aluno, str_nomealuno');

    setStudents(students.data ?? []);
  };

  const refresh = async () => {
    setRefreshing(true);
    await getStudents();
    setRefreshing(false);
  };

  const filtredStudents = students?.filter((student) => {
    const name: string = student.str_nomealuno;
    const lowerName = name.toLowerCase();
    const lowerQuery = query.toLowerCase();
    return lowerName.includes(lowerQuery);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Digite o nome do aluno"
        onChangeText={setQuery}
        value={query}
        onClearIconPress={() => setQuery('')}
      />

      <View style={styles.gap} />
      {filtredStudents ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refresh} />
          }
          data={filtredStudents}
          ListEmptyComponent={<Text>Nenhum aluno encontrado</Text>}
          keyExtractor={(student) => student.id_aluno}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <Button icon="account-circle" mode="outlined" style={styles.button}>
              {item.item.str_nomealuno}
            </Button>
          )}
          ItemSeparatorComponent={() => <View style={styles.gap} />}
        />
      ) : (
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.loading}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  gap: { height: 16 },
  button: { height: 48, justifyContent: 'center', alignItems: 'flex-start' },
  loading: { flex: 1 },
});
