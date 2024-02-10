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
                    "cardTitle": "$",
                    "stripeText": "Donate ${} to YEP.\n",//Currently broken
                    "stripeCall": {
                        "label": "Donate",
                        "link": ""
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
                    label:"Stripe API ID",
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
                            label:"Button Text",
                            name:"label",
                            type:"string"
                        },
                        {
                            label:"API ID",
                            name:"link",
                            type:"string"
                        },
                    ]
                },
            ]
        },
    ]
}
