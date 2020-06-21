import nunjucksAsync from "koa-nunjucks-async";

export default function nunjucks(relativePath) {
  const nunjucksOptions = {
    opts: {
      autoescape: true,
      watch: true
    },
    ext: ".html"
  };
  return nunjucksAsync(relativePath, nunjucksOptions);
}
