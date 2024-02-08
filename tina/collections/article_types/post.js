export default {
    name:"post",
    label: "Branch Post",
    type:"object",
    fields: [
        {
          type: 'boolean',
          name: 'published',
          label: 'Published'
        },
        {
          type: "string",
          label: "Title",
          name: "title",
          isTitle:true,
          required:true,
        },
        {
          type: "image",
          name: "image",
          label: "Featured Image",
        },
        {
          type: "rich-text",
          label: "Post Body",
          name: "body",
          isBody: true,
        },
        {
          name: "branch",
          label: "Branch",
          type: "reference",
          collections: ['branchContact']
          
        }
      ]
}