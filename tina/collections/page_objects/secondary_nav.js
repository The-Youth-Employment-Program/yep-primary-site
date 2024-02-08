export default {
        name:"secondaryNav",
        label: "Secondary Navigation",
        fields:[
            {
                label:"Navigation Entry",
                name:"navigationEntry",
                type:"object",
                list:true,
                ui: { //fix this display issue
                    itemProps (item) {
                        return { label: item?.childPages?.page?.pageTitle || "Page Navigation Item" }
                    }
                },
                fields:[
                    {
                        label:"Navigation Pages",
                        name:"childPages",
                        description:"Select new pages to include in the navigation for this page",
                        type:"reference",
                        collections:["page"]
                        //option select with available pages set as { page_name, page_path }
                    },
                    {
                        label:"Alternate Page",
                        name:"altPage",
                        description:"Override link with alternate page",
                        type:"object",
                        ui:{
                            itemProps (item) {
                                return { label: item?.label || "Button" }
                            }
                        },
                        fields:[
                            {
                                label:"Link Title",
                                name:"label",
                                type:"string"
                            },
                            {
                                label:"Link Page",
                                name:"link",
                                type:"string"
                            },
                            // {
                            //     label:"Open in New Tab",
                            //     name:"newTab",
                            //     description:"Recommended for external links.",
                            //     type:"boolean"
                            // }
                        ]
                    },
                ]
            }
        ]
}
