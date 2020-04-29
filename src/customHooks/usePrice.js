const usePrice = (house) => {

    let price = 0,
        square = 0,
        roofSquare = 0,
        step1 = 0,
        step2 = 0,
        step3 = 0,
        step4 = 0,

        koef = {
        square: 1100,
        mansard: 0.3,
        interior: {
            drywall: 370,
            osb: 370,
            lining: 390,
            square: 1.8
        },
        exterior: {
            lining: 390,
            osb: 370,
            siding: 370
        },
        roof: {
            soft: 700,
            profnastil: 650,
            metal: 590,
            square: 1.1,
            geometry: 0.1
        }
    }

    if (house.step1.homeWidth && 
        house.step1.homeHeight && 
        house.step1.homeLength) 
    {
        square = ((house.step1.homeWidth * house.step1.homeHeight) * 2 +
                (house.step1.homeLength * house.step1.homeHeight) * 2);
        step1 = square * koef.square;
    }


    if ( Object.values( house.step2 ).filter( el => el.value ).length ) {

        step2 = (square * koef.interior.square) * 
                koef.interior[ Object.entries( house.step2 ).filter( el => el[1].value )[0][0] ];

    }


    if ( Object.values( house.step3 ).filter( el => el.value ).length ) {

        step3 = square * koef.exterior[ Object.entries( house.step3 ).filter( el => el[1].value )[0][0] ];

    }


    if ( Object.values( house.step4.roofMaterial ).filter( el => el.value ).length ) {

        roofSquare = house.step1.homeLength * house.step1.homeLength;

        step4 = roofSquare * koef.roof.square * 
                koef.roof[ Object.entries( house.step4.roofMaterial ).filter( el => el[1].value )[0][0] ] +
                (roofSquare * koef.roof.square * 
                koef.roof[Object.entries(house.step4.roofMaterial).filter(el => el[1].value)[0][0]] *
                (koef.roof.geometry * house.step4.roofGeometry));

    }


    price = (step1 + step2 + step3 + step4) * house.step1.countFloors + 
            (step1 + step2 + step3 + step4) * (house.step1.mansard * koef.mansard)

    return price;
} 

export default usePrice;