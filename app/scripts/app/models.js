var modelData = {
    mainView:{
        title:{
          level1:"Пластиковые ОКНА",
          level2:"от производителя"  
        },        
        description:"Срок изготовления от 5 дней"
    },
    window:{
        title:{
            main:"Заполните форму",
            others:"чтобы заказать звонок",
        },
        isSend:{
            main:"Спасибо!",
            others:"Ваша заявка отправлена",
            description:"Наш менеджер свяжется с вами"
        },
        calculation:{
            step:[
                { 
                    title: "Выберите тип окна:", 
                    list: [ 
                        { images: ["win-item4.png"] },
                        { images: ["win-item2.png", "win-item1.png"] },
                        { images: ["win-item3.png"] },
                     ]
                },
                { 
                    title: "Укажите размеры:", 
                    dimensions:["Высота (мм):", "Ширина (мм):"]                    
                },
                { 
                    title: "Дополнительно:", 
                    list:["Отливы", "Подоконник","Монтаж","Пластиковые откосы"]                    
                }                
            ]
        }
    },
    contacts:{
        phone:"(4852) 58 40 38",
        address:"г. Витебск, Московский проспект, д. 30",
        signature:"© 2016. TopSnab",
        logotype:"Изготовление и монтаж пластиковых окон и дверей в Москве и МО"
    },
    catalog:{
        title:"Каталог дверей",
        button:"Скачать каталог",
        download:"http://8.pechenki.com.ua/6/app.zip",
        list:[
            { image:"door.png", title:"Тёплая дверь", description:"Минплита. Толщина полотна — 70 мм, покрытие комби — Полимер/8мм МДФ цвет: Ель Карпатская, открывание 180°, петли наружные, 2 замка ZIRH KILIT. Верхний сувальдный, нижний цилиндрический. Раздельная ручка", price:"450 000 руб."},
            { image:"door.png", title:"Тёплая дверь", description:"Минплита. Толщина полотна — 70 мм, покрытие комби — Полимер/8мм МДФ цвет: Ель Карпатская, открывание 180°, петли наружные, 2 замка ZIRH KILIT. Верхний сувальдный, нижний цилиндрический. Раздельная ручка", price:"450 000 руб."},
            { image:"door.png", title:"Тёплая дверь", description:"Минплита. Толщина полотна — 70 мм, покрытие комби — Полимер/8мм МДФ цвет: Ель Карпатская, открывание 180°, петли наружные, 2 замка ZIRH KILIT. Верхний сувальдный, нижний цилиндрический. Раздельная ручка", price:"450 000 руб."},
            { image:"door.png", title:"Тёплая дверь", description:"Минплита. Толщина полотна — 70 мм, покрытие комби — Полимер/8мм МДФ цвет: Ель Карпатская, открывание 180°, петли наружные, 2 замка ZIRH KILIT. Верхний сувальдный, нижний цилиндрический. Раздельная ручка", price:"450 000 руб."},
            { image:"door.png", title:"Тёплая дверь", description:"Минплита. Толщина полотна — 70 мм, покрытие комби — Полимер/8мм МДФ цвет: Ель Карпатская, открывание 180°, петли наружные, 2 замка ZIRH KILIT. Верхний сувальдный, нижний цилиндрический. Раздельная ручка", price:"450 000 руб."},
            { image:"door.png", title:"Тёплая дверь", description:"Минплита. Толщина полотна — 70 мм, покрытие комби — Полимер/8мм МДФ цвет: Ель Карпатская, открывание 180°, петли наружные, 2 замка ZIRH KILIT. Верхний сувальдный, нижний цилиндрический. Раздельная ручка", price:"450 000 руб."}            
        ]
    },
    form:{
        textButton:"Отправить",
        head:["Оставьте заявку", "на бесплатный замер","и получите подарок"],
        text:
        {
            firstName:"Имя",
            phone:"Телефон"
        },
        wellCall:"Заказать звонок"
    },
    services:[
        { image:"car.png", text: "Беспланый выезд замерщика"},
        { image:"guarante.png", text: "Гарантия 4 года на все работы"},
        { image:"letters.png", text: "Свой штат специалистов"},
        { image:"box.png", text: "Широкий выбор комплектаций"},
        { image:"pazle.png", text: "Комплексный подход"}
    ],
    menu:[
        { name:"Типовые решения", link:"#solutions"},
        { name:"Что мы делаем", link:"#whatDoing"},
        { name:"Как мы работаем", link:"#stepWork"}
    ],
    weDoing:{
        title:"Что мы делаем?",
        button:"Заказать звонок",
        list:[
            "Остекление квартир, балконов и лоджий",
            "Остекление нестандартных оконных проемов",
            "Остекление коттеджей и загородных домов",
            "Изготовление и установка пластиковых дверей"
        ]
    },
    solutions:{
        title:"Типовые решения",
        button:"Рассчитать стоимость",
        list:
        [
            { title:"Двустворчатое окно", image:"window3.png" },
            { title:"Трехстворчатое окно", image:"window2.png" },
            { title:"Балконный блок", image:"window1.png" }
        ]
    },
    stepWork:{
        title:"Как мы работаем?",
        list:[
            { image:"slide1.png", title:"ВЫ ОСТАВЛЯЕТЕ ЗАЯВКУ", description:"Наш вежливый менеджер сам перезвонит вам и ответит на ваши вопросы" },
            { image:"slide2.png", title:"ПРОИЗВОДИМ ЗАМЕРЫ", description:"Наш специалист бесплатно произведёт все замеры в удобное для вас время" },
            { image:"slide3.png", title:"ПРОИЗВОДСТВО ОКНА", description:"Мы сразу запускаем заказ в производство. Изделия будут готовы через 2-5 дней" },
            { image:"slide4.png", title:"ДОСТАВКА И МОНТАЖ", description:"Наши специалисты вовремя доставят и в течение дня установят все окна. Чистота и порядок гарантированы" },
            { image:"slide5.png", title:"НАЧАЛО ЭКСПЛУАТАЦИИ", description:"Вы получите красиво и аккуратно установленные окна с гарантией герметичности и стабильности конструкции" }
        ]
    },
    listWorks:{
        title:"Наши работы",
        list:[
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" },
            { image:"work-slide1.png", description:"Балкон и балконный блок" }
        ]
    },
    office:{
        title:"НАШИ ОФИСЫ",
        description:{
            main:"ПРОДАЖА, МОНТАЖ И ОБСЛУЖИВАНИЕ ПЛАСТИКОВЫХ ОКОН С 5-ЛЕТНЕЙ ГАРАНТИЕЙ НАПРЯМУЮ ОТ ПРОИЗВОДИТЕЛЯ",
            others: "От замера до готового окна - от 10 дней Бесплатная доставка и монтаж точно в срок"
        },
        contact:"г. Витебск, Московский проспект, д. 30"
    }
    
}