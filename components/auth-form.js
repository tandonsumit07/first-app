'use client'
import Link from 'next/link';
import {auth} from '@/actions/auth-action'

import { useFormState } from 'react-dom';

export default function AuthForm({mode}) {

const [formState, formAction]  = useFormState(auth.bind(null, mode), {})
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </p>
      {formState.errors && ( 
        <div> 
         {Object.keys(formState.errors).map((key, index) => 
          <p key={index}>
            {formState.errors[key]}
          </p>
        
        )}
      </div>
    )}
      <p>
        <button type="submit">
          {mode === 'login' ? 'Login' : 'Create Account' }
        </button>
      </p>
      <p>
        {mode === 'login' && <Link href="/?mode=signup">Create an account.</Link> }
       { mode === 'signup' &&  <Link href="/?mode=login">Login with existing account.</Link> }
      </p>
    </form>
  );
}
