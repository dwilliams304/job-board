export type User = {
    userType: "Seeker" | "Employer";
    userID: number; //8-digits
    userEmail: string;
    userPassword: string;
    userInfo: {
        name: string;
    }
}

type LoginArgs = {
    email: string;
    password: string
}

type ResponseObject = {
    status?: number;
    response: {
        error?: {
            message: string;
            source: string;
            args?: any
        }
        success?: {
            data: User
            message?: string
        }
    }
}
export function Dev_LoginFunc({email, password}: LoginArgs): ResponseObject {
    const responseObj: ResponseObject = {
        response: {}
    };
    for(let i = 0; i < Users.length; i++){
        var cur = Users[i];
        if(cur.userEmail === email){
            if(cur.userPassword === password){
                responseObj.status = 500;
                responseObj.response.success = {
                    data: cur,
                    message: "Login successful"
                };
            }
        }
    }
    if(!responseObj.response.success){
        responseObj.status = 404;
        responseObj.response.error = {
            message: "Could not find a matching account!",
            args: {email, password},
            source: "@Dev_LoginFunc in users.ts"
        }
    }
    return responseObj;
}

const Users: User[] = [
    {
        userType: "Seeker",
        userID: 12_345343,
        userEmail: "jobseeker@example.com",
        userPassword: "password",
        userInfo: {
            name: "Dev_Job-Seeker"
        }
    },
    {
        userType: "Employer",
        userID: 19_333344,
        userEmail: "employer@example.com",
        userPassword: "password",
        userInfo: {
            name: "Dev_Employer"
        }
    },
]