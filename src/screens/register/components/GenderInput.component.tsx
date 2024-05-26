import SelectInputComponent from './SelectInput.component';
import ControlComponent from './Control.component';
import GenderModel from '../models/gender.model';

export default function GenderInputComponent({
  genders,
}: {
  genders: GenderModel[];
}) {
  const getAcronym = (gender: GenderModel) => gender.acronym;
  const getName = (gender: GenderModel) => gender.name;

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
