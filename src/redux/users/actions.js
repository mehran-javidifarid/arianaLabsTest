import { action } from 'typesafe-actions'

export const setUserList = (data) => action('@@users/ADD_USER_LIST',data);
