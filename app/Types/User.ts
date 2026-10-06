

export interface UserRes {
    id: string;
    username: string;
    fullName: string;
    email: string;
    gioiTinh: string;
}

export interface UserReq {
    username: string;
    password: String;
    fullName: string;
    email: string;
    gioiTinh: string;
}