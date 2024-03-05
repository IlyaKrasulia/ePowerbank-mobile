// for TS 'react-native-svg'
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// for TS 'crypto-js'
declare module 'crypto-js/sha256';
declare module 'react-native-crypto-js';

declare module 'yup';
