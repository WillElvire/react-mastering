import { getFromStorage } from "src/core/services/storage/storage";

export function getInitialState() {
    const user = getFromStorage("user");
    if(!!user) {
        return JSON.parse(user)
    }
    return {}
}