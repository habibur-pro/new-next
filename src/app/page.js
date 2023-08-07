"use client"
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
// import { useRouter } from 'next/navigation'




export default function Home() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <Link href='/login'>Login</Link>
      <Link href='/register'>Register</Link>
      <Button></Button>

      <button onClick={() => router.push('/register')}>Register</button>

    </main>
  )
}
