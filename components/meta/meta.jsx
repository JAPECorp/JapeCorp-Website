import Head from 'next/head'

export default function meta(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:image" content="https://twitter.com/JapeCorp/header_photo" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:creator" content="@JapeCorp" />
            <meta property="twitter:title" content="JapeCorp" />
            <meta name="twitter:image" content="https://twitter.com/JapeCorp/header_photo" />
            <meta property="twitter:description" content="We work hard to make it happen in tech in ideas and in business." />
            <meta name="keywords" content="JAPECORP, Tech, Information Technology, Firm, UIUX, Software Development" />
            <meta name="description" content="We work hard to make it happen in tech in ideas and in business." />
            <link rel='shortcut icon' href='/favicon.svg' />

        </Head>
    )
}
