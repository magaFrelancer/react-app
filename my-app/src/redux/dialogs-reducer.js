const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageBody = {
                id: 1, message: state.newMessageBody,
                date: "23:50",
                from: 'my-message'
            };
            state.newMessageBody = '';
            state.messages.push(newMessageBody);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }


};

export const updateNewMessageTextCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, body: body});
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export default dialogsReducer;