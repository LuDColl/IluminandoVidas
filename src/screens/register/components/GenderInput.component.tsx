import SelectInputComponent from './SelectInput.component';
import RegisterControlComponent from './RegisterController.component';
import GenderModel from '../models/gender.model';

export default function GenderInputComponent({
  genders,
}: {
  genders: GenderModel[];
}) {
  const getAcronym = (gender: GenderModel) => gender.acronym;
  const getName = (gender: GenderModel) => gender.name;

  return (
    <RegisterControlComponent
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
