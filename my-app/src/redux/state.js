// import {act} from "@testing-library/react";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            newMessageBody: ''
        },
        sidebar:{}
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
        this._state.profilePage = contentReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;