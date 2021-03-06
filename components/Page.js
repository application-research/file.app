import Head from "next/head";

import * as React from "react";

export default class Page extends React.Component {
  static defaultProps = {
    title: "https://file.app",
    description: "Filecoin miner performance, activity, and data.",
    url: "https://file.app",
    image: "/static/social.png",
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{this.props.title}</title>
          <meta name="title" content={this.props.title} />
          <meta name="description" content={this.props.description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.props.url} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:image" content={this.props.image} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={this.props.url} />
          <meta property="twitter:title" content={this.props.title} />
          <meta
            property="twitter:description"
            content={this.props.description}
          />
          <meta property="twitter:image" content={this.props.image} />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        {this.props.children}
      </React.Fragment>
    );
  }
}
