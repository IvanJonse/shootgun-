
const ADD_MASSAGE = 'ADD-MASSAGE'

let initialState = {

    dialog: [
        {  id: 1, name: 'John', textMessage: 'Hi, whats up?', time: '17:00' , count: 17 },
        {  id: 2, name: 'Bern', textMessage: 'My dad took me to the park… and I got on it and… it bent.', time: '15:30', count: 168 }
    ],

    massage: [
       
    ],

    clear: ''

}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MASSAGE: {

            let newMassage = action.dialogText
            
            return {...state, massage: [...state.massage, { text: newMassage}]}
    
        }
      
        default: 

            return state
    }

}

export const sendMassage = (dialogText) => ({

    type: ADD_MASSAGE, dialogText
})

export default dialogReducer;