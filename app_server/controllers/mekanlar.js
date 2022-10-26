var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
   res.render('anasayfa',
      {
         "baslik": "Anasayfa",
         "sayfabaslik": {
            "siteAd": "Mekanbul",
            "slogan": "Civardaki Mekanları Keşfet"
         },
         "mekanlar": 
         [
            {
               "ad": "Starbucks",
               "puan": "3",
               "adres": "Centrum Garden AVM",
               "imkanlar": ["Kahve", "Tatlı", "Soğuk İçecekler"],
               "mesafe": "10km"
            },
            {
               "ad": "Mackbear",
               "puan": "4",
               "adres": "IYAŞ Market Arkası, İtfaiye'nin ilerisi",
               "imkanlar": ["Kahve", "Tatlı", "Su"],
               "mesafe": "9km"
            },
            {
               "ad": "Arabica",
               "puan": "1",
               "adres": "Lucca'nın karşısı",
               "imkanlar": ["Tatlı", "Kahve"],
               "mesafe": "11km"
            }
         ]
      }
      );
}

const mekanBilgisi = function (req, res, next) {
   res.render('mekanbilgisi',
      {
         "baslik": "Mekan Bilgisi",
         "mekanBaslik": "Starbucks",
         "mekanDetay": {
            "ad": "Starbucks",
            "puan": "3",
            "adres": "Centrum Garden AVM",
            "saatler": [
               {
                  "günler": "Pazartesi-Cuma",
                  "acilis": "7.30",
                  "kapanis": "00.00",
                  "kapali": false

               },
               {
                  "günler": "Cumartesi-Pazar",
                  "acilis": "9.30",
                  "kapanis": "23.00",
                  "kapali": false
               }
            ],
            "imkanlar": ["Kahve", "Tatlı", "Soğuk İçecekler"],
            "koordinatlar": {
               "enlem": "37.78113",
               "boylam": "30.54319"
            },
            "yorumlar": [
               {
                  "yorumYapan": "Volkan Ekici",
                  "yorumMetni": "Fena Değil",
                  "tarih": "24.10.2022",
                  "puan": "4"
               }

            ]
         }
         }
   );
};

const yorumEkle = function (req, res, next) {
   res.render('yorumekle', { title: 'Yorum Ekle' });
};

module.exports = {
   anaSayfa,
   mekanBilgisi,
   yorumEkle
}