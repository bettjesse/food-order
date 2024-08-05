import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"
import { useUpdateMyUser } from "@/api/MyuserApi"

const UserProfilePage = () => {
    const {updateUser, isLoading}= useUpdateMyUser()
  return (
    <div>
        <UserProfileForm onSave={ updateUser} isLoading= {isLoading}/>
    </div>
  )
}

export default UserProfilePage