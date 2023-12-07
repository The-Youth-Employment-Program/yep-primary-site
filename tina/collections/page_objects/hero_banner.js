export default {
        name:"hero_banner",
        label: "Hero Landing",
        type:"object",
        fields:[
            {
                label:"Hero Image",
                description:"Background image for the hero banner",
                name:"hero_image",
                type:"image"
            },
            {
                label:"Banner Text",
                name:"hero_text",
                type:"string",
                ui:{ component: "textarea"}
            },
            {
                label:"Action Call",
                name:"hero_button",
                type:"string"
            }
        ]
    }
