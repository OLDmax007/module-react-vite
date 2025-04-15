export type DMJSResponseModel<T, K extends string> = {
    [key in K]: T[];
} & {
    total: number;
    skip: number;
    limit: number;
}
