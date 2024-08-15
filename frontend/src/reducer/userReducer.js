//Reducer for managing authentication related state

export const authReducer=(
    state={
        user:null,
        loading:false,
        isAuthenticate:false,
        data:{},
    },
    action
)