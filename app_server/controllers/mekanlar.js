var express = require('express');
var router = express.Router();

const anaSayfa = function(req, res,next) {
    res.render('anasayfa',
     { "baslik": 'Anasayfa',
    "sayfaBaslik": {
    "siteAd" :"Mekanbul",
    "slogan": "Civardaki mekanları keşfet!"
},
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":"4",
            "adres":"Centrum Garden Avm",
            "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
            "mesafe":"10km"
        },
        {
            "ad":"Yemekhane",
            "puan":"1",
            "adres":"SDÜ Batı Kampüsü",
            "imkanlar":["Yemek","Pahalılık"],
            "mesafe":"1 km"
        },
        {
            "ad":"Isparta Havalimanı",
            "puan":"4",
            "adres":"Isparta",
            "imkanlar":["seyahat","yurtdışı"],
            "mesafe":"10 km"
        }

    ]
});
};

const mekanBilgisi = function(req, res) {
    res.render('mekanbilgisi', 
    { 
        "baslik": 'Mekan Bilgisi' ,
        "mekanBaslik":"Starbucks",
        "mekanDetay":{
            "ad":"Starbucks",
            "puan":"4",
            "adres":"Centrum Garden Avm",
            "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
        "saatler":[{

            "gunler":"Pazartesi-Cuma",
            "acilis":"7:00",
            "kapanis":"23:00",
            "kapali": false

        },
        {

            "gunler":"Cumartesi-Pazar",
            "acilis":"09:00",
            "kapanis":"22:00",
            "kapali": false

        },

            
            

        ],
        "koordinatlar":{
            "enlem":"37.78",
            "boylam":"30.56"

        },
        "yorumlar":[
            {
                "yorumYapan":"Enes Arısoy",
                "puan":"4",
                "tarih":"22 Ekim 2021",
                "yorumMetni":"iyi iyi",
            }
        ]
      }
}
);
};

const yorumEkle = function(req, res) {
    res.render('yorumekle', { title: 'Yorum Sayfası' });
};



module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}