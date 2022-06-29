import path from "path";

import { CreateWebpackConfigArgs } from "gatsby";
import { CompilerOptions } from "typescript";

import { compilerOptions } from "../tsconfig.json";

const onCreateWebpackConfigFunc = (
  (options: Pick<CompilerOptions, "paths">) =>
  ({ actions }: CreateWebpackConfigArgs) => {
    actions.setWebpackConfig({
      resolve: {
        alias: Object.entries(options.paths || []).reduce(
          (aliases, [name, [target]]) => ({
            ...aliases,
            [name]: path.resolve(target),
          }),
          {},
        ),
      },
    });
    actions.setWebpackConfig({
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
          }
        ]
      }
    });
  }
)(compilerOptions);

export { onCreateWebpackConfigFunc };
