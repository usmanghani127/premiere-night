import { Colors } from '@theme/colors';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export const LoadingIndicator = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={Colors.primary} />
    </Container>
  );
};
