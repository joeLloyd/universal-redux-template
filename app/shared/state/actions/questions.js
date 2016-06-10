import { CALL_API, CHAIN_API } from '../middleware/api'

export const LOADED_QUESTIONS = Symbol('LOADED_QUESTIONS')
export function loadQuestions() {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/api/questions',
      successType: LOADED_QUESTIONS
    }
  }
}

export const LOADED_QUESTION_DETAIL = Symbol('LOADED_QUESTION_DETAIL')
export const LOADED_QUESTION_USER = Symbol('LOADED_QUESTION_USER')

export const LOADED_FAKE_STUFF = Symbol('LOADED_FAKE_STUFF')

export function loadQuestionDetail ({ id }) {
  return {
    [CHAIN_API]: [
      ()=> {
        return {
          [CALL_API]: {
            method: 'get',
            path: `/api/questions/${id}`,
            successType: LOADED_QUESTION_DETAIL
          }
        }
      },
      (question) => {
        return {
          [CALL_API]: {
            method: 'get',
            path: `/api/users/${question.userId}`,
            successType: LOADED_QUESTION_USER
          }
        }
      },
      (fakeStuff) => {
        return { 
          [CALL_API]: {
            method: 'get',
            host: 'http://jsonplaceholder.typicode.com',
            path: '/posts/1',
            successType: LOADED_FAKE_STUFF
          }
        }
      }
    ]
  }
}
