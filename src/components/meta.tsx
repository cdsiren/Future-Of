import Head from "next/head";

const Metadata = (props:any) => {

  const fallbackTitle = "Future Of";
  const fallbackDescription = "Get rewarded for testing technology.";
  const fallbackUrl = "https://jackiesnewsletter.beehiiv.com/subscribe";
  const fallbackImage = "/images/forb.png";

  return (
    <>
      <Head>
        <title>{props.title || fallbackTitle}</title>
        <meta
          name="description"
          content={props.description || fallbackDescription}
        />
        <meta
          name="viewport"
          content="initial-scale=0.6, width=500"
        />
        <link rel="icon" href="/forb.png" />
        {/* facebook open graph tags */}
        <meta property='og:type' content="website" />
        <meta property='og:url' content={props.url || fallbackUrl} />
        <meta property='og:image' content={props.image || fallbackImage} />
        <meta property='og:title' content={props.title || fallbackTitle} />
        <meta property='og:description' content={props.description || fallbackDescription} />

        {/* twitter card tags */}
        <meta name='twitter:card' content={"summary_large_image"} />
        <meta name='twitter:url' content={props.url || fallbackUrl} />
        <meta name='twitter:title' content={props.title || fallbackTitle} />
        <meta name='twitter:description' content={props.description || fallbackDescription} />
        <meta name='twitter:image' content={props.image || fallbackImage} />

        {/* TODO: setup after domain */}
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8QT1SMT3CE"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8QT1SMT3CE');
          `}
        </script>
      </Head>
    </>
  )
}

export default Metadata;