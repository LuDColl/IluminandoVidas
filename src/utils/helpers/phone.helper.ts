export function getPhoneAndMaskedPhone(
  ddd?: number,
  number?: number
): [phone: string, maskedPhone: string] {
  if (!ddd || !number) return ['', ''];

  const phone = `${ddd}${number}`;
  const phoneNumbers = `${phone}`;
  const firstPhoneNumbers = phoneNumbers.substring(0, 5);
  const lastPhoneNumbers = phoneNumbers.substring(5);
  const maskedPhone = `(${ddd}) ${firstPhoneNumbers}-${lastPhoneNumbers}`;
  return [phone, maskedPhone];
}

export function getDddAndPhone(
  phoneText: string
): [ddd: number, phone: number] {
  const ddd = phoneText.substring(0, 2);
  const phone = phoneText.substring(2);
  return [+ddd, +phone];
}
