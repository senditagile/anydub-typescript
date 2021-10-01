import { FooterData } from "./types";
import { graphql, useStaticQuery } from "gatsby";

type QueryData = {
  footerJson: {
    main: {
      code: string;
    };
  };
};

export const query = graphql`
  query FooterQuery {
    footerJson {
      main {
        code
      }
    }
  }
`;

export const convert = (data: QueryData): FooterData => {
  return data.footerJson.main.code;
};

export const useFooterData = () => convert(useStaticQuery(query));
