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
        }
    ]
}
