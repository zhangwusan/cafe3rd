import { useUserContext } from "../components/UserContext";

export default function Profile() {
  const {user} = useUserContext();
    return (
    <div className="flex justify-center items-center h-screen">
        <div className="border border-black rounded-2xl py-3 px-5">
            <div>Profile</div>
            <div>User Id : {user.id}</div>
            <div>User First Name : {user.firstName}</div>
            <div>User Last Name : {user.lastName}</div>
            <div>User Email : {user.email}</div>
        </div>
    </div>
  )
}
