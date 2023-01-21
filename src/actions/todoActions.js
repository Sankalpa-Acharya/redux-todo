export const addTodo = (data)=>{
    return {
        type:'ADD_TODO',
        payload:{
            id:Math.random(),
            data:data
        }
    }

}

export const delTodo = (data)=>{
    return {
        type:'DEL_TODO',
        payload:data
    }

}