import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create an account</h1>
      <p className="text-white/70 mb-8">
        Join HostScale to start managing your property portfolio more efficiently.
      </p>
      
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="block text-sm font-medium">
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              required
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="John"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="last-name" className="block text-sm font-medium">
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              required
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Doe"
            />
          </div>
        </div>
        
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
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="••••••••"
          />
          <p className="text-xs text-white/50">
            Must be at least 8 characters with 1 uppercase, 1 number, and 1 special character.
          </p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium">
            Company name (optional)
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your property management company"
          />
        </div>
        
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-white/10 bg-white/5 focus:ring-primary"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-white/70">
            I agree to the{' '}
            <Link href="/terms" className="text-primary hover:text-primary/80">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary hover:text-primary/80">
              Privacy Policy
            </Link>
          </label>
        </div>
        
        <Button className="w-full">Create account</Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-white/70">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:text-primary/80">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
