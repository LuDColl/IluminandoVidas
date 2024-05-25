// ListAlunos.screen.tsx
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { container, text, input, viewButton, button, textButton, viewList, textProntuario, viewProntuario } from './List.styles';
import { RootStackParamList } from '../../components/TabBar.component';
import { supabase } from 'utils/supabase';

export default function ListaAlunos() {
  const setData = async () => {
    const alunos = await supabase.from('aluno').select("id_aluno, str_nomealuno");
    console.log(alunos.data);
    if (alunos.data == null) return;

    console.log(alunos.data)
    setList(alunos.data as any[]);
  };

  useEffect(() => {
    setData();
  }, []);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [userSelecionado, setUserSelecionado] = useState('');
  const [list, setList] = useState<any[]>([]);

  const [listaCompleta] = useState([...list]);

  const handleSearch = (text: React.SetStateAction<string>) => {
    setUserSelecionado(text);
  };

  const onPressSearch = () => {
    const filteredData = listaCompleta.filter(item =>
      item.nome.toLowerCase().includes(userSelecionado.toLowerCase())
    );
    setList(filteredData);
  };

  const resetSearch = () => {
    setUserSelecionado('');
    setList(listaCompleta);
  };

  const handleDelete = (id: string) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const handleNavigateToProntuario = (aluno: any) => {
    navigation.navigate('Prontuario', { aluno });
  };

  return (
    <SafeAreaView style={container}>
      <Text style={text}>Pesquise o nome do aluno.</Text>
      <TextInput
        style={input}
        onChangeText={handleSearch}
        value={userSelecionado}
        onSubmitEditing={onPressSearch}
        placeholder='Digite o nome do aluno.'
      />
      <View style={viewButton}>
        <TouchableOpacity style={button} onPress={onPressSearch}>
          <Text style={textButton}>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button} onPress={resetSearch}>
          <Text style={textButton}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <Text style={text}>Alunos: </Text>
      <FlatList
        style={viewProntuario}
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item['id_aluno']}
        renderItem={({ item }) => (
          <View style={viewList}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => handleNavigateToProntuario(item)}>
              <Text style={textProntuario}> {item['str_nomealuno']}</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </SafeAreaView>
  );
}
