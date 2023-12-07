export default {
    name:"adornment",
    type:"object",
    ui:{
        itemProps (item) {return{label:item?.adornmentName || "Floating Object"}}
    },
    fields:[
    {
        name:"adornmentName",
        label:"Object Name",
        type:"string",
    },
    {
        name:"height",
        label:"Image Height",
        type:"string"
    },
    {
        name:"width",
        label:"Image Width",
        type:"string"
    },
    {
        name:"offsetX",
        label:"X Offset",
        type:"string"
    },
    {
        name:"offsetY",
        label:"Y Offset",
        type:"string"
    }
    //Add an animation string option list to select preset animations?
    ]
}
