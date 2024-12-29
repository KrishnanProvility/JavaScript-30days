

function is_valid_variable(variable){

    const checkVariable =/^[a-z_][a-z_]*$/ig
     const result =checkVariable.test(variable)
     
     return result

}
console.log(is_valid_variable('first_name'));//true
console.log(is_valid_variable('first-name') );//false
console.log(is_valid_variable('1first_name'));//false
console.log(is_valid_variable('firstname'));//true