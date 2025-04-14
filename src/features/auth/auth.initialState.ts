import { TAppState, TAuthState } from "AppModels"

const authInitialState: TAuthState = {
    auth: {
        signUpStatus: '',
        updateUserStatus: '',
        isPrepared: false,
        isAuthenticated: false,
        newPasswordRequired: false,
        resetPassword: false,
        new_password: false,
        reset: false,
        isLoaded: false,
        authenticateError: '',
        accessToken: '',
        idToken: '',
        refreshToken: '',
    },
    user: {
        sub: '',
        email: '',
        emailVerified: false,
        profilePicture: ''
    },
}

export default authInitialState;