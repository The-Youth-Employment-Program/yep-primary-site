/**
 * @type {import('tinacms').Collection}
 */
export default {
    label: "Branch Information",
    name:"branch_contact",
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
                                name:"street_address"
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
                                name:"zip_code"
                            }
                        ]
                    },
                    {
                        type:"string",
                        label:"Office Phone",
                        name:"branch_phone"
                    },
//Add Project manager  and other administrator information here. The information will be used not on the contact page but other related pages like Work at YEP, Work with YEP, etc...
                ]
            },
        ],
          ui: {
    router: ({ document }) => {
        return `/contact`;
    },
  },
};
