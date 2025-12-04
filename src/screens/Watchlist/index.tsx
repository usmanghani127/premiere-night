import { useTranslation } from 'react-i18next';
import { Body, Container, Label } from './styles';

export const Watchlist = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Body>
        <Label>{t('Watchlist.label')}</Label>
      </Body>
    </Container>
  );
};
