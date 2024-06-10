import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export type StackParamList = {
  FunnelStep1: undefined;
  FunnelStep2: undefined;
  FunnelStep3: undefined;
  FunnelStep4: undefined;
  CreateProfile: undefined;
  SmsVerefication: {phone: string};
  AddAdditionalInfo: undefined;
  ChooseCity: {userData: any};
  Home: undefined;
  Balance: undefined;
  PaymentCards: undefined;
  Promocode: undefined;
  Profile: undefined;
  ChooseLanguage: undefined;
  CreateStation: undefined;
  ScanQr: undefined;
  UsageManual: {deviceId: number | undefined; stationId: string};
  SupportStack: undefined;
  Support: undefined;
  SupportSection: {
    data: SupportSectionType;
  };
  LiqpayCheckout: undefined;
  History: undefined;
  ProfileStack: undefined;
  PaymentStack: undefined;
};

export enum ScreenEnum {
  FunnelStep1 = 'FunnelStep1',
  FunnelStep2 = 'FunnelStep2',
  FunnelStep3 = 'FunnelStep3',
  FunnelStep4 = 'FunnelStep4',
  CreateProfile = 'CreateProfile',
  SmsVerefication = 'SmsVerefication',
  AddAdditionalInfo = 'AddAdditionalInfo',
  ChooseCity = 'ChooseCity',
  Home = 'Home',
  Balance = 'Balance',
  PaymentCards = 'PaymentCards',
  Promocode = 'Promocode',
  Profile = 'Profile',
  ChooseLanguage = 'ChooseLanguage',
  CreateStation = 'CreateStation',
  ScanQr = 'ScanQr',
  UsageManual = 'UsageManual',
  SupportStack = 'SupportStack',
  Support = 'Support',
  SupportSection = 'SupportSection',
  LiqpayCheckout = 'LiqpayCheckout',
  History = 'History',
  ProfileStack = 'ProfileStack',
  PaymentStack = 'PaymentStack',
}

export type cityType = {
  value: string;
  label: string;
  support: boolean;
  occupied: boolean;
};

export type historyType = {
  amount: number;
  date: string;
  time: {
    hours: number;
    minutes: number;
    seconds: number;
    string: string;
  };
};

export type userType = {
  name: string;
  lastName: string;
  email: string;
  emailVerificated: boolean;
  city: string;
  birthday: string;
  uid: string;
  balance: number;
  activRent: null | {
    capacity: number;
    charge: number;
    id: number;
    status: string;
    timestamp: FirebaseFirestoreTypes.Timestamp;
    stationDocId: string;
  };
  history: null | historyType[];
};

export interface StationType {
  address: string;
  availability: boolean;
  charge: number;
  city: string;
  coordinate: {latitude: number; longitude: number};
  docId: string;
  devices: PowerbankType[];
  place: string;
  price24h: string;
  price30m: string;
}

export interface PowerbankType {
  capacity: number;
  charge: number;
  id: number;
  status: 'free' | 'busy' | 'isServed';
}

export interface Coordinate {
  latitude: string;
  longitude: string;
}

export interface PowerbankStation {
  address: string;
  availability: boolean;
  availablePowerbanks: number;
  city: string;
  coordinate: Coordinate;
  devices: PowerbankType[];
  place: string;
  price24h: string;
  price30m: string;
  totalPowerbanks: number;
}

export type SupportSectionType = {
  title: string;
  sections: {
    title: string;
    info: string[];
  }[];
};
