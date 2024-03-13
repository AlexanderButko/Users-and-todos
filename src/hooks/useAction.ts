import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

//Импортируем все action creatorы
import ActionCreators from '../store/action-creator/index'

//Типовое решение по привязке dispatch
export const useAction = () => {
    const dispatch = useDispatch();
    //Привязываем импортированные action creatorы к dispatch
    //Теперь не нужно каждый раз диспатчить action creatorы, достаточно просто вернуть через useAction и вызвать
    return bindActionCreators(ActionCreators, dispatch)
}