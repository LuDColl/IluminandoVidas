export function getPhoneAndMaskedPhone(
  ddd?: number,
  number?: number
): [phone: string, maskedPhone: string] {
  if (!ddd || !number) return ['', ''];

  const phone = `${ddd}${number}`;
  const numbers = `${number}`;
  const firstNumbers = numbers.substring(0, 5);
  const lastNumbers = numbers.substring(5);
  const maskedPhone = `(${ddd}) ${firstNumbers}-${lastNumbers}`;
  return [phone, maskedPhone];
}

export function getDddAndPhone(
  phoneText: string
): [ddd: number, phone: number] {
  const ddd = phoneText.substring(0, 2);
  const phone = phoneText.substring(2);
  return [+ddd, +phone];
}
