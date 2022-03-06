import addVideo from "gatsby-remark-video";

export const plugin = (options: any) => {
  return (markdownAST: any) => {
    addVideo({ markdownAST }, options);
  };
};
