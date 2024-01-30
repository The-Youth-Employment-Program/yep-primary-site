/**
 * @type {import('tinacms').Collection}
 */
export default {
    label: "Branch Information",
    name:"branchContact",
    path:"content/contact",
    global:true,
    format: "json",
    fields: [
        {
            type: "string",
            label: "Branch Name",
            name:"branch",
            isTitle:true,
            required:true,
        },
        {
            type: "rich-text",
            label: "Branch Exerpt",
            description: "Optional Description of Branch",
            name:"blurb",
        },
        {
            type:"object",
            name:"contact",
            label:"Contact Information",
            fields:[
                {
                    type:"object",
                    label:"Address",
                    name:"address",
                    fields:[
                        {
                            type:"string",
                            label:"Street Address",
                            name:"streetAddress"
                        },
                        {
                            type:"string",
                            label:"Secondary Address",
                            name:"secondaryAddress"
                        },
                        {
                            type:"string",
                            label:"City",
                            name:"city"
                        },
                        {
                            type:"string",
                            label:"State",
                            name:"state"
                        },
                        {
                            type:"string",
                            label:"Zip Code",
                            name:"zipCode"
                        }
                    ]
                },
                {
                    type:"string",
                    label:"Office Phone",
                    name:"branchPhone"
                },
                {
                    type:"reference",
                    collections:['team'],
                    label:"Branch Contact",
                    name:"primaryContact",
                },
//Add Project manager  and other administrator information here. The information will be used not on the contact page but other related pages like Work at YEP, Work with YEP, etc...
            ]
        },
    ],
    ui: {
        router: ({ document }) => {
            return `/contacts/${document._sys.filename}`;
        },
    },
};
