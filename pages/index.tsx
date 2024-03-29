import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Link } from 'components/Link';

export default function Home() {
  return (
    <div>
    <h1>Next.js 10 - CRUD Example with React Hook Form</h1>
    <p>An example app showing how to list, add, edit and delete user records with Next.js 10 and the React Hook Form library.</p>
    <p><Link href="/users">&gt;&gt; Manage Users</Link></p>
</div>
  )
}
