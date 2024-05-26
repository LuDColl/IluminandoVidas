export function getAge(birhDate: Date): number {
  const today = new Date();
  const age = today.getFullYear() - birhDate.getFullYear();

  const monthToday = today.getMonth();
  const birthMonth = birhDate.getMonth();
  if (monthToday > birthMonth) return age - 1;

  if (monthToday == birthMonth && today.getDate() > birhDate.getDate())
    return age - 1;

  return age;
}
