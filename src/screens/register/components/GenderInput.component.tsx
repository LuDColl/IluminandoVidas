import SelectInputComponent from './SelectInput.component';
import ControlComponent from './Control.component';

interface Gender {
  name: string;
  acronym: string;
}

const genders: Gender[] = [
  { name: 'Masculino', acronym: 'M' },
  { name: 'Feminino', acronym: 'F' },
];

export default function GenderInputComponent() {
  const getAcronym = (gender: Gender) => gender.acronym;
  const getName = (gender: Gender) => gender.name;

  return (
    <ControlComponent
      name="genderAcronym"
      render={({ onChange }) => (
        <SelectInputComponent
          name="gender"
          rules={{ required: 'Gênero obrigatório' }}
          items={genders}
          getKey={getAcronym}
          getText={getName}
          label="Gênero"
          onChange={(item) => onChange(item.acronym)}
        />
      )}
    />
  );
}
