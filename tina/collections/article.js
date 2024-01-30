/**
 * @type {import('tinacms').Collection}
 */
import newsletter from "./article_types/newsletter";
import post from "./article_types/post";

export default {
  label: "Articles",
  name: "article",
  path: "content/articles",
  format: 'json',
  templates: [
    newsletter,
    post,
  ],
  ui: {
    router: ({ document }) => {
      return `/articles/${document._sys.filename}`;
    },
  },
};
