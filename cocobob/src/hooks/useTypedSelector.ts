import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../features';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
