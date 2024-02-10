export default {
    name:"leftImage",
    label: "Left Image",
    type:"object",
    ui:{
        defaultItem:{mainText:"Lorem Ipsum",image:"/uploads/tina.jpeg"}
    },
    fields:[
        {
            label:"Text",
            name:"mainText",
            type:"string",
            ui:{ component: "textarea"}
        },
        {
            label:"Image",
            name:"image",
            type:"image",
            description:"This image will display to the left of the text",
        },
        {
            label:"Title",
            description:"optional",
            name:"title",
            type:"string"
        },
        {
            label:"Page Link",
            name:"pageLink",
            type:"object",
            ui:{
                defaultItem:{
                    label:"Home!",
                    link:"/"
                },
            },
            fields:[
                {
                    label:"Call to Action",
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
    ]
}
