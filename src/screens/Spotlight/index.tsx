import { useTranslation } from 'react-i18next';
import { Header } from './Header';
import { Body, Container, Label } from './styles';

export const Spotlight = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header />
      <Body>
        <Label>{t('Spotlight.label')}</Label>
      </Body>
    </Container>
  );
};
