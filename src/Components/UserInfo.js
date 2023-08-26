import './UserInfo.css'
export default function UserInfo({currUser}) {
    return(
        <div>
            <h4 className = "part-header">{currUser.name}</h4>
            <p id="user-info">Budget: {currUser.budget} $</p>
        </div>

    )
}
