import Head from 'next/head'
import CompanyCTA from '@components/CompanyCTA'
import Contact from '@components/Contact'

export default function Veneto6() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <div className="container">
          <h1>Veneto 6</h1>
        </div>
      </section>
      <CompanyCTA />
      <Contact />
    </div>
  )
}
