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
        },
        {
            label:"Text Alignment",
            name: "text_alignment",
            type:"string",
            list:false,
            options: [
                {
                    value:'text-left',
                    label:'Left Align'
                },
                {
                    value:'text-center',
                    label:'Center Align'
                },
                {
                    value:'text-right',
                    label:'Right Align'
                }
            ]
        },
        {
            label:"Background Color",
            name: "bg_color",
            type:"string",
            list:false,
            options: [
                {
                    value:'bg-salmon-tan',
                    label:'YEP Tan'
                },
                {
                    value:'bg-salmon-red',
                    label:'YEP Red'
                },
                {
                    value:'bg-salmon-green',
                    label:'YEP Green'
                },
                {
                    value:'bg-salmon-light-g1',
                    label:'Light Grey 1'
                },
                {
                    value:'bg-salmon-light-g2',
                    label:'Light Grey 2'
                },
                {
                    value:'bg-salmon-dark-g1',
                    label:'Dark Grey 1'
                },
                {
                    value:'bg-salmon-dark-g2',
                    label:'Dark Grey 2'
                }
            ]
        },
        {
            label:"Text Color",
            name: "text_color",
            type:"string",
            list:false,
            options: [
                {
                    value:'text-salmon-tan',
                    label:'YEP Tan'
                },
                {
                    value:'text-salmon-red',
                    label:'YEP Red'
                },
                {
                    value:'text-salmon-green',
                    label:'YEP Green'
                },
                {
                    value:'text-salmon-light-g1',
                    label:'Light Grey 1'
                },
                {
                    value:'text-salmon-light-g2',
                    label:'Light Grey 2'
                },
                {
                    value:'text-salmon-dark-g1',
                    label:'Dark Grey 1'
                },
                {
                    value:'text-salmon-dark-g2',
                    label:'Dark Grey 2'
                }
            ]
        }
    ]
}
