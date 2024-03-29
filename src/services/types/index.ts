import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TApplicationActions } from '../../utils/types/types';
import { store } from '../..';

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;