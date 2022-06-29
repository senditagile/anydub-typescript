import React from "react";

import { graphql } from "gatsby";

import { ModalLayout } from "../components/ModalLayout";
import { Page } from "../components/Page";
import { Sidebar } from "../components/Sidebar";
import { useSiteMetadata } from "../hooks";
import { Node } from "../types";

interface Props {
  data: {
    markdownRemark: Node;
  };
}

const VideoModalTemplate: React.FC<Props> = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: body } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title, description = "", socialImage } = frontmatter;
  const metaDescription = description || siteSubtitle;

  return (
    <ModalLayout
      title={`${title} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}
    >
      <Sidebar />
      <Page title={title}>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Page>
    </ModalLayout>
  );
};

export const query = graphql`
  query VideoModalTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default VideoModalTemplate;
