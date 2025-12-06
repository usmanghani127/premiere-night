import { SearchBar } from '@common/components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import {
  BackButton,
  BackIcon,
  CancelButton,
  CancelText,
  HeaderRow,
} from './styles';

export const Header = ({ onSearch }: { onSearch: (text: string) => void }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const searchString = useRef('');
  const searchBarRef = useRef<TextInput>(null);

  const setSearchString = (text: string) => {
    searchString.current = text;
    onSearch(text);
  };

  const handleClear = () => {
    searchBarRef.current?.clear();
    searchString.current = '';
    onSearch('');
  };

  return (
    <HeaderRow>
      <BackButton onPress={navigation.goBack}>
        <BackIcon name="arrow-left" />
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
