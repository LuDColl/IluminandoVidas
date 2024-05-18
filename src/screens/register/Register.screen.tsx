import { ScrollView, View } from 'react-native';
import { Divider, ProgressBar } from 'react-native-paper';
import AppbarComponent from './components/Appbar.component';
import { bodyStyle } from './Register.styles';
import NumberInputComponent from './components/NumberInput.component';
import NameInputComponent from './components/NameInput.component';
import ButtonComponent from './components/Button.component';
import StartDateInputComponent from './components/StartDate.component';
import BirthDateInputComponent from './components/BirthDateInput.component';
import BirthStateComponent from './components/BirthState.component';
import { useRegister } from './Register.hooks';
import { RegisterContext } from './Register.contexts';
import BirthCityComponent from './components/BirthCityInput.component';
import { RegisterScreenPropsType } from './Register.types';
import StreetInputComponent from './components/StreetInput.component';
import HouseNumberInput from './components/HouseNumberInput.component';
import SchoolInputComponent from './components/SchoolInput.component';
import SerieInputComponent from './components/SerieInput.component';
import PeriodInputComponent from './components/PeriodInput.component';
import MomInputComponent from './components/MomInput.component';
import MomNumberInputComponent from './components/MomNumberInput.component';
import MomBusinessNumberInputComponent from './components/MomBusinessNumber.component';
import DadInputComponent from './components/DadInput.component';
import DadNumberInputComponent from './components/DadNumberInput.component';
import DadBusinessNumberInputComponent from './components/DadBusinessNumber.component';

export default function RegisterScreen({
  navigation,
  route,
}: RegisterScreenPropsType) {
  const { control, submit, safeArea, setSafeArea, useUf, setValue, loading } =
    useRegister();

  return (
    <View style={{ flex: 1 }}>
      <AppbarComponent />
      {loading && <ProgressBar indeterminate={true} />}
      <RegisterContext.Provider value={{ safeArea, useUf, setValue }}>
        <View style={bodyStyle} onLayout={setSafeArea}>
          <ScrollView
            style={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
          >
            <NumberInputComponent control={control} style={{ flex: 1 }} />
            <StartDateInputComponent control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <NameInputComponent control={control} />
            <BirthDateInputComponent control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <BirthStateComponent control={control} />
            <BirthCityComponent
              control={control}
              navigation={navigation}
              route={route}
            />
            <Divider style={{ marginBottom: 16 }} />
            <StreetInputComponent control={control} />
            <HouseNumberInput control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <SchoolInputComponent control={control} />
            <SerieInputComponent control={control} />
            <PeriodInputComponent control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <MomInputComponent control={control} />
            <MomNumberInputComponent control={control} />
            <MomBusinessNumberInputComponent control={control} />
            <Divider style={{ marginBottom: 16 }} />
            <DadInputComponent control={control} />
            <DadNumberInputComponent control={control} />
            <DadBusinessNumberInputComponent control={control} />
          </ScrollView>
          <ButtonComponent onPress={submit} style={{ margin: 16 }} />
        </View>
      </RegisterContext.Provider>
    </View>
  );
}
