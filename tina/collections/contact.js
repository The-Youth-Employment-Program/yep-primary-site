/**
 * @type {import('tinacms').Collection}
 */
export default {
    label: "Branch Information",
    name:"branchContact",
    path:"content/contact",
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
                            label:"City",
                            name:"ctiy"
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
