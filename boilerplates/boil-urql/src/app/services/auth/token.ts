import { sessionStorage } from "@reactizer/session";

const AUTH_TOKEN = "authToken";

export const save = (token: string) => sessionStorage.save(AUTH_TOKEN, token);

export const load = () => sessionStorage.load(AUTH_TOKEN);

export const remove = () => sessionStorage.remove(AUTH_TOKEN);
