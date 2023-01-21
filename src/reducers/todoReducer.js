
const initial_state = [
    
]

export const todoReducer = (state=initial_state,action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            const {id,data} = action.payload
            return [
                ...state,
                {
                    id:id,
                    data:data
                }

            ]

        case 'DEL_TODO':
            const to_delete = action.payload
            return state.filter((data)=>data.id!==to_delete)

    
        default:
            return state;
    }
}