
// import ava from '../assets/img/ava.jpg';

// import avatar from '../assets/img/avatar.jpg'

// import dialogReducer from './dialogs-reducer';

// import profileReducer from './profile-reducer';



// let store = {

//     _state: {

//         profilePage: {
//             posts: [
//                 {avatar: `${ava}`, id: 1, name: 'Андрей Баринов', massage:'hi, how are u?', like: 50, dislike: 20},
//                 {avatar: `${ava}`,  id: 2, name: 'Кирилл Бабкин', massage:'hi, how are u?', like: 2, dislike: 1120}
//             ],
        
//             postText: 'tree',
            
//         },
        
//         dialogsPage: {

//             dialog: [
//                 {  id: 1, name: 'Иван', textMessage: 'Привет, пойдешь сегодня гулять? Я уже собираюсь выходить', time: '17:00' , count: 17 },
//                 {  id: 2, name: 'Андрей', textMessage: 'Вряд-ли, на улице холодно', time: '15:30', count: 168 }
//             ],
    
//             massagehead: [
            
//                 {avatar: `${avatar}`, name: 'Иван', subtitle: 'был(а)'}
//             ],

//             massage: [
//                 {text: 'я вышла уже, но все равно я опоздаю как всегда'},
//                 {text: 'нннвсегда'}
//             ],
    
//             dialogText: '',
        
//         },
//     },

//     _callSubscriber() {

//         console.log('state')
//     },

//     getState() {

//         return this._state 
//     },

//     subscribe (observer) {

//         this._callSubscriber = observer
//     },


//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);

//         this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

//         this._callSubscriber(this._state)
        
//     }

// }


// window.store = store

// export default store;