export const Frames = [
    { value: "Frame", label: "Frame"},
    { value: "Frameless", label: "Frameless"},
    { value: "Removable", label: "Removable"}
];

export const Hipbelts = [
    { value: "Hipbelt", label: "Hipbelt"},
    { value: "No Hipbelt", label: "No Hipbelt"},
    { value: "Removable", label: "Removable"}
]

export function multiExactFilter(filterVal, data, name) {
    if (filterVal.length !== 0) {
        return data.filter(item => {
            console.log(filterVal);
            console.log(item);
            return filterVal.includes(item[name])
        });
    }
    return data;
}