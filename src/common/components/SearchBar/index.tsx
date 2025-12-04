import { forwardRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInputProps } from 'react-native-paper';
import { StyledSearchBar } from './styles';

export type SearchBarProps = Omit<TextInputProps, 'mode'>;

export const SearchBar = forwardRef<RNTextInput, SearchBarProps>(
  (props, ref) => {
    return <StyledSearchBar ref={ref} {...(props as any)} />;
  },
);
