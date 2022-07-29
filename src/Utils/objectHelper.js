export let objectInArray = (users, action, id, Isfollowed) => {
   return (
        users.map( u => {
        if (u[id] === action) {
                return {...u, ...Isfollowed}
            } 
                return u 
        })
    )
}