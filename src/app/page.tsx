// app/page.tsx
import Counter from '@/components/ToDo'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <Counter />
    </main>
  )
}
