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
                    }
                ]
            }
        ]
}
