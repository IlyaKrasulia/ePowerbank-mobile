import React from 'react';
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

interface KeyboardAvoidingLayoutProps {
  children?: React.ReactNode;
  keyboardVerticalOffset?: number;
}

export const KeyboardAvoidingLayout = ({
  children,
  keyboardVerticalOffset = 0,
}: KeyboardAvoidingLayoutProps) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
