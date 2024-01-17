export default {
    name:"employee",
    label: "Employee",
    type:"object",
    fields:[
        {
            name:"name",
            label:"Full Name",
            type:"string",
            isTitle:true,
            required:true,
        },
        {
            name:"image",
            label:"Employee Photo",
            type:"image",
        },
        {
            name:"position",
            label:"Employee Position",
            type:"string",
        },
        {
            name:"blurb",
            label:"Employee Bio",
            description:"A short biography, describing the employee",
            type:"string",
        },
    ]
}