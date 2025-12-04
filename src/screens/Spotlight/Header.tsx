import { SearchBar } from '@common/components/SearchBar';
import { AppNavigatorProps } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import { HeaderRow } from './styles';

export const Header = () => {
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigatorProps, 'Spotlight'>>();

  const searchBarRef = useRef<TextInput>(null);

  return (
    <HeaderRow>
      <SearchBar
        ref={searchBarRef}
        placeholder={t('Search.placeholder')}
        disabled={true}
        onPress={() => navigation.navigate('Search')}
      />
    </HeaderRow>
  );
};
