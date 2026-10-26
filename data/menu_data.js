// Deli Napolitan Menu Data
window.MENU_DATA = {
  "restaurant": {
    "name": "deli. napolitan",
    "tagline": {
      "tr": "neo-neapolitan recipes with local delicatessen",
      "en": "neo-neapolitan recipes with local delicatessen"
    },
    "note": {
      "tr": "Fiyatlarımız TL ve KDV dahildir.",
      "en": "All prices are in TL and include VAT."
    },
    "date": "14.06.2026",
    "logo": "assets/logo.png",
    "primaryColor": "#31543e",
    "accentColor": "#f5f5dc",
    "defaultProductImage": "assets/product_placeholder.jpg",
    "lastUpdated": "2026-10-26"
  },
  "categories": [
    {
      "id": "ortaya",
      "name": {
        "tr": "Ortaya",
        "en": "To Share"
      },
      "image": "assets/cat_ortaya.jpg",
      "description": {
        "tr": "paylaşımlık mezeler ve salatalar",
        "en": "Artisanal appetizers & salads to share"
      }
    },
    {
      "id": "corba",
      "name": {
        "tr": "Çorba",
        "en": "Soups"
      },
      "image": "assets/cat_corba.jpg",
      "description": {
        "tr": "Taze günlük çorbalar",
        "en": "Freshly prepared daily soups"
      }
    },
    {
      "id": "pizza",
      "name": {
        "tr": "Pizza",
        "en": "Pizza"
      },
      "image": "assets/cat_pizza.jpg",
      "description": {
        "tr": "Taş fırında pişen neo-napolitan pizzalar",
        "en": "Stone oven baked neo-neapolitan pizzas"
      }
    },
    {
      "id": "tatli",
      "name": {
        "tr": "Tatlı",
        "en": "Desserts"
      },
      "image": "assets/cat_tatli.jpg",
      "description": {
        "tr": "Geleneksel İtalyan tatlıları",
        "en": "Traditional Italian dolce"
      }
    },
    {
      "id": "icecek",
      "name": {
        "tr": "İçecek",
        "en": "Beverages"
      },
      "image": "assets/cat_icecek.jpg",
      "description": {
        "tr": "Soğuk meşrubatlar ve yerel lezzetler",
        "en": "Cold refreshments & local drinks"
      }
    }
  ],
  "items": [
    {
      "id": "ortaya-1",
      "categoryId": "ortaya",
      "name": {
        "tr": "taze peynirli zeytin salatası",
        "en": "fresh cheese & olive bowl"
      },
      "description": {
        "tr": "mihaliç taze kaymak peyniri, hatay kırma zeytin, pancar suyunda bekletilmiş kalamata zeytin, ızgara zeytin, zahter, balzamik sirke, zeytinyağı",
        "en": "fresh mihaliç cream cheese, hatay cracked olives, beet-cured kalamata, charred olives, zahter, balsamic, extra virgin olive oil"
      },
      "price": 390,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/ortaya-1.jpg",
      "allergens": [
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "ortaya-2",
      "categoryId": "ortaya",
      "name": {
        "tr": "humus",
        "en": "hummus"
      },
      "description": {
        "tr": "ankara çubuk turşu ile servis edilir",
        "en": "silky chickpea purée, served with ankara pickled gherkins"
      },
      "price": 280,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/ortaya-2.jpg",
      "allergens": [
        {
          "code": "sesame",
          "tr": "Susam / Tahin",
          "en": "Sesame"
        }
      ]
    },
    {
      "id": "ortaya-3",
      "categoryId": "ortaya",
      "name": {
        "tr": "tulum peynirli armutlu roka salatası",
        "en": "tulum cheese, pear & arugula salad"
      },
      "description": {
        "tr": "yaban mersinli erzincan tulum, armut, roka, balzemik sirke, zeytinyağı",
        "en": "wild blueberry erzincan tulum cheese , ripe pear, arugula, balsamic, extra virgin olive oil"
      },
      "price": 320,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/ortaya-3.jpg",
      "allergens": [
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "corba-1",
      "categoryId": "corba",
      "name": {
        "tr": "kemik suyuna mercimek",
        "en": "bone broth lentil soup"
      },
      "description": {
        "tr": "kemik suyu ile ağır ateşte demlenmiş geleneksel kırmızı mercimek çorbası",
        "en": "slow-simmered bone broth traditional red lentil soup"
      },
      "price": 180,
      "spicy": 0,
      "badge": {
        "tr": "hafta içi",
        "en": "hafta içi"
      },
      "image": "assets/products/corba-1.jpg",
      "allergens": []
    },
    {
      "id": "corba-2",
      "categoryId": "corba",
      "name": {
        "tr": "kremalı mantar",
        "en": "creamy mushroom soup"
      },
      "description": {
        "tr": "kremalı mantar çorbası",
        "en": "creamy mushroom soup"
      },
      "price": 220,
      "spicy": 0,
      "badge": {
        "tr": "hafta sonu",
        "en": "hafta sonu"
      },
      "image": "assets/products/corba-2.jpg",
      "allergens": [
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-1",
      "categoryId": "pizza",
      "name": {
        "tr": "margherita",
        "en": "margherita"
      },
      "description": {
        "tr": "domates sos, fior di latte mozarella, fesleğen, sızma zeytinyağı",
        "en": "tomato sauce, fior di latte mozzarella, basil, evo"
      },
      "price": 540,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-1.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-2",
      "categoryId": "pizza",
      "name": {
        "tr": "margherita v2",
        "en": "margherita v2"
      },
      "description": {
        "tr": "domates sos, scarmorza isli italyan peyniri, fesleğen, sızma zeytinyağı",
        "en": "tomato sauce, smoked scamorza, basil, evo"
      },
      "price": 690,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-2.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-3",
      "categoryId": "pizza",
      "name": {
        "tr": "marinara",
        "en": "marinara"
      },
      "description": {
        "tr": "domates sos, trıaş sarımsak, yarı kurutulmuş çeri domates, fesleğen, sızma zeytinyağı",
        "en": "tomato sauce, shaved garlic, semi-dried cherry tomatoes, basil, evo"
      },
      "price": 510,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-3.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        }
      ]
    },
    {
      "id": "pizza-4",
      "categoryId": "pizza",
      "name": {
        "tr": "marinara v2",
        "en": "marinara v2"
      },
      "description": {
        "tr": "domates sos, traş sarımsak, yarı kurutulmuş çeri domates, stracciatella italyan peyniri, fesleğen, sızma zeytinyağı",
        "en": "tomato sauce, shaved garlic, semi-dried cherry tomatoes, stracciatella, basil, evo"
      },
      "price": 620,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-4.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-5",
      "categoryId": "pizza",
      "name": {
        "tr": "diavola",
        "en": "diavola"
      },
      "description": {
        "tr": "domates sos, fior di latte mozarella, acılı kasap sucuk, rende parmesan, sızma zeytinyağı",
        "en": "tomato sauce, mozzarella, spicy butcher’s sucuk, grated parmesan, evo"
      },
      "price": 760,
      "spicy": 1,
      "badge": null,
      "image": "assets/products/pizza-5.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-6",
      "categoryId": "pizza",
      "name": {
        "tr": "üç peynirli",
        "en": "three cheese (tre formaggi)"
      },
      "description": {
        "tr": "domates sos, fior di latte mozarella, danish blue küflü peynir, rende parmesan, yarı kurutulmuş çeri domates, sızma zeytinyağı",
        "en": "tomato sauce, mozzarella, danish blue, grated parmesan, semi-dried cherry tomatoes, evo"
      },
      "price": 710,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-6.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-7",
      "categoryId": "pizza",
      "name": {
        "tr": "kremalı isli üç peynirli",
        "en": "creamy smoked three cheese"
      },
      "description": {
        "tr": "krema taban, scarmorza isli italyan peyniri, erzurum isli peynir, rende parmesan, sızma zeytinyağı",
        "en": "cream base, smoked scamorza, smoked erzurum cheese, grated parmesan, evo"
      },
      "price": 740,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-7.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-8",
      "categoryId": "pizza",
      "name": {
        "tr": "ıspanak kremalı ızgara kabak",
        "en": "creamy spinach & grilled zucchini"
      },
      "description": {
        "tr": "ıspanaklı krema taban, fior di latte mozarella, ızgara kabak, rende olgun mihaliç peyniri, balzemik glaze sos, sızma zeytinyağı",
        "en": "Spinach cream base, fior di latte mozzarella, chargrilled zucchini, aged Mihaliç cheese, balsamic glaze, evo"
      },
      "price": 720,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-8.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-9",
      "categoryId": "pizza",
      "name": {
        "tr": "trüf krema mantar",
        "en": "truffle cream & mushroom"
      },
      "description": {
        "tr": "siyah sarımsak & trüf mantarlı krema sos, fior di latte mozarella, defne yaprağı ile tereyağında sotelenmiş kestane mantarı, kültür mantarı, roka, rende olgun mihaliç peyniri, sızma zeytinyağı",
        "en": "black garlic & truffle cream, fior di latte mozzarella\nbay-leaf butter chestnut mushrooms, button mushrooms, arugula, grated mihaliç cheese, evo"
      },
      "price": 720,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-9.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-11",
      "categoryId": "pizza",
      "name": {
        "tr": "bolonez",
        "en": "beef bolognese"
      },
      "description": {
        "tr": "muskat & karabiberli krema taban, fior di latte mozarella, dana kıymadan bolonez, yarı kurutulmuş çeri domates, fesleğen, sızma zeytinyağı",
        "en": "nutmeg & black pepper cream base, fior di latte mozzarella, beef bolognese, semi-dried cherry tomatoes, basil, evo"
      },
      "price": 720,
      "spicy": 0,
      "badge": {
        "tr": "günlük sınırlı üretim lütfen sorunuz",
        "en": "günlük sınırlı üretim lütfen sorunuz"
      },
      "image": "assets/products/pizza-11.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-12",
      "categoryId": "pizza",
      "name": {
        "tr": "biftek stroganoff",
        "en": "beef stroganoff"
      },
      "description": {
        "tr": "domatesli krema sos, fior di latte mozarella, kültür mantarı, marine edilmiş jülyen kesim antrikot, stroganoff sos, sızma zeytinyağı",
        "en": "tomato cream sauce, mozzarella, button mushrooms\nmarinated julienne ribeye, stroganoff sauce, evo"
      },
      "price": 790,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-12.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "item-1792964119409",
      "categoryId": "pizza",
      "name": {
        "tr": "sote karides",
        "en": "butter & tarragon shrimpes"
      },
      "description": {
        "tr": "domates & krema taban, fior di latte mozarella\ntereyağında tarhun otu ile sotelenmiş karides\nlimon zest, frenk maydanozu (lime ile servis edilir)",
        "en": "Creamy tomato base, fior di latte mozzarella, tender shrimp sautéed in butter with fresh tarragon, lemon zest, and chervil. Served with a lime wedge"
      },
      "price": 840,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/item-1792964119409.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        },
        {
          "code": "crustaceans",
          "tr": "Kabuklu Deniz Ürünleri",
          "en": "Crustaceans"
        }
      ]
    },
    {
      "id": "pizza-13",
      "categoryId": "pizza",
      "name": {
        "tr": "kasap sucuk",
        "en": "butcher's sucuk"
      },
      "description": {
        "tr": "domates sos, fior di latte mozarella, kasap sucuk, kırmızı soğan, yarı kurutulmuş çeri domates, rende mihaliç peynir, sızma zeytinyağı",
        "en": "tomato sauce, fior di latte mozzarella, butcher’s sucuk, red onion, semi-dried cherry tomatoes, grated mihaliç cheese, evo"
      },
      "price": 760,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-13.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "pizza-15",
      "categoryId": "pizza",
      "name": {
        "tr": "dana füme kaburga roka pesto",
        "en": "smoked beef ribs & arugula pesto"
      },
      "description": {
        "tr": "domates sos, fior di latte mozarella, dana füme kaburga, roka pesto, rende olgun mihaliç peyniri, sızma zeytinyağı",
        "en": "tomato sauce, fior di latte mozzarella\nsmoked beef rib, arugula pesto, aged mihaliç cheese, evo"
      },
      "price": 860,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-15.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "tatli-1",
      "categoryId": "tatli",
      "name": {
        "tr": "çilekli panna cotta",
        "en": "strawberry panna cotta"
      },
      "description": {
        "tr": "italyan muhallebisi, taze çilek püresi ve vanilya ile",
        "en": "traditional italian panna cotta, fresh strawberry coulis, madagascar vanilla"
      },
      "price": 320,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/tatli-1.jpg",
      "allergens": [
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "tatli-2",
      "categoryId": "tatli",
      "name": {
        "tr": "yaban mersinli panna cotta",
        "en": "blueberry panna cotta"
      },
      "description": {
        "tr": "italyan muhallebisi, orman yaban mersini sosu ile",
        "en": "traditional italian panna cotta with wild blueberry compote"
      },
      "price": 320,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/tatli-2.jpg",
      "allergens": [
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "tatli-3",
      "categoryId": "tatli",
      "name": {
        "tr": "pizza waffle",
        "en": "pizza waffle"
      },
      "description": {
        "tr": "nutella, çilek, muz, antep fıstık",
        "en": "stone oven waffle base, nutella, fresh strawberries, banana, crushed pistachios"
      },
      "price": 320,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/tatli-3.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        },
        {
          "code": "nuts",
          "tr": "Kuruyemiş / Fındık / Fıstık",
          "en": "Tree Nuts / Peanuts"
        }
      ]
    },
    {
      "id": "icecek-1",
      "categoryId": "icecek",
      "name": {
        "tr": "coca cola",
        "en": "coca cola"
      },
      "description": {
        "tr": "330ml kutu",
        "en": "330ml can"
      },
      "price": 114,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/icecek-1.jpg",
      "allergens": []
    },
    {
      "id": "icecek-2",
      "categoryId": "icecek",
      "name": {
        "tr": "cola zero",
        "en": "cola zero"
      },
      "description": {
        "tr": "330ml kutu",
        "en": "330ml can"
      },
      "price": 114,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/icecek-2.jpg",
      "allergens": []
    },
    {
      "id": "icecek-3",
      "categoryId": "icecek",
      "name": {
        "tr": "limonata",
        "en": "lemonade"
      },
      "description": {
        "tr": "limonata",
        "en": ""
      },
      "price": 94,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/icecek-3.jpg",
      "allergens": []
    },
    {
      "id": "icecek-4",
      "categoryId": "icecek",
      "name": {
        "tr": "özerhisar ayran",
        "en": "özerhisar ayran"
      },
      "description": {
        "tr": "özerhisar ayranı",
        "en": "özerhisar ayran"
      },
      "price": 114,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/icecek-4.jpg",
      "allergens": [
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "icecek-5",
      "categoryId": "icecek",
      "name": {
        "tr": "maden suyu",
        "en": "mineral water"
      },
      "description": {
        "tr": "200ml cam şişe doğal maden suyu",
        "en": "200ml glass bottle natural mineral water"
      },
      "price": 60,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/icecek-5.jpg",
      "allergens": []
    },
    {
      "id": "icecek-6",
      "categoryId": "icecek",
      "name": {
        "tr": "su",
        "en": "natural spring water"
      },
      "description": {
        "tr": "500ml",
        "en": "500ml"
      },
      "price": 30,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/icecek-6.jpg",
      "allergens": []
    },
    {
      "id": "pizza-16",
      "categoryId": "pizza",
      "name": {
        "tr": "antep fıstıklı pesto dana mortadella",
        "en": "beef mortadella & pistachio pesto"
      },
      "description": {
        "tr": "krema taban, fior di latte mozarella, dana mortadella salam, italyan ricotto peynir, antep fıstıklı pesto, file antep fıstık, sızma zeytinyağı",
        "en": "cream base, fior di latte mozzarella\nbeef mortadella, italian ricotta, pistachio pesto\ncrushed pistachios, evo"
      },
      "price": 790,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/pizza-16.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        },
        {
          "code": "nuts",
          "tr": "Kuruyemiş / Fındık / Fıstık",
          "en": "Tree Nuts / Peanuts"
        }
      ]
    },
    {
      "id": "item-1792964667286",
      "categoryId": "pizza",
      "name": {
        "tr": "acı biber reçelli dana brisket füme",
        "en": "sweet chili smoked brisket"
      },
      "description": {
        "tr": "domates taban, dana döş brisket füme\nstraccitaella italyan peyniri, meksika biber reçeli, limon zest",
        "en": "Tomato base, smoked beef brisket, creamy stracciatella, Mexican chili jam, lemon zest"
      },
      "price": 820,
      "spicy": 2,
      "badge": null,
      "image": "assets/products/item-1792964667286.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        },
        {
          "code": "milk",
          "tr": "Laktoz / Süt",
          "en": "Dairy / Lactose"
        }
      ]
    },
    {
      "id": "item-1792964412375",
      "categoryId": "pizza",
      "name": {
        "tr": "dana dil füme",
        "en": "dana dil füme"
      },
      "description": {
        "tr": "domates taban, fior di latte mozarella\nkekik, karabiber ve portakal kabuğu ile marine edilmiş dana dil füme rende olgun mihaliç peyniri, limon zest, frenk soğanı",
        "en": ""
      },
      "price": 840,
      "spicy": 0,
      "badge": null,
      "image": "assets/products/item-1792964412375.jpg",
      "allergens": [
        {
          "code": "gluten",
          "tr": "Gluten",
          "en": "Gluten"
        }
      ]
    }
  ]
};
