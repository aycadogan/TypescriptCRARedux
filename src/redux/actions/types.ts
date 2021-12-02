import {FetchTodosAction, ClearTodosAction} from './todos'

// export const FETCHTODOS = 'FETCHTODOS'

export enum ActionTypes{
    fetchTodos = 1,
    clearTodos = 2,

}

export type Action = FetchTodosAction | ClearTodosAction