import type { NextConfig } from "next";
import path from "path";

interface LoaderContext {
  resourcePath: string;
}
const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/app/styles")],
    additionalData: (content: string, loaderContext: LoaderContext): string => {
      if (loaderContext.resourcePath.endsWith(".scss")) {
        return `@import "themes.scss";\n${content}`;
      }
      return content;
    },
  },
};

export default nextConfig;
