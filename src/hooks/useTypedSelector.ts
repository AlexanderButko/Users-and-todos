import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

//useTypedSelector - кастомный хук, типизированный useSelector
export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;