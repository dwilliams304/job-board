

export default function ProfileDropDown() {
    
    return(
        <div className="px-4">
            <p className="cursor-pointer">Profile &darr;</p>
            <div className="flex-col hidden">
                <p className="hover:underline cursor-pointer">My Account</p>
                <p className="hover:underline cursor-pointer">Settings</p>
                <p className="hover:underline cursor-pointer">Logout</p>
            </div>
        </div>
    )
}