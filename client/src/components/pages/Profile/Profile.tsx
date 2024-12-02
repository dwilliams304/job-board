import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";



export default function Profile(){
    const navTo = useNavigate();

    const onSignoutClick = () => {
        window.alert("Signed out!");
        navTo('/');
    }

    return(
        <div className="flex flex-grow flex-col">
            <h2>
                Hello, User.
            </h2>
            <p>
                Email: N/A
            </p>
            <Button 
                styleType="Primary"
                text="Sign Out"
                style={{width: "9%", textAlign: "center"}}
                function={onSignoutClick}
                disabled={false}
            />
        </div>
    )


}