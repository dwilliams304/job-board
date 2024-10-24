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

type LoginReturn = {
    error?: {
        message: string;
    }
    success?: User
}
export function Dev_LoginFunc({email, password}: LoginArgs): LoginReturn {
    for(let i = 0; i < Users.length; i++){
        var cur = Users[i];
        if(cur.userEmail === email){
            if(cur.userPassword === password){
                console.log(`Login success, logging into id: ${cur.userID} - ${cur.userInfo.name}`);
                return {success: cur}
            }
        }
    }
    return {error: 
        {
            message: "Incorrect email or password!"
        }
    }
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