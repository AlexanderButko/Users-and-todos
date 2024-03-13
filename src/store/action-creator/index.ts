import * as UserActionCreators from '../action-creator/user'
import * as TodoActionCreators from '../action-creator/todo'

//Объединяем action creatorы в один объект, чтобы затем привязать его к dispatch в useAction
export default {
    ...TodoActionCreators,
    ...UserActionCreators
}