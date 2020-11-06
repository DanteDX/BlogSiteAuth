export const addUser = (userName) => dispatch =>{
    dispatch({
        type:'ADD_USER',
        payload:userName
    })
}

export const removeUser = () => dispatch =>{
    dispatch({
        type:'REMOVE_USER'
    })
}