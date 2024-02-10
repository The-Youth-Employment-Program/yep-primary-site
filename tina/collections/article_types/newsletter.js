export default {
    name:"newsletter",
    label: "Newsletter",
    type:"object",
    fields: [
        {
            label: 'Motto of the Year',
            name: 'subtitle',
            type: 'string',
            isTitle:true,
            required:true,
        },
        {
          label: "Date",
          name: "date",
          type: "datetime",
          ui: {
            dateFormat: 'YY-MM-DD',
            // parse: (value) => value && value.format('YY-MM-DD'),
          },
        },
        {
          type: 'boolean',
          name: 'published',
          label: 'Published'
        },
        {
          type: "rich-text",
          label: "Post Body",
          name: "body",
          isBody: true,
        },
      ],
}