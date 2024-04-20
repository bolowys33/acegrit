export interface Response {
    success: boolean;
    message: string;
    data?: object | Array<object>
    token? : string;
}
