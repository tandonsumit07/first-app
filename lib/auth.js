import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import  {cookies}  from "next/headers";

import db from '@/lib/db'

const adapter = new BetterSqlite3Adapter(db, 
   { 
    user: 'users',
    session: 'sessions'

   }
);

const lucia = new Lucia (adapter, {

    sessionCookie :{
        expires : false,
        attributes: {

        }
    }
});

export async function createAuthSession(userId){
   const session = await lucia.createSession(userId, {});
   const sessionCookie = lucia.createSessionCookie(session.id);
   const cookieStore = cookies();          // <- call it
   cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}

export async function verifyAuthSession(){
    const cookieStore = cookies(); 
    const sessionCookie = cookieStore.get(lucia.sessionCookieName);

    // check if cookie exist
    if(!sessionCookie){
        return {
            user: null,
            session: null
        }
    }

    // check session id
    const sessionId = sessionCookie.value;
    if(!sessionId){
        return {
            user: null,
            session: null
        }
    }

    // check valid session 
    const result = await lucia.validateSession(sessionId);

    if(result.session && result.session.fresh){
        const sessionCookie = lucia.createSessionCookie(result.session.id)
        cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }

    if(!result.session){
        const sessionCookie = lucia.createBlankSessionCookie()
        cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    }

    return result;

}

export async function destroySession(){
    const {session} = await verifyAuthSession();
    if(!session){
        return {
            error:'Unauthorized'
        }
    }
   await lucia.invalidateSession(session.id);
   const sessionCookie = lucia.createBlankSessionCookie()
   cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}

