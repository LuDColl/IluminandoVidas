export default interface StudentForm {
  number: string;
  startDate: string;

  name: string;
  gender: string;
  genderAcronym: string;
  birthDate: string;

  birthState: string;
  birthUf: string;
  birthCity: string;

  street: string;
  houseNumber: string;
  district: string;
  complement: string;

  school: string;
  serie: string;
  period: string;

  mom: string;
  momNumber: string;
  momMaskedNumber: string;
  momBusinessAddress: string;

  dad: string;
  dadNumber: string;
  dadMaskedNumber: string;
  dadBusinnessAddress: string;
}
