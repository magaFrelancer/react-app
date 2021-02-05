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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            date: '23:32'

        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage(){
        let newMessage = {
            id: 1, message: this._state.messagesPage.newMessageText,
            date: "23:50",
            from: 'my-message'
        };
        this._state.messagesPage.messages.push(newMessage);
    },
    updateNewMessageText(newText){
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

};







export default store;