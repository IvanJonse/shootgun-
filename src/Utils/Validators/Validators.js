

 export const ReqaredField = (value) => {

    if (value)  return undefined

    return 'Field is required'
    
 }

 export const MaxLength = (number) => (value) => {

   if (value.length > number) return `Max-length is ${number} symbol`

   return undefined
 }




