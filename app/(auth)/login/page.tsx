import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome back</h1>
      <p className="text-white/70 mb-8">
        Sign in to your account to continue managing your properties.
      </p>
      
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/80">
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="••••••••"
          />
        </div>
        
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-white/10 bg-white/5 focus:ring-primary"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
            Remember me
          </label>
        </div>
        
        <Button className="w-full">Sign in</Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-white/70">
          Don't have an account?{' '}
          <Link href="/signup" className="text-primary hover:text-primary/80">
            Sign up
          </Link>
        </p>
      </div>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#0a0718] text-white/50">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 text-sm font-medium"
          >
            Google
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 text-sm font-medium"
          >
            Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}
