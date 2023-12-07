export default {
    name:"text_box",
    label: "Text Box",
    ui: {
        itemProps (item) {
            return { label: item?.section_title || "Text Section" }
        }
    },
    fields:[
        {
            type: "string",
            label: "Section Title",
            name: "section_title",
            description: "Optional name for this page section"
        },
        {
            type:"rich-text",
            label:"Section Text",
            name:"sectionText"
        }
    ]
}
