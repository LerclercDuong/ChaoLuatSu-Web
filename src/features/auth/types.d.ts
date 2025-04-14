
declare module 'AppModels' {
    export type TAuthState = {
        auth: {
            signUpStatus: string,
            updateUserStatus: string,
            isPrepared: boolean,
            isAuthenticated: boolean,
            newPasswordRequired: boolean,
            resetPassword: boolean,
            new_password: boolean,
            reset: boolean,
            isLoaded: boolean,
            authenticateError: string,
            accessToken: string,
            idToken: string,
            refreshToken: string,
        },
        user: {
            sub: string,
            email: string,
            emailVerified: boolean,
            profilePicture: string
        },
    }
}
