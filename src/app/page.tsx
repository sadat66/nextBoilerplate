"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Code, Database, Lock, Palette, Zap, Github } from "lucide-react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Next.js Boilerplate
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {session ? (
                <Button asChild>
                  <Link href="/dashboard">
                    Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button variant="outline" asChild>
                    <Link href="/auth/signin">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/auth/signup">Get Started</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build Fast with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}Next.js
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A complete full-stack boilerplate with authentication, database integration, 
              beautiful UI components, and everything you need to ship your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!session && (
                <Button size="lg" asChild>
                  <Link href="/auth/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Built with modern technologies and best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <Lock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Authentication
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete auth system with NextAuth.js, including sign up, sign in, and session management.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <Database className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Database Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Prisma ORM with SQLite for development and easy migration to production databases.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <Palette className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Beautiful UI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailwind CSS with Radix UI components for a modern, accessible design system.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <Code className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                TypeScript
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fully typed with TypeScript for better developer experience and fewer bugs.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fast Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Powered by Bun for lightning-fast package management and development server.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Production Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized for deployment with proper error handling, validation, and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with our boilerplate and focus on what matters - your unique features.
          </p>
          {!session && (
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/signup">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Next.js Full-Stack Boilerplate</h3>
            <p className="text-gray-400 mb-4">
              Built with ❤️ using Next.js, TypeScript, Tailwind CSS, Prisma, and NextAuth.js
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://nextjs.org" className="text-gray-400 hover:text-white transition-colors">
                Next.js
              </a>
              <a href="https://tailwindcss.com" className="text-gray-400 hover:text-white transition-colors">
                Tailwind CSS
              </a>
              <a href="https://prisma.io" className="text-gray-400 hover:text-white transition-colors">
                Prisma
              </a>
              <a href="https://next-auth.js.org" className="text-gray-400 hover:text-white transition-colors">
                NextAuth.js
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
