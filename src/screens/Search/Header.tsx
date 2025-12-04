import { SearchBar } from '@common/components/SearchBar';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@theme/colors';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, useColorScheme } from 'react-native';
import { BackButton, CancelButton, CancelText, HeaderRow } from './styles';

export const Header = () => {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const searchString = useRef('');
  const searchBarRef = useRef<TextInput>(null);

  const setSearchString = (text: string) => {
    if (text.length < 20) {
      searchString.current = text;
    }
  };

  const handleClear = () => {
    searchBarRef.current?.clear();
    searchString.current = '';
  };

  return (
    <HeaderRow>
      <BackButton onPress={navigation.goBack}>
        <MaterialDesignIcons
          name="arrow-left"
          size={24}
          color={isDarkMode ? Colors.white : Colors.black}
        />
      </BackButton>
      <SearchBar
        ref={searchBarRef}
        placeholder={t('Search.placeholder')}
        onChangeText={setSearchString}
        autoFocus
      />
      <CancelButton onPress={handleClear}>
        <CancelText>{t('Search.clear')}</CancelText>
      </CancelButton>
    </HeaderRow>
  );
};
