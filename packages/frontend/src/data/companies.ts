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
    reviews: string; //TEMPORARY
}

export function FetchCompany(_companyID: number): Company {
    let val: Company = Companies[0];
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
    reviews: "4.1/5 (752 reviews)"
}

export const Companies: Company[] = [
    {
        companyID: 100001,
        companyName: "TechNova Solutions",
        companyLogo: AppleLogo,
        reviews: "2.3/5 (23 reviews)"
    },
    {
        companyID: 100002,
        companyName: "DataSphere Analytics",
        companyLogo: BMWLogo,
        reviews: "4.4/5 (1.2k reviews)"
    },
    {
        companyID: 100003,
        companyName: "CodeCraft Inc.",
        companyLogo: AppleLogo,
        reviews: "0.0/5 (No reviews)"
    },
    {
        companyID: 100004,
        companyName: "CloudWorks Technologies",
        companyLogo: FacebookLogo,
        reviews: "4.5/5 (2 reviews)"
    },
    {
        companyID: 100005,
        companyName: "Innovatech Solutions",
        companyLogo: FacebookLogo,
        reviews: "3.9/5 (11.2k reviews)"
    },
    {
        companyID: 100006,
        companyName: "BrightMind Studios",
        companyLogo: SoundcloudLogo,
        reviews: "4.9/5 (1.6k reviews)"
    },
    {
        companyID: 100007,
        companyName: "NextGen Software",
        companyLogo: SoundcloudLogo,
        reviews: "4.2/5 (720 reviews)"
    },
    {
        companyID: 100008,
        companyName: "AppWave Technologies",
        companyLogo: GoogleLogo,
        reviews: "4.7/5 (234 reviews)"
    },
    {
        companyID: 100009,
        companyName: "SecureTech Innovations",
        companyLogo: AppleLogo,
        reviews: "3.9/5 (200 reviews)"
    },
    {
        companyID: 100010,
        companyName: "SafeNet Solutions",
        companyLogo: McdonaldsLogo,
        reviews: "3.6/5 (801 reviews)"
    },
    {
        companyID: 100011,
        companyName: "AI Innovations",
        companyLogo: SoundcloudLogo,
        reviews: "4.1/5 (98 reviews)"
    },
    {
        companyID: 100012,
        companyName: "Digital Solutions Corp",
        companyLogo: SoundcloudLogo,
        reviews: "4.5/5 (34 reviews)"
    },
    {
        companyID: 100013,
        companyName: "NetSecure Inc.",
        companyLogo: BMWLogo,
        reviews: "2.3/5 (7 reviews)"
    },
    {
        companyID: 100014,
        companyName: "DataGuard Technologies",
        companyLogo: BMWLogo,
        reviews: "5.0/5 (2 reviews)"
    },
    {
        companyID: 100015,
        companyName: "CloudMatrix",
        companyLogo: FacebookLogo,
        reviews: "4.0/5 (7.9k reviews)"
    },
    {
        companyID: 100016,
        companyName: "WriteTech Solutions",
        companyLogo: GoogleLogo,
        reviews: "4.2/5 (70 reviews)"
    },
    {
        companyID: 100017,
        companyName: "CryptoTech Ventures",
        companyLogo: BMWLogo,
        reviews: "3.9/5 (333 reviews)"
    },
    {
        companyID: 100018,
        companyName: "Reliant Systems",
        companyLogo: AppleLogo,
        reviews: "4.1/5 (752 reviews)"
    },
    {
        companyID: 100019,
        companyName: "CRM Solutions Inc.",
        companyLogo: AppleLogo,
        reviews: "4.3/5 (2.5k reviews)"
    },
    {
        companyID: 100020,
        companyName: "Creative Minds Agency",
        companyLogo: BMWLogo,
        reviews: "4.8/5 (12 reviews)"
    }
    
]