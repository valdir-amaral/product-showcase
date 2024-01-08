export function serialize(obj) {
    let queryString = "";
            
    for(let key in obj) {
        // eslint-disable-next-line no-unused-vars
        queryString += `&${key}=${obj[key]}`;
    }
    return queryString
}