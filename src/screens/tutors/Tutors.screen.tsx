import { useEffect, useState } from 'react';
import { supabase } from 'utils/supabase';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'router';
import SearchComponent from 'components/Search.component';

export default function TutorsScreen() {
  const [tutors, setTutors] = useState<any[] | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Students'>>();

  useEffect(() => {
    getTutors();
  }, []);

  const getTutors = async () => {
    const students = await supabase.from('tutor').select('id_tutor, str_nome');
    setTutors(students.data ?? []);
  };

  return (
    <SearchComponent
      items={tutors}
      getKey={({ id_tutor }) => id_tutor}
      getText={({ str_nome }) => str_nome}
      noData="Nenhum tutor encontrado"
      onPress={({ id_tutor }) => navigation.push('Tutor', { id: id_tutor })}
      onRefresh={getTutors}
      placeholder="Digite o nome do tutor"
      icon="account-circle"
    />
  );
}
