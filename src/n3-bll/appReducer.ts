
export type initialStateType = {}

export const initialState: initialStateType = {};


export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {

        case "CHANGE-STATE": {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => {
    return {type: 'CHANGE-STATE', theme} as const
};


type changeThemeCType = ReturnType<typeof changeThemeC>

type ActionsTypes = changeThemeCType