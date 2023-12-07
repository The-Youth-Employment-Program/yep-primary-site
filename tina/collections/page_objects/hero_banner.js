export default {
        name:"heroBanner",
        label: "Hero Landing",
        type:"object",
        fields:[
            {
                label:"Hero Image",
                description:"Background image for the hero banner",
                name:"heroImage",
                type:"image"
            },
            {
                label:"Banner Text",
                name:"heroText",
                type:"string",
                ui:{ component: "textarea"}
            },
            {
                label:"Link",
                name:"heroButton",
                type:"object",
                ui:{
                    defaultItem:{label:"Home!",link:"/",},
                    itemProps (item) {
                        return { label: item?.label || "Button" }
                    }
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
                    }
                ]
            }
        ]
    }
