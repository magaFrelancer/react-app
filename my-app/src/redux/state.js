import rerenderEntireTree from "../render";

let state = {
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
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        date: '23:32'

    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};
export default state;