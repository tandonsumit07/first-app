import './../globals.css';
import {logout} from '@/actions/auth-action'

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <header id="auth-header">
            <p>Welcome Back !</p>
            <form action={logout}>
                <button >
                    LogOut 
                </button>
            </form>
        </header>
        {children}
        </body>
    </html>
  );
}
