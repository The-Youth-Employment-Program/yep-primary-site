export default {
    name:"testimonials",
    label: "Testimonials",
    list:true,
    type:"object",
    fields:[
        {
            name:"testimonial",
            label:"Testimonials",
            list:true,
            type:"object",
            ui:{
                itemProps (item) { return {label:item?.testimonialAttribution || "Quote"}}
            },
            fields:[
                {
                    label:"Quote",
                    name:"testimonialQuote",
                    type:"string",
                    ui:{ component: "textarea"}
                },
                {
                    label:"Name",
                    name:"testimonialAttribution",
                    type:"string"
                },
                {
                    label:"Role",
                    name:"testimonialRole",
                    type:"string"
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
        },
        {
            label:"Accent Text Color",
            name: "accent_color",
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
        },
    ]
}
