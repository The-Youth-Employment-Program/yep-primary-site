export default {
    name:"textBox",
    label: "Text Box",
    ui: {
        itemProps (item) {
            return { label: item?.sectionTitle || "Text Section" }
        }
    },
    fields:[
        {
            type: "string",
            label: "Section Title",
            name: "sectionTitle",
            description: "Optional name for this page section"
        },
        {
            type:"rich-text",
            label:"Section Text",
            name:"sectionText"
        }
    ]
}
