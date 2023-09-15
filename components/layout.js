import Head from "next/head";
import Link from "next/link";

export default function Layout( { children, home } ) {
  return(
    <div>
      <Head>
      <title>Contacts</title>
      </Head>
      <header>
      <nav>
      </nav>
      </header>
      <main>
        {children}
      </main>
      { !home && (
        <Link href="/" className="btn btn-primary mt-3">
        Back to home </Link>
      )  
      }
     
      
    </div>
  );
}