import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class SEO extends Component {

    render() {
        const title = 'TrickiT Workout';
        const name = 'TrickiT Workout';
        const url = 'https://trickit.netlify.com';
        const description = 'TrickiT Workout, YouTube Channel.';
        const image = `${url}/static/logo-74fdd5d5384ffbcfcca0b737b891d040.png`;

        const schemaOrgJSONLD = {
            "@context": "http://schema.org",
            "@type": "Organization",
            url,
            name,
            alternateName: `${name} Channel`
        }

        return (

            <Helmet>
                <title>{title}</title>
                {/* YouTube Subscribe Button */}
                <script src="https://apis.google.com/js/platform.js"></script>
                {/* General tags */}
                <meta name="description" content={description} />
                <meta name="image" content={image} />
                <meta http-equiv="content-language" content="en" />


                {/* Schema.org tags */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrgJSONLD)}
                </script>


                {/* OpenGraph tags */}
                <meta property="og:site_name" content={name} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                {/* <meta property="fb:app_id" content={config.siteFBAppID} /> */}
                <meta property="og:locale" content="en_US" />


                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={`@${name}`} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:site" content={`@${name}`} />
            </Helmet>

        );

    }

}