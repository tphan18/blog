import React from "react";
import App from "next/app";
import Layout from "../components/layout";

export default class Blog extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
