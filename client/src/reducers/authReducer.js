const initialState = {
    stored:false
};

const authReducer = (state = initialState,action) => {
    const {type,payload} = action;

    switch(type){
        case 'ADD_STORAGE':
            return{
                ...state,
                stored:true
        }
        case 'REMOVE_STORAGE':
            return{
                ...state,
                stored:false
        }
        default:
            return state;
    }
}

export default authReducer;