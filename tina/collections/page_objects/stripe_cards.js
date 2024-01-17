export default {
    name: "stripeCards",
    label: "Stripe Cards",
    type: "object",
    list: true,
    fields: [
        {
            label:"Stripe Card",
            name:"stripeCard",
            type:"object",
            list: true,
            ui: {
                itemProps (item) {
                    return { label: item?.cardTitle || "Stripe Card" }
                },
                defaultItem: {
                    "cardTitle": "",
                    "stripeText": "Work in the outdoors with industry professionals and gain practical experience in numerous fields!\n",
                    "stripeCall": {
                        "label": "Join",
                        "link": "/work"
                    }
                }
            },
            fields:[
                {
                    label:"Stripe Icon",
                    name: "stripeIcon",
                    type: "image"
                },
                {
                    label: "Stripe Card Title",
                    name: "cardTitle",
                    type: "string"
                },
                {
                    label: "Stripe Text",
                    name:"stripeText",
                    type: "rich-text"
                },
                {
                    label:"Call to Action",
                    name:"stripeCall",
                    type:"object",
                    ui:{
                        defaultItem:{
                            label:"Home!",
                            link:"/"
                        },
                    },
                    fields:[
                        {
                            label:"Stripe Call",
                            name:"label",
                            type:"string"
                        },
                        {
                            label:"Link Page",
                            name:"link",
                            type:"string"
                        },
                    ]
                },
            ]
        },
    ]
}
