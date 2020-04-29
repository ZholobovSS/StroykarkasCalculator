export default {
    step: {
        currentState: 1,
        values: ['Размеры', 'Интерьер', 'Экстерьер', 'Кровля', 'Отправить заявку'],
    },
    house: {
        step1: {
            homeWidth: 0,
            homeLength: 0,
            homeHeight: 0,
            countFloors: 1,
            mansard: 0,
        },
        step2: {
            drywall: {
                name: 'drywall',
                rusName: 'Гипсокартон',
                value: 0
            },
            osb: {
                name: 'OSB',
                rusName: 'OSB',
                value: 0
            },
            lining: {
                name: 'lining',
                rusName: 'Вагонка',
                value: 0
            },
        },
        step3: {
            siding: {
                name: 'siding',
                rusName: 'Сайдинг',
                value: 0,
            },
            osb: {
                name: 'OSB',
                rusName: 'OSB',
                value: 0
            },
            lining: {
                name: 'lining',
                rusName: 'Вагонка',
                value: 0
            },
        },
        step4: {
            roofGeometry: 0,
            roofMaterial: {
                soft: {
                    name: 'soft',
                    rusName: 'Мягкая черепица',
                    value: 0
                },
                profnastil: {
                    name: 'profnastil',
                    rusName: 'Профнастил',
                    value: 0,
                },
                metal: {
                    name: 'metal',
                    rusName: 'Металлопрофиль',
                    value: 0,
                },
            },
        },
        step5: {

        }
    },
    form: {
        userInfo: {
            userName: {
                name: 'userName',
                rusName: 'Ваше имя',
                value: '',
                valid: 0
            },
            userPhone: {
                name: 'userPhone',
                rusName: 'Ваше телефон',
                value: '',
                valid: 0
            },
            
        },
        formState: {
            sendStatus: {
                open: false,
                type: '',
                text: '',
            },
            sending: false,
            agree: 1,
        }
    },
    price: 0,

}