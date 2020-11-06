const initialState = {
    userName:""
};

const logInReducer = (state = initialState,action) => {
    const {type,payload} = action;

    switch(type){
        case 'ADD_USER':
            return{
                ...state,
                userName:payload
        }
        case 'REMOVE_USER':
            return{
                ...state,
                userName:""
        }
        default:
            return state;
    }
}

export default logInReducer;