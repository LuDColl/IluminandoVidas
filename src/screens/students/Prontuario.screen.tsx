import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../components/TabBar.component';

type ProntuarioScreenRouteProp = RouteProp<RootStackParamList, 'Prontuario'>;

interface FormData {
  id: string;
  inicio: string;
  nome: string;
  nascimento: string;
  naturalidade: string;
  idade: string;
  sexo: string;
  endereco: string;
  bairro: string;
  escola: string;
  serie: string;
  periodo: string;
  mae: string;
  telmae: string;
  endcomercialmae: string;
  pai: string;
  telpai: string;
  endcomercialpai: string;
}

export default function Prontuario() {
  const route = useRoute<ProntuarioScreenRouteProp>();
  const { aluno } = route.params as { aluno: FormData };

  const [formData, setFormData] = useState<FormData>({
    id: '',
    inicio: '',
    nome: '',
    nascimento: '',
    naturalidade: '',
    idade: '',
    sexo: '',
    endereco: '',
    bairro: '',
    escola: '',
    serie: '',
    periodo: '',
    mae: '',
    telmae: '',
    endcomercialmae: '',
    pai: '',
    telpai: '',
    endcomercialpai: ''
  });

  useEffect(() => {
    if (aluno) {
      const stringifiedAluno: FormData = Object.keys(aluno).reduce((acc, key) => {
        acc[key as keyof FormData] = String(aluno[key as keyof FormData]);
        return acc;
      }, {} as FormData);
      setFormData(stringifiedAluno);
    }
  }, [aluno]);

  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>ID:</Text>
      <TextInput style={styles.textInput}
        placeholder="ID"
        value={formData.id}
        onChangeText={(value) => handleInputChange('id', value)}
      />
      <Text style={styles.text}>Data de inicio:</Text>
      <TextInput style={styles.textInput}      
        placeholder="Inicio"
        value={formData.inicio}
        onChangeText={(value) => handleInputChange('inicio', value)}
      />
      <Text style={styles.text}>Nome:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Nome"
        value={formData.nome}
        onChangeText={(value) => handleInputChange('nome', value)}
      />
      <Text style={styles.text}>Data de nascimento:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Nascimento"
        value={formData.nascimento}
        onChangeText={(value) => handleInputChange('nascimento', value)}
      />
      <Text style={styles.text}>Naturalidade:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Naturalidade"
        value={formData.naturalidade}
        onChangeText={(value) => handleInputChange('naturalidade', value)}
      />
      <Text style={styles.text}>Idade:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Idade"
        value={formData.idade}
        onChangeText={(value) => handleInputChange('idade', value)}
      />
      <Text style={styles.text}>Sexo:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Sexo"
        value={formData.sexo}
        onChangeText={(value) => handleInputChange('sexo', value)}
      />
      <Text style={styles.text}>Endereço:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Endereço"
        value={formData.endereco}
        onChangeText={(value) => handleInputChange('endereco', value)}
      />
      <Text style={styles.text}>Bairro:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Bairro"
        value={formData.bairro}
        onChangeText={(value) => handleInputChange('bairro', value)}
      />
      <Text style={styles.text}>Escola:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Escola"
        value={formData.escola}
        onChangeText={(value) => handleInputChange('escola', value)}
      />
      <Text style={styles.text}>Série:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Série"
        value={formData.serie}
        onChangeText={(value) => handleInputChange('serie', value)}
      />
      <Text style={styles.text}>Período:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Período"
        value={formData.periodo}
        onChangeText={(value) => handleInputChange('periodo', value)}
      />
      <Text style={styles.text}>Nome Mãe:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Mãe"
        value={formData.mae}
        onChangeText={(value) => handleInputChange('mae', value)}
      />
      <Text style={styles.text}>Telefone Mãe:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Telefone da Mãe"
        value={formData.telmae}
        onChangeText={(value) => handleInputChange('telmae', value)}
      />
      <Text style={styles.text}>Endereço comercial da Mãe:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Endereço Comercial da Mãe"
        value={formData.endcomercialmae}
        onChangeText={(value) => handleInputChange('endcomercialmae', value)}
      />
      <Text style={styles.text}>Nome Pai:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Pai"
        value={formData.pai}
        onChangeText={(value) => handleInputChange('pai', value)}
      />
      <Text style={styles.text}>Telefone Pai:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Telefone do Pai"
        value={formData.telpai}
        onChangeText={(value) => handleInputChange('telpai', value)}
      />
      <Text style={styles.text}>Endereço comercial do Pai:</Text>
      <TextInput style={styles.textInput}           
        placeholder="Endereço Comercial do Pai"
        value={formData.endcomercialpai}
        onChangeText={(value) => handleInputChange('endcomercialpai', value)}
      />
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    
  },
  textInput: {
    fontSize: 15,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    fontWeight: 'bold',
    padding: 2
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,  
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#FF4321',
    padding: 10,
    margin: 2,
    width: 150,  
    borderRadius: 10,
  },
  textButton: {
    color: '#121212',
    fontStyle:'italic',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }

});
