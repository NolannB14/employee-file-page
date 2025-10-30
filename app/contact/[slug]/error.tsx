"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Contact page error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <Card className="w-full max-w-md p-8 shadow-lg text-center">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-black mb-2">Une erreur est survenue</h1>
        <p className="text-muted-foreground mb-6">Une erreur est survenue. Merci de réessayer.</p>
        <Button onClick={reset} className="bg-[#00B7D0] hover:bg-[#00B7D0]/90 text-white">
          Réessayer
        </Button>
      </Card>
    </div>
  )
}
