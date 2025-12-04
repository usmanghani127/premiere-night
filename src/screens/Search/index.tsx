import { useTranslation } from 'react-i18next';
import { Header } from './Header';
import { Body, Container, Label } from './styles';

export const Search = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header />
      <Body>
        <Label>{t('Search.label')}</Label>
      </Body>
    </Container>
  );
};
