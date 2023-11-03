import Dashboard from '@/components/Dashboard';
import { db } from '@/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {
    const {getUser} = getKindeServerSession();
    const user = getUser();
    console.log(user);

    if(!user ||!user.id) redirect('/auth-callback?origin=dashboard');

    const dbUser  = await db.user.findFirst({
      where:{
        id:user.id
      }
    });

    if(!dbUser)redirect('/auth-callback?origin=dashboard');


  return (
    <Dashboard user={dbUser}/>
  )
}

export default Page