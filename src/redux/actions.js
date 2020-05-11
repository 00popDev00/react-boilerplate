module.exports = {
    loginREQ: (value) => {
        return {
            type: 'USER_LOGIN_REQUESTED',
            paylod:value
        };
    },
    registerREQ: (value) => {
        return {
            type: 'USER_CREATE_REQUEST',
            paylod:value

        };
    },
    // userlistREQ: (value) => {
    //     return {
    //         type: 'USER_GET_LIST',
    //         paylod:value

    //     };
    // },
    //USER_GET_LIST

} 