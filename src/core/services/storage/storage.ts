

const storage =  localStorage;

function getFromStorage(key : string) {
  return storage.getItem(key);
}

function addToStorage(data : Required<{key : string , value : any}>){
    return storage.setItem(data.key,JSON.stringify(data.value))
}
function removeFromStorage(key : string ) {
    return storage.removeItem(key)
}
export {getFromStorage , addToStorage,removeFromStorage}