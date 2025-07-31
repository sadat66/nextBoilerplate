"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useTranslations, useLocale } from 'next-intl'

export function SignOutButton() {
  const t = useTranslations()
  const locale = useLocale()
  const handleSignOut = () => {
    signOut({ callbackUrl: `/${locale}/auth/signin` })
  }

  return (
    <Button variant="outline" size="sm" onClick={handleSignOut}>
      <LogOut className="h-4 w-4 mr-2" />
      {t('auth.signOut')}
    </Button>
  )
}