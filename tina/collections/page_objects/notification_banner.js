export default {
        name:"notificationBanner",
        label: "Notification Banner",
        type:"object",
        fields:[
            {
                label:"Banner Text",
                description:"Notification banner text.",
                name:"bannerText",
                type:"string"
            },
            {
                label:"Activate Banner",
                name:"bannerActive",
                type:"boolean"
            },
            {
                label:"Link",
                name:"bannerButton",
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
                    },
                    {
                        label:"New Tab",
                        name:"newTab",
                        description:"Open link in new tab.",
                        type:"boolean"
                    }
                ]
            }
        ]
    }
