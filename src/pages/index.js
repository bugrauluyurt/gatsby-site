import React from "react";
import { graphql } from "gatsby";

export default function Home({ data }) {
  return <div>{data.site.siteMetadata.title}</div>
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
