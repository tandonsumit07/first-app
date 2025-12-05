'use server'
import {createUser, getUserByEmail} from '@/lib/user'
import {hashUserPassword, verifyPassword} from '@/lib/hash'
import { redirect } from 'next/navigation';
import {createAuthSession,  destroySession } from '@/lib/auth';

export async function signup(prevState, formData){

    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {}

    if(!email.includes('@')){
        errors.email = 'Please enter a valid email addresss.'
    }

    if(password?.trim().length < 8){
        errors.password = 'Password should be not less than 8 characters'
    }

    if(Object.keys(errors).length > 0){

        return { errors: errors
        }
    }

    try{
        const userId =  createUser(email, hashUserPassword(password));
        await createAuthSession(userId);
        redirect('/training');
    }
    catch(error){
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            return {
                errors :{
                    email: error.code
                }
            }
        }
        throw error;
    }
}

export async function Login(prevState, formData){

    const email = formData.get('email');
    const password = formData.get('password');

    const existingUser = await getUserByEmail(email);

    if(!existingUser){
        return {
            errors: {
                email: 'No Customer found w/ this email'
            }
        }
    }

    const isValidPassword = verifyPassword(existingUser.password, password);
    if(!isValidPassword){

        return {
            errors: {
                password: "Password didn't Match"
            }
        }
    }
    await createAuthSession(existingUser.id);
    redirect('/training');
}

export async function auth({mode, prevState, formData}){

    if(mode === 'login'){
        return Login(prevState, formData);
    }
    return signup(prevState, formData);
}

export async function logout(){
    await destroySession();
    redirect('/');
}