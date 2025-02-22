export default {
    name: "actionCards",
    label: "Action Cards",
    type: "object",
    list: true,
    fields: [
        {
            label:"Action Card",
            name:"actionCard",
            type:"object",
            list: true,
            ui: {
                itemProps (item) {
                    return { label: item?.cardTitle || "Action Card" }
                },
                defaultItem: {
                    "cardTitle": "Want to work outside?",
                    "actionText": "Work in the outdoors with industry professionals and gain practical experience in numerous fields!\n",
                    "actionCall": {
                        "label": "Join",
                        "link": "./work"
                    }
                }
            },
            fields:[
                {
                    label:"Action Icon",
                    name: "actionIcon",
                    type: "image"
                },
                {
                    label: "Action Card Title",
                    name: "cardTitle",
                    type: "string"
                },
                {
                    label: "Action Text",
                    name:"actionText",
                    type: "rich-text"
                },
                {
                    label:"Call to Action",
                    name:"actionCall",
                    type:"object",
                    ui:{
                        defaultItem:{
                            label:"Home!",
                            link:"/"
                        },
                    },
                    fields:[
                        {
                            label:"Action Call",
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
