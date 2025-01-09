export interface IRole{
designation: any
    roleId: number,
    role: string
}

export interface APIResponseModel {
    message: string,
    result: boolean,
    data : any
}