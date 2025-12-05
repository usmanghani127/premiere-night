import React from 'react';
import { IconButton } from 'react-native-paper';
import { ButtonContainer } from './styles';

type ScrollToTopButtonProps = {
  onPress: () => void;
  visible: boolean;
  horizontal: boolean;
};

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  onPress,
  visible,
  horizontal = false,
}) => {
  if (!visible) return null;

  return (
    <ButtonContainer>
      <IconButton
        icon={horizontal ? 'arrow-left' : 'arrow-up'}
        iconColor="white"
        size={24}
        onPress={onPress}
      />
    </ButtonContainer>
  );
};
