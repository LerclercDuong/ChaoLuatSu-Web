declare module 'AppModels' {
    export type TSignUpRequest = {
        email: string;
        password: string;
        repeatedPassword: string;
    };
    export type TAuthenticateRequest = {
        email: string;
        password: string;
    }

    export type TGetMyInfoRequest = {
    }
    
    export type TRefreshAccessTokenRequest = {

    }
}