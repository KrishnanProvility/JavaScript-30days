function isEmpty(value) {
    if (value == null) {
        return true;
    }
    if (typeof value === "string" && value.trim() === "") {
        return true;
    }
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }
    return false;
}

console.log(isEmpty(null));             
console.log(isEmpty(undefined));       
console.log(isEmpty(0));               
console.log(isEmpty(false));           
