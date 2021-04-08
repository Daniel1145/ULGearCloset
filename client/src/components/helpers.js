export const WeightUnits = [
    { value: "oz", label: "oz"},
    { value: "lbs", label: "lbs"},
    { value: "g", label: "g"},
    { value: "kg", label: "kg"},
]

export const EmptySelect = { value: "", label: ""}

export function convertWeight(weight, initialUnits, newUnits) {
    switch(initialUnits) {
        case 'g':
            switch(newUnits) {
                case 'g':
                    return weight;
                case 'kg':
                    return weight * 0.001;
                case 'oz':
                    return weight * 0.035274;
                case 'lbs':
                    return weight * 0.002205;
            }
        case 'kg':
            switch(newUnits) {
                case 'g':
                    return weight * 1000;
                case 'kg':
                    return weight;
                case 'oz':
                    return weight * 35.274;
                case 'lbs':
                    return weight * 2.20462;
            }
        case 'oz':
            switch(newUnits) {
                case 'g':
                    return weight * 28.3495;
                case 'kg':
                    return weight * 0.0283495;
                case 'oz':
                    return weight;
                case 'lbs':
                    return weight * 0.0625;
            }
        case 'lbs':
            switch(newUnits) {
                case 'g':
                    return weight * 453.592;
                case 'kg':
                    return weight * 0.453592;
                case 'oz':
                    return weight * 16;
                case 'lbs':
                    return weight;
            }
    }
}