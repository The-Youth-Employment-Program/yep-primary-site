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