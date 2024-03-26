import { ADD_MESSAGE } from './Types';

const getMessages = () => {
    const messages = localStorage.getItem('messages');
    return messages ? JSON.parse(messages) : [];
};

export const addMessage = (message) => async (dispatch) => {
    const currentMessages = getMessages();
    const updatedMessages = [...currentMessages, message];

    localStorage.setItem('messages', JSON.stringify(updatedMessages));
    dispatch({
        type: ADD_MESSAGE,
        payload: message,
    });
};
