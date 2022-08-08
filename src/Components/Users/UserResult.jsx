import React, {useContext } from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from '../layouts/UserItem'
import GithubContext from '../../Context/Github/GithubContext'
function UserResult() {
  const {users, loading} = useContext(GithubContext)



    if (!loading){
      return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user)=>(
            <UserItem key={user.id} user={user} />
         ))}
        </div>
      )
    }else{
      return <h3 className='text-center mx-auto'>
        <Spinner />
      </h3>
    }

}

export default UserResult
