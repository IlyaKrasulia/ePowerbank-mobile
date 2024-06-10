import * as Yup from 'yup';

export const profileValidation = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я обов'язкове")
    .min(2, "Ім'я має містити щонайменше 2 символи"),
  email: Yup.string()
    .email('Неправильний формат email')
    .required("Email обов'язковий"),
  phone: Yup.string()
    .matches(/^\d+$/, 'Телефон має містити тільки цифри')
    .min(10, 'Телефон має містити щонайменше 10 цифр')
    .required("Телефон обов'язковий"),
});
