import { RootState, useAppDispatch, useAppSelector } from '@services/redux';
import { useCallback } from 'react';

export const useStore = <T,>(selector?: (state: RootState) => T) => {
  const dispatch = useAppDispatch();
  const defaultSelector = useCallback(() => undefined as unknown as T, []);

  const data = useAppSelector(selector ?? defaultSelector);

  return { data, dispatch };
};
