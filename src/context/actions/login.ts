export const login = {
    CHANGE_NAME: (name:string) => ({
        key: "userName",
        payload: name
    }),
    UPDATE_PHOTO: (url:string) => ({
        key: "photoUrl",
        payload: url
    }),

};