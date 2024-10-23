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
}

export const Companies: Company[] = [
    {
        companyID: 12121212,
        companyName: "Default Company",
        companyLogo: DefaultLogo,
    },
]