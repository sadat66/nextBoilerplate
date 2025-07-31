"use client"

import { useSession } from "next-auth/react"
import { useTranslations, useLocale } from 'next-intl'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Database, 
  Lock, 
  Palette, 
  Zap, 
  Github, 
  Star, 
  Users, 
  Rocket,
  Shield,
  Globe,
  Sparkles,
  ArrowUpRight,
  Play
} from "lucide-react"

export default function Home() {
  const { data: session } = useSession()
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  NextBoilerplate
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              {session ? (
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link href={`/${locale}/dashboard`}>
                    {t('navigation.dashboard')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button variant="outline" asChild className="border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                    <Link href={`/${locale}/auth/signin`}>{t('auth.signIn')}</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link href={`/${locale}/auth/signup`}>{t('auth.signUp')}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-8">
              <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Production-ready boilerplate
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Build Fast with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Next.js
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A complete full-stack boilerplate with authentication, database integration, 
              beautiful UI components, and everything you need to ship your next project faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {!session && (
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto">
                  <Link href={`/${locale}/auth/signup`}>
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              <Button variant="outline" size="lg" asChild className="border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 text-lg px-8 py-6 h-auto">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">TypeScript</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">∞</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Built with modern technologies and best practices for the ultimate developer experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Authentication
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Complete auth system with NextAuth.js, including sign up, sign in, and session management with social providers.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Database Ready
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Prisma ORM with SQLite for development and easy migration to production databases like PostgreSQL.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Beautiful UI
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Tailwind CSS with shadcn/ui components for a modern, accessible design system that looks great out of the box.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                TypeScript
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Fully typed with TypeScript for better developer experience, fewer bugs, and improved code maintainability.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Fast Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Powered by Bun for lightning-fast package management and development server with hot reload.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Production Ready
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Optimized for deployment with proper error handling, validation, security, and performance optimizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Built with Modern Tech
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Leveraging the best tools and frameworks for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Next.js 14', icon: '⚡', color: 'from-black to-gray-800' },
              { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-700' },
              { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500 to-blue-500' },
              { name: 'Prisma', icon: '🗄️', color: 'from-emerald-600 to-emerald-700' },
              { name: 'NextAuth.js', icon: '🔐', color: 'from-purple-600 to-purple-700' },
              { name: 'shadcn/ui', icon: '✨', color: 'from-slate-600 to-slate-700' },
              { name: 'Bun', icon: '🚀', color: 'from-orange-500 to-orange-600' },
              { name: 'Lucide Icons', icon: '🎯', color: 'from-pink-500 to-pink-600' },
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-2xl`}>
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with our boilerplate and focus on what matters - your unique features and business logic.
          </p>
          {!session && (
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 h-auto bg-white text-blue-600 hover:bg-gray-100">
              <Link href={`/${locale}/auth/signup`}>
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">NextBoilerplate</h3>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                A complete full-stack boilerplate built with modern technologies to help you ship faster and build better applications.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://nextjs.org" className="hover:text-white transition-colors">Next.js</a></li>
                <li><a href="https://tailwindcss.com" className="hover:text-white transition-colors">Tailwind CSS</a></li>
                <li><a href="https://prisma.io" className="hover:text-white transition-colors">Prisma</a></li>
                <li><a href="https://next-auth.js.org" className="hover:text-white transition-colors">NextAuth.js</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 NextBoilerplate. Built with ❤️ using modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
