import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef } from 'react';
import { Linking } from 'react-native';

export const useDeepLinks = () => {
  const navigation = useNavigation<any>();
  const isFirstMount = useRef(true);

  const handleDeepLink = useCallback(
    (url: string) => {
      try {
        const match = url.match(/mytheresa:\/\/movie\/(\d+)/);

        if (match && match[1]) {
          const movieId = parseInt(match[1], 10);
          navigation.navigate('MovieDetail', { movieId });
        }
      } catch (error) {
        console.error('Error handling deep link:', error);
      }
    },
    [navigation],
  );

  useEffect(() => {
    const handleInitialURL = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();
        if (initialUrl) {
          handleDeepLink(initialUrl);
        }
      } catch (error) {
        console.error('Error getting initial URL:', error);
      }
    };

    if (isFirstMount.current) {
      handleInitialURL();
      isFirstMount.current = false;
    }

    const subscription = Linking.addEventListener('url', ({ url }) => {
      handleDeepLink(url);
    });

    return () => {
      subscription.remove();
    };
  }, [handleDeepLink]);
};
