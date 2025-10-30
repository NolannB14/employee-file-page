import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <Card className="w-full max-w-md p-8 shadow-lg">
        {/* Company Logo Skeleton */}
        <div className="flex justify-center mb-6">
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Profile Section Skeleton */}
        <div className="flex flex-col items-center text-center mb-8">
          <Skeleton className="h-32 w-32 rounded-full mb-4" />
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-5 w-32" />
        </div>

        {/* Contact Actions Skeleton */}
        <div className="space-y-3 mb-6">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>

        {/* Footer Skeleton */}
        <div className="pt-6 border-t border-border text-center">
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </Card>
    </div>
  )
}
