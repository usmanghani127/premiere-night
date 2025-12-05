import { SearchBar } from '@common/components/SearchBar';
import { AppNavigatorProps } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { HeaderRow } from './styles';

export const Header = () => {
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigatorProps, 'Spotlight'>>();

  return (
    <HeaderRow>
      <SearchBar
        placeholder={t('Search.placeholder')}
        editable={false}
        onPress={() => navigation.navigate('Search')}
      />
    </HeaderRow>
  );
};
