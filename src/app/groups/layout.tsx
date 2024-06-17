import { PropsWithChildren, Suspense } from 'react'

export default function GroupsLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Suspense>
      <main className="flex-1 max-w-screen-md w-full mx-auto px-4 py-6 flex flex-col gap-6">
        {children}
      </main>
    </Suspense>
  )
}
