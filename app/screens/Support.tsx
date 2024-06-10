import React from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {BackButton} from '../components/Base/BackButton';
import {ButtonWrapper} from '../components/Button/ButtonWrapper';
import {Typography} from '../components/Base/Typography';
import {Colors} from '../utils/styles';
import {SView} from '../components/Base/SView';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum, SupportSectionType} from '../utils/types';

interface IProps {
  title: string;
  data: SupportSectionType;
}

const DATA = {
  regulations: {
    title: 'Правила користування',
    sections: [
      {
        title: '1. Реєстрація та верифікація:',
        info: [
          'Для оренди повербанків необхідно зареєструватися в додатку та пройти верифікацію.',
          'Переконайтеся, що введені вами дані є актуальними та коректними.',
        ],
      },
      {
        title: '2. Оренда повербанку:',
        info: [
          'Оберіть найближчу станцію та перевірте наявність доступних повербанків.',
          'Використовуйте QR-код для розблокування повербанку.',
        ],
      },
      {
        title: '3. Тарифні плани:',
        info: [
          'Перша година оренди: X грн.',
          'Наступні години: Y грн/год.',
          'Максимальна добова вартість: Z грн.',
          'Орендна плата буде автоматично зніматися з вашої обраної платіжної методи.',
        ],
      },
      {
        title: '4. Використання повербанків:',
        info: [
          'Підключіть свій пристрій до повербанку за допомогою відповідного кабелю (USB-C, Micro-USB, Lightning).',
          'Стежте за рівнем заряду як вашого пристрою, так і повербанку.',
        ],
      },
      {
        title: '5. Повернення повербанку:',
        info: [
          'Поверніть повербанк до будь-якої зручної станції.',
          'Переконайтеся, що повербанк зафіксований у станції та процес повернення підтверджений у додатку.',
        ],
      },
      {
        title: '6. Втрата або пошкодження:',
        info: [
          'У разі втрати або пошкодження повербанку негайно повідомте службу підтримки.',
          'Може бути застосовано штраф згідно з умовами використання.',
        ],
      },
    ],
  },
  safety: {
    title: 'Безпека',
    sections: [
      {
        title: 'Зарядка та використання:',
        info: [
          'Не використовуйте повербанки, якщо вони мають видимі пошкодження.',
          'Не залишайте повербанки під прямим сонячним промінням або у вологих місцях.',
        ],
      },
      {
        title: 'Персональні дані:',
        info: [
          'Ваші особисті дані захищені відповідно до нашої політики конфіденційності.',
          'Додаток використовує захищені протоколи для обробки платежів.',
        ],
      },
    ],
  },
  faq: {
    title: 'Часті питання (FAQ)',
    sections: [
      {
        title: 'Як я можу орендувати повербанк?',
        info: [
          'Завантажте додаток, зареєструйтеся, знайдіть найближчу станцію та скористайтеся QR-кодом для оренди.',
        ],
      },
      {
        title: 'Скільки це коштує?',
        info: [
          'Ознайомтеся з тарифними планами на сторінці оренди. Перша година оренди коштує X грн, наступні години – Y грн/год.',
        ],
      },
      {
        title: 'Що робити, якщо повербанк не заряджає мій пристрій?',
        info: [
          "Перевірте правильність підключення кабелю та стан роз'ємів. Якщо проблема не зникає, зверніться до служби підтримки.",
        ],
      },
      {
        title: 'Як я можу повернути повербанк?',
        info: [
          'Поверніть повербанк до будь-якої станції та переконайтеся, що він зафіксований. Підтвердження повернення буде відображене в додатку.',
        ],
      },
    ],
  },
  support: {
    title: 'Служба підтримки',
    sections: [
      {
        title: 'Контактна інформація:',
        info: [
          'Електронна пошта: support@powerbankrentals.com',
          'Телефон: +38 (012) 345-67-89',
        ],
      },
      {
        title: 'Час роботи:',
        info: [
          "Понеділок - П'ятниця: 09:00 - 18:00",
          'Субота - Неділя: 10:00 - 16:00',
        ],
      },
      {
        title: 'Онлайн підтримка:',
        info: ['Чат підтримки доступний в додатку 24/7.'],
      },
    ],
  },
};

const SupportItem = ({title, data}: IProps) => {
  const {navigate} = useNavigation();

  return (
    <ButtonWrapper onPress={() => navigate(ScreenEnum.SupportSection, {data})}>
      <View style={styles.linkWrapper}>
        <Typography variant="p3SemiBold">{title}</Typography>
      </View>
    </ButtonWrapper>
  );
};

export const Support = () => {
  return (
    <AppLayout>
      <View style={styles.wrapper}>
        <BackButton />
        <SView marginTop={100}>
          <Typography variant="h3" textAlign="center" marginTop={20}>
            Корисна інформація
          </Typography>
          <SView marginTop={20}>
            <SupportItem
              title={DATA.regulations.title}
              data={DATA.regulations}
            />
            <SupportItem title={DATA.safety.title} data={DATA.safety} />
            <SupportItem title={DATA.faq.title} data={DATA.faq} />
            <SupportItem title={DATA.support.title} data={DATA.support} />
          </SView>
        </SView>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  linkWrapper: {
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    padding: 13,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});
