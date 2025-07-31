"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations, useLocale } from 'next-intl'
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { sanitizeEmail } from "@/lib/sanitize"
import Link from "next/link"

const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type SigninFormData = z.infer<typeof signinSchema>

export function SigninForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const t = useTranslations()
  const locale = useLocale()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  })

  const onSubmit = async (data: SigninFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await signIn("credentials", {
        email: sanitizeEmail(data.email),
        password: data.password, // Password doesn't need sanitization as it will be hashed
        redirect: false,
      })

      if (result?.error) {
        setError(t('auth.invalidCredentials'))
      } else {
        router.push(`/${locale}/dashboard`)
        router.refresh()
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setError(t('errors.somethingWentWrong'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{t('auth.signIn')}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {t('auth.signInToYourAccount')}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t('auth.email')}</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t('auth.password')}</Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        {error && (
          <div className="text-sm text-red-500 text-center">{error}</div>
        )}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? t('common.loading') : t('auth.signIn')}
        </Button>
      </form>
      <div className="text-center text-sm">
        {t('auth.dontHaveAccount')}{" "}
        <Link href={`/${locale}/auth/signup`} className="underline">
          {t('auth.signUp')}
        </Link>
      </div>
    </div>
  )
}