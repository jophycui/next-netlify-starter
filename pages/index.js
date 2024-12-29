import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LeChinese Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my LeChinese!" />
        <p className="description">
         Your account is now activated, back to your app and login LeChinese!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
