const UPDATE_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const UPDATE_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

let store = {
    _state: {
        profilePage:{
            posts: [
                {
                    id: 1,
                    mess: "Эта система также может использоваться для аутентификации клиента",
                    countLikes: 5
                },
                {
                    id: 2,
                    mess: "Также будут приниматься все сертификаты, подписанные организациями, которым доверяет сервер.",
                    countLikes: 10
                }
            ],

            newPostText: "111"
        },
        dialogsPage:{
            dialogsData: [
                {id: 1, name: "Саша"},
                {id: 2, name: "Толя"}
            ],
            messData: [
                {id: 1, text:'Первый текст'},
                {id: 2, text:'Второй текст'}
            ],
            newMessageText: '11'
        }
    },

    _callSubscriber () {

    },

    getState() {
      return this._state
    },

    subscribe(observer){

        this._callSubscriber = observer
    },



    dispatch (action) {

        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                mess: this._state.profilePage.newPostText,
                countLikes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }

        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

        else if (action.type === SEND_NEW_MESSAGE) {
            let newMessage = {
                id: action.id,
                text: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }

        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => (
    {
        type: ADD_POST
    })

export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
    })

export const sendMessageCreator = () => (
    {
        type: SEND_NEW_MESSAGE
    })

export const updateMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default store

window.store = store