/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "json",
  fields: [
    {
        name: "title",
        label: "Title",
        type: "string",
        isTitle: true,
        required: true
    },
    {
      name: "rows",
      label: "Content Rows",
      type: "object",
      list: true,
      /* change fields to templates to allow choice of what kind of page object ... Might need to further categorize by organizing blocks WITHIN sections. */
      fields: [
          {
              type: "rich-text",
              label: "block",
              name: "block"
          }
      ]
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
