export default interface UserRegisterForm {
  name: string;
  maskedPhone: string;
  phone: string;
  address: string;

  user: string;
  password: string;
  confirmPassword: string;

  admin: boolean;
}
