import Image from 'next/image'
import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <main classname={styles.container}>
      
      <Image 
      src={'/logo.svg'}
      width={310}
      height={163}
      />
      <div classname={styles.navbar}><p>TEST</p></div>
    </main>
  )
}