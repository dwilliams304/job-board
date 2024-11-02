import { 
    AppleLogo, 
    BMWLogo, 
    FacebookLogo, 
    GoogleLogo, 
    McdonaldsLogo, 
    SoundcloudLogo 
} from '../assets/testlogos';
import DefaultLogo from "../assets/react.svg";

export type Company = {
    companyID: number;
    companyName: string;
    companyLogo: string;
}

export function FetchCompany(_companyID: number): Company {
    let val: Company = Dev_DefaultCompany;
    for(let i = 0; i < Companies.length; i++){
        if(Companies[i].companyID === _companyID){
            val = Companies[i];
            break;
        }
    }
    return val;
}

export const Dev_DefaultCompany: Company = {
    companyID: 12121212,
    companyName: "Default Company",
    companyLogo: DefaultLogo,
}

export const Companies: Company[] = [
    {
        companyID: 100001,
        companyName: "TechNova Solutions",
        companyLogo: AppleLogo,
    },
    {
        companyID: 100002,
        companyName: "DataSphere Analytics",
        companyLogo: BMWLogo,
    },
    {
        companyID: 100003,
        companyName: "CodeCraft Inc.",
        companyLogo: AppleLogo,
    },
    {
        companyID: 100004,
        companyName: "CloudWorks Technologies",
        companyLogo: FacebookLogo,
    },
    {
        companyID: 100005,
        companyName: "Innovatech Solutions",
        companyLogo: FacebookLogo,
    },
    {
        companyID: 100006,
        companyName: "BrightMind Studios",
        companyLogo: SoundcloudLogo,
    },
    {
        companyID: 100007,
        companyName: "NextGen Software",
        companyLogo: SoundcloudLogo,
    },
    {
        companyID: 100008,
        companyName: "AppWave Technologies",
        companyLogo: GoogleLogo,
    },
    {
        companyID: 100009,
        companyName: "SecureTech Innovations",
        companyLogo: AppleLogo,
    },
    {
        companyID: 100010,
        companyName: "SafeNet Solutions",
        companyLogo: McdonaldsLogo,
    },
    {
        companyID: 100011,
        companyName: "AI Innovations",
        companyLogo: SoundcloudLogo,
    },
    {
        companyID: 100012,
        companyName: "Digital Solutions Corp",
        companyLogo: SoundcloudLogo,
    },
    {
        companyID: 100013,
        companyName: "NetSecure Inc.",
        companyLogo: BMWLogo,
    },
    {
        companyID: 100014,
        companyName: "DataGuard Technologies",
        companyLogo: BMWLogo,
    },
    {
        companyID: 100015,
        companyName: "CloudMatrix",
        companyLogo: FacebookLogo,
    },
    {
        companyID: 100016,
        companyName: "WriteTech Solutions",
        companyLogo: GoogleLogo,
    },
    {
        companyID: 100017,
        companyName: "CryptoTech Ventures",
        companyLogo: BMWLogo,
    },
    {
        companyID: 100018,
        companyName: "Reliant Systems",
        companyLogo: AppleLogo,
    },
    {
        companyID: 100019,
        companyName: "CRM Solutions Inc.",
        companyLogo: AppleLogo,
    },
    {
        companyID: 100020,
        companyName: "Creative Minds Agency",
        companyLogo: BMWLogo,
    }
    
]