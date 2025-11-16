import Logout from '@/components/auth/logout'
import SignIn from '@/components/auth/SignIn'
import { getServerAuth } from '@/lib/getServerAuth'


export default async function page() {
  const user = await getServerAuth();
  if (user) {
    return(<Logout user={user}/>)
  };
    return (
    <div className='h-screen flex justify-center items-center'>
        <SignIn/>
    </div>
  )
}
