import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout/layout";

export default function Home({ data }) {
  return <Layout><div>{data.site.siteMetadata.title}</div></Layout>;
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
