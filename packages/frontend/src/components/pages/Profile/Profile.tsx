import { User } from "../../../data/users"
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";


type ProfileProps = {
    // user?: User
    signOut: () => void;
}

export default function Profile(props: ProfileProps){
    const navTo = useNavigate();
    // const {user} = props;
    const onSignoutClick = () => {
        props.signOut();
        navTo('/');
    }

    if(!localStorage.getItem('user')) navTo('/');
    else{
        return(
            <div className="flex flex-grow flex-col">
                <h2>
                    Hello, User.
                </h2>
                <p>
                    Email: N/A
                </p>
                <Button 
                    type="Primary"
                    text="Sign Out"
                    style={{width: "9%", textAlign: "center"}}
                    function={onSignoutClick}
                />
            </div>
        )

    }

}