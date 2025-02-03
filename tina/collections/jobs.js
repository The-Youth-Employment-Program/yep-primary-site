/**
 * @type {import('tinacms').Collection}
 */

export default {
  label: "Jobs",
  name: "jobs",
  path: "content/jobs",
  format: 'json',
  templates: [
    //fulltime
    {
        name:"fulltime",
        label: "Fulltime",
        type:"object",
        fields: [
            {
                type: 'boolean',
                name: 'active',
                label: 'Active'
            },
            {
                type: "string",
                label: "Position Title",
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
                label: "Job Description",
                name: "body",
                isBody: true,
            },
            {
                type: "rich-text",
                label: "Job Responsibilites",
                name: "responsibilities",
            },
            {
                name:"link",
                label:"Application Form Link",
                type:"string",
                required:true,
            },
            {
                name: "branch",
                label: "Branch",
                type: "reference",
                collections: ['branchContact']    
            }
        ]
    },
    //seasonal
    {
        name:"seasonal",
        label: "Seasonal",
        type:"object",
        fields: [
            {
                type: 'boolean',
                name: 'active',
                label: 'Active'
            },
            {
                type: "string",
                label: "Position Title",
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
                label: "Job Description",
                name: "body",
                isBody: true,
            },
            {
                name:"link",
                label:"Application Form Link",
                type:"string",
                required:true,
            },
            {
                name: "branch",
                label: "Branch",
                type: "reference",
                collections: ['branchContact']    
            }
        ]
    }
  ],
  ui: {
    router: ({ document }) => {
      return `/jobs/${document._sys.filename}`;
    },
  },
};
