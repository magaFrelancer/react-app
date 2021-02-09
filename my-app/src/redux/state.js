// import {act} from "@testing-library/react";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: `Hi`,
                    date: '20:30'
                },
                {
                    id: 2,
                    message: `Its My two Post`,
                    date: '21:40'
                },

            ],
            newPostText: 'message...'
        },
        messagesPage: {
            dialogs: [
                {id: '1', name: 'Magomed'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Abu'},
                {id: '4', name: 'Ahmed'},
                {id: '5', name: 'Any'},
                {id: '6', name: 'Abdullah'},

            ],
            messages: [
                {
                    id: 1, message: `Что делаешь?`,
                    date: '20:30',
                    from: 'my-message'
                },
                {
                    id: 2, message: `Да нечего`,
                    date: '21:40',
                    from: 'his-message'
                },

            ],
            newMessageText: 'Привет'
        }
    },
    _callSubscriber() {
        console.log('state')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                date: '23:32'

            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 1, message: this._state.messagesPage.newMessageText,
                date: "23:50",
                from: 'my-message'
            };
            this._state.messagesPage.messages.push(newMessage);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};


export const addPostActionCreate = () => ({type: ADD_POST});
export const updateNewPosText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const onTextChangeActionCreate = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export const addMessageActionCreate = (text) => ({
    type: ADD_MESSAGE, newText: text
});
export default store;