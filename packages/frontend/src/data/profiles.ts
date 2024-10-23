type Profile = {
    profileType: "Seeker" | "Employer";
    profileID: number; //8-digits
    profileEmail: string;
    profilePassword: string;
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
    success?: Profile
}
export function Dev_LoginFunc({email, password}: LoginArgs): LoginReturn {
    for(let i = 0; i < Profiles.length; i++){
        var cur = Profiles[i];
        if(cur.profileEmail === email){
            console.log("Found matching email!");
            if(cur.profilePassword === password){
                console.log(`Login success, logging into id: ${cur.profileID} - ${cur.userInfo.name}`);
                return {success: cur}
            }
        }
    }
    console.log("Could not login to any profiles!");
    return {error: 
        {
            message: "Incorrect email or password!"
        }
    }
}

const Profiles: Profile[] = [
    {
        profileType: "Seeker",
        profileID: 12_345343,
        profileEmail: "jobseeker@example.com",
        profilePassword: "password",
        userInfo: {
            name: "Dev_Job-Seeker"
        }
    },
    {
        profileType: "Employer",
        profileID: 19_333344,
        profileEmail: "employer@example.com",
        profilePassword: "password",
        userInfo: {
            name: "Dev_Employer"
        }
    },
]