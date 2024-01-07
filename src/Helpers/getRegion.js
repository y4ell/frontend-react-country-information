// Africa: blauw
// Americas: groen
// Asia: rood
// Europe: geel
// Oceania: paars

// 1 de regio ophalen uit de api
// 2 verschillende regio's een verschillende classname geven
// 3 de classname in css de kleuren toewijzen


function getRegion(currentRegion) {
    switch (currentRegion) {
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'default';
    }
}

export default getRegion