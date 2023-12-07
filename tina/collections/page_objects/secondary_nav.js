export default {
        name:"secondary_nav",
        label: "Secondary Navigation",
        fields:[
            {
                label:"Navigation Entry",
                name:"navigation_entry",
                type:"object",
                list:true,
                ui: { //fix this display issue
                    itemProps (item) {
                        return { label: item?.child_pages?.page_title || "Page Navigation Item" }
                    }
                },
                fields:[
                    {
                        label:"Navigation Pages",
                        name:"child_pages",
                        description:"Select new pages to include in the navigation for this page",
                        type:"reference",
                        collections:["page"]
                        //option select with available pages set as { page_name, page_path }
                    }
                ]
            }
        ]
}
