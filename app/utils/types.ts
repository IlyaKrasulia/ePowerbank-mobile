export type StackParamList = {
  FunnelStep1: undefined;
  FunnelStep2: undefined;
  FunnelStep3: undefined;
  FunnelStep4: undefined;
  CreateProfile: undefined;
  SmsVerefication: {phone: string};
  AddAdditionalInfo: undefined;
  ChooseCity: undefined;
  Home: undefined;
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
}

export type cityType = {
  value: string;
  label: string;
  support: boolean;
  occupied: boolean;
};
