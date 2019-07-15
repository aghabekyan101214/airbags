const cars = [
    {
        img: "acura.png",
        phone: "001-888-234-2138",
        url: "http://recalls.acura.com/",
        name: "Acura",
        makes: [
            "2003 Acura 3.2CL",
            "2002-2003 Acura 3.2TL",
            "2013-2016 Acura ILX",
            "2013-2014 Acura ILX Hybrid",
            "2003-2006 Acura MDX",
            "2007-2016 Acura RDX",
            "2005-2012 Acura RL",
            "2009-2014 Acura TL",
            "2009-2014 Acura TSX",
            "2010-2013 Acura ZDX"
        ]
    },
    {
        img: "audi.png",
        phone: "001-800-253-2834",
        url: "http://audiusa.com/recall",
        name: "Audi",
        makes: [
            "2006-2013 Audi A3",
            "2005-2008 Audi A4 Avant",
            "2006-2009 Audi A4 Cabriolet",
            "2005-2008 Audi A4 Sedan",
            "2010-2011 Audi A5 Cabriolet",
            "2003-2011 Audi A6 Avant",
            "2005-2011 Audi A6 Sedan",
            "2009-2012 Audi Q5",
            "2017 Audi R8",
            "2008 Audi RS 4 Cabriolet",
        ]
    },
    {
        img: "bmw.png",
        phone: "001-844-504-4340",
        url: "https://www.bmwusa.com/safety-and-emission-recalls.html",
        name: "BMW",
        makes: [
            "2008-2013 BMW 1 Series",
            "2000-2013 BMW 3 Series",
            "2002-2003 BMW 5 Series",
            "2011-2015 BMW X1",
            "2007-2010 BMW X3",
            "2003-2013 BMW X5",
            "2008-2014 BMW X6",
            "2010-2011 BMW X6 Hybrid"
        ]
    },
    {
        img: "cadillac.png",
        phone: "001-800-458-8006",
        url: "https://my.cadillac.com/recalls/",
        name: "Cadillac",
        makes: [
            "2007-2014 Cadillac Escalade",
            "2007-2014 Cadillac Escalade ESV",
            "2007-2013 Cadillac Escalade EXT"
        ]
    },
    {
        img: "chevrolet.png",
        phone: "001-800-630-2438",
        url: "http://my.gm.com/recalls",
        name: "Chevrolet",
        makes: [
            "2007-2013 Chevrolet Avalanche",
            "2007-2014 Chevrolet Silverado HD",
            "2007-2013 Chevrolet Silverado LD",
            "2007-2014 Chevrolet Suburban",
            "2007-2014 Chevrolet Tahoe"
        ]
    },
    {
        img: "chrysler.png",
        phone: "001-833-585-0144",
        url: "https://www.mopar.com/en-us/my-vehicle/recalls/search.html",
        name: "Chrysler",
        makes: [
            "2005-2015 Chrysler 300",
            "2007-2009 Chrysler Aspen",
            "2007-2008 Chrysler Crossfire",

        ]
    },
    {
        img: "sterling_bullet.png",
        phone: "001-800-385-4357",
        url: "https://alliancetruckparts.com/sterling",
        name: "Daimler Trucks North America (Sterling Bullet)",
        makes: [
            "2008-2009 Sterling Bullet",
        ]
    },
    {
        img: "sprinter.png",
        phone: "001-877-762-8267",
        url: "https://www.mbvans.com/sprinter/owners-",
        name: "Daimler Vans USA LLC (Sprinter)",
        makes: [
            "2007-2009 Dodge Sprinter",
            "2007-2017 Freightliner Sprinter",
            "2010-2017 Mercedes-Benz Sprinter"
        ]
    },
    {
        img: "dodge.png",
        phone: "001-833-585-0144",
        url: "https://www.mopar.com/en-us/my-vehicle/recalls/search.html",
        name: "Dodge/Ram",
        makes: [
            "2008-2014 Dodge Challenger",
            "2006-2015 Dodge Charger",
            "2005-2011 Dodge Dakota",
            "2004-2009 Dodge Durango",
            "2005-2008 Dodge Magnum",
            "2003-2008 Dodge Ram 1500/2500/3500 Pickup",
            "2005-2009 Dodge Ram 2500 Pickup",
            "2007-2010 Dodge Ram 3500 Cab Chassis",
            "2006-2009 Dodge Ram 3500 Pickup",
            "2008-2010 Dodge Ram 4500/5500 Cab Chassis"
        ]
    },
    {
        img: "ferrari.png",
        phone: "001-201-816-2668",
        url: "https://auto.ferrari.com/en_US/owners/recall-campaign/",
        name: "Ferrari",
        makes: [
            "2010-2015 Ferrari 458 Italia",
            "2014-2015 Ferrari 458 Speciale",
            "2015 Ferrari 458 Speciale A",
            "2012-2015 Ferrari 458 Spider",
            "2016-2017 Ferrari 488 GTB",
            "2016-2017 Ferrari 488 Spider",
            "2009-2014 Ferrari California",
            "2015-2017 Ferrari California T",
            "2013-2017 Ferrari F12",
            "2016-2017 Ferrari F12 tdf",
            "2016 Ferrari F60",
            "2012-2016 Ferrari FF",
            "2017 Ferrari GTC4Lusso",

        ]
    },
    // {
    //     img: "fisker.png",
    //     phone: "",
    //     url: "",
    //     name: "Fisker",
    //     makes: [
    //         "2012 Fisker Karma"
    //     ]
    // },
    {
        img: "ford.png",
        phone: "001-866-436-7332",
        url: "https://owner.ford.com/service/what-you-need-to-know-about-the-",
        name: "Ford",
        makes: [
            "2007-2010 Ford Edge",
            "2006-2012 Ford Fusion",
            "2005-2006 Ford GT",
            "2005-2014 Ford Mustang",
            "2004-2011 Ford Ranger",
        ]
    },
    {
        img: "gmc.png",
        phone: "001-866-996-9463",
        url: "https://my.gm.com/recalls",
        name: "GMC",
        makes: [
            "2007-2014 GMC Sierra HD",
            "2007-2013 GMC Sierra LD",
            "2007-2014 GMC Yukon",
            "2007-2014 GMC Yukon XL",
        ]
    },
    {
        img: "honda.png",
        phone: "001-888-234-2138",
        url: "https://owners.honda.com/service-maintenance/recalls",
        name: "Honda",
        makes: [
            "2001-2012 Honda Accord",
            "2001-2011 Honda Civic",
            "2003-2011 Honda Civic Hybrid",
            "2001-2011 Honda Civic NGV",
            "2010-2015 Honda Crosstour",
            "2002-2011 Honda CR-V",
            "2011-2015 Honda CR-Z",
            "2003-2011 Honda Element",
            "2010-2014 Honda FCX Clarity",
            "2007-2013 Honda Fit",
            "2013-2014 Honda Fit EV",
            "2010-2014 Honda Insight",
            "2002-2004 Honda Odyssey",
            "2003-2015 Honda Pilot",
            "2006-2014 Honda Ridgeline",
        ]
    },
    {
        img: "infiniti.png",
        phone: "001-888-387-5947",
        url: "https://www.infinitiusa.com/takata-airbag-recall.html",
        name: "Infiniti",
        makes: [
            "2003-2008 Infiniti FX",
            "2001 Infiniti I30",
            "2002-2004 Infiniti I35",
            "2006-2010 Infiniti M",
            "2002-2003 Infiniti QX4",
        ]
    },
    {
        img: "jaguar.png",
        phone: "001-800-452-4827",
        url: "https://www.jaguarusa.com/owners/airbag-recall/index.html",
        name: "Jaguar",
        makes: [
            "2009-2015 Jaguar XF"
        ]
    },
    {
        img: "jeep.png",
        phone: "001-833-585-0144",
        url: "001-833-585-0144",
        name: "Jeep",
        makes: [
            "2007-2016 Jeep Wrangler"
        ]
    },
    {
        img: "land_rover.png",
        phone: "001-833-585-0144",
        url: "https://www.landroverusa.com/ownership/airbag-recall/index.html",
        name: "Land Rover",
        makes: [
            "2007-2012 Land Rover Range Rover"
        ]
    },
    {
        img: "lexus.png",
        phone: "001-800-255-3987",
        url: "https://www.toyota.com/recall",
        name: "Lexus",
        makes: [
            "2007-2012 Lexus ES350",
            "2010-2017 Lexus GX460",
            "2006-2013 Lexus IS250/350",
            "2010-2015 Lexus IS250C/350C",
            "2008-2014 Lexus IS F",
            "2012 Lexus LFA",
            "2002-2010 Lexus SC430",
        ]
    },
    {
        img: "lincoln.png",
        phone: "001-800-521-4140",
        url: "https://owner.lincoln.com/service/frequently-asked-questions-",
        name: "Lincoln",
        makes: [
            "2007-2010 Lincoln MKX",
            "2006-2012 Lincoln Zephyr/MKZ",
        ]
    },
    {
        img: "mazda.png",
        phone: "001-800-222-5500",
        url: "https://www.mazdarecallinfo.com/",
        name: "Mazda",
        makes: [
            "2004-2009 Mazda B-Series",
            "2007-2012 Mazda CX-7",
            "2007-2015 Mazda CX-9",
            "2003-2011 Mazda6",
            "2006-2007 Mazda Mazdaspeed6",
            "2004-2006 Mazda MPV",
            "2004-2011 Mazda RX-8",

        ]
    },
    // {
    //     img: "mclaren.png",
    //     phone: "",
    //     url: "",
    //     name: "McLaren",
    //     makes: [
    //         "2016-2017 McLaren 570",
    //         "2015-2016 McLaren 650S",
    //         "2016 McLaren 675LT",
    //         "2012-2014 McLaren MP4-12C",
    //         "2011-2015 McLaren P1",
    //     ]
    // },
    {
        img: "mercedes.png",
        phone: "001-877-496-3691",
        url: "https://www.mbusa.com/mercedes/recall",
        name: "Mercedes-Benz",
        makes: [
            "2005-2014 Mercedes-Benz C-Class",
            "2010-2011 Mercedes-Benz E-Class",
            "2011-2017 Mercedes-Benz E-Class Cabrio",
            "2010-2017 Mercedes-Benz E-Class Coupe",
            "2009-2012 Mercedes-Benz GL-Class",
            "2010-2015 Mercedes-Benz GLK-Class",
            "2009-2010 Mercedes-Benz ML-Class",
            "2009-2012 Mercedes-Benz R-Class",
            "2007-2008 Mercedes-Benz SLK-Class",
            "2011-2015 Mercedes-Benz SLS-Class",

        ]
    },
    {
        img: "mercury.png",
        phone: "0001-866-436-7332",
        url: "https://owner.ford.com/service/what-you-need-to-know-about-",
        name: "Mercury",
        makes: [
            "2006-2011 Mercury Milan"
        ]
    },
    {
        img: "mitsubishi.png",
        phone: "001-655-681-6147",
        url: "https://www.mitsubishicars.com/recall",
        name: "Mitsubishi",
        makes: [
            "2012-2017 Mitsubishi i-MiEV",
            "2004-2007 Mitsubishi Lancer",
            "2004-2006 Mitsubishi Lancer Evolution",
            "2004 Mitsubishi Lancer Sportback",
            "2006-2009 Mitsubishi Raider",

        ]
    },
    {
        img: "nissan.png",
        phone: "001-888-546-1048",
        url: "https://www.nissanusa.com/takata-airbag-recall.html",
        name: "Nissan",
        makes: [
            "2001-2003 Nissan Maxima",
            "2002-2004 Nissan Pathfinder",
            "2002-2006 Nissan Sentra",
            "2007-2012 Nissan Versa",
        ]
    },
    {
        img: "pontiac.png",
        phone: "001-800-620-7668",
        url: "https://my.gm.com/recalls",
        name: "Pontiac",
        makes: [
            "2003-2010 Pontiac Vibe"
        ]
    },
    {
        img: "saab.png",
        phone: "001-800-955-9007",
        url: "https://my.gm.com/recalls",
        name: "Saab",
        makes: [
            "2005-2006 Saab 9-2x",
            "2006-2011 Saab 9-3",
            "2006-2009 Saab 9-5",
        ]
    },
    {
        img: "saturn.png",
        phone: "001-800-972-8876",
        url: "https://my.gm.com/recalls",
        name: "Saturn",
        makes: [
            "2008-2009 Saturn Astra"
        ]
    },
    {
        img: "scion.png",
        phone: "001-800-331-4331",
        url: "https://www.toyota.com/recall",
        name: "Scion",
        makes: [
            "2008-2015 Scion XB"
        ]
    },
    {
        img: "subaru.png",
        phone: "001-0844-373-6614",
        url: "https://www.subaru.com/vehicle-recalls.html",
        name: "Subaru",
        makes: [
            "2003-2006 Subaru Baja",
            "2009-2013 Subaru Forester",
            "2004-2011 Subaru Impreza (Including WRX/STI)",
            "2003-2014 Subaru Legacy",
            "2003-2014 Subaru Outback",
            "2006-2014 Subaru Tribeca",
            "2012-2014 Subaru WRX/STI",
        ]
    },
    {
        img: "tesla.png",
        phone: "001-877-798-3752",
        url: "https://www.tesla.com/vin-recall-search",
        name: "Tesla",
        makes: [
            "2012-2016 Tesla Model S"
        ]
    },
    {
        img: "toyota.png",
        phone: "001-800-331-4331",
        url: "https://www.toyota.com/recall",
        name: "Toyota",
        makes: [
            "2010-2016 Toyota 4Runner",
            "2003-2013 Toyota Corolla",
            "2003-2008 Toyota Corolla Matrix",
            "2009-2013 Toyota Matrix",
            "2004-2005 Toyota Rav4",
            "2002-2006 Toyota Sequoia",
            "2011-2014 Toyota Sienna",
            "2003-2006 Toyota Tundra",
            "2006-2011 Toyota Yaris (Hatch Back)",
            "2007-2012 Toyota Yaris (Sedan)",
        ]
    },
    {
        img: "volkswagen.png",
        phone: "001-800-893-5298",
        url: "https://www.vw.com/owners/recalls/",
        name: "Volkswagen",
        makes: [
            "2009-2017 Volkswagen CC",
            "2010-2014 Volkswagen Eos",
            "2010-2014 Volkswagen Golf",
            "2013 Volkswagen Golf R",
            "2009-2013 Volkswagen GTI",
            "2012-2014 Volkswagen Passat",
            "2006-2010 Volkswagen Passat Sedan",
            "2006-2010 Volkswagen Passat Wagon",

        ]
    },

];
 export default cars
