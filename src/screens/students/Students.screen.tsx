import { useEffect, useState } from 'react';
import { supabase } from 'utils/supabase';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import SearchComponent from 'components/Search.component';
import SnackbarContextComponet from 'components/SnackbarContext.component';

export default function StudentsScreen() {
  const [students, setStudents] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Students'>>();

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const { data, error } = await supabase
      .from('aluno')
      .select('id_aluno, str_nomealuno');

    setStudents(data ?? []);
    if (error) setError('Erro ao carregar alunos');
  };

  return (
    <SnackbarContextComponet setMessage={setError} message={error}>
      <SearchComponent
        items={students}
        getKey={({ id_aluno }) => id_aluno}
        getText={({ str_nomealuno }) => str_nomealuno}
        noData="Nenhum aluno encontrado"
        onPress={({ id_aluno }) => navigation.push('Student', { id: id_aluno })}
        onRefresh={getStudents}
        placeholder="Digite o nome do aluno"
        icon="account-circle"
      />
    </SnackbarContextComponet>
  );
}
