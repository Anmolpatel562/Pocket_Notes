export const setProfileLetter = (name) => {
    const nameArray = name.split(" ");
    if(nameArray.length < 2){
       return nameArray[0].charAt(0).toUpperCase();
    }
    const n =  `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`
    return n.toUpperCase();
}