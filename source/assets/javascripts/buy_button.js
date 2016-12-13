(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'uncertaintybook.myshopify.com',
      apiKey: 'f18b314300f12f63e2970de61a8f883c',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [9148491843],
        node: document.getElementById('shopify-buy-button'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "240px",
            "contents": {
              "img": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "BUY NOW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#46636d",
                "font-family": "Source Sans Pro, sans-serif",
                ":hover": {
                  "background-color": "#dbf0f5",
                  "color": "#46636d"
                },
                ":focus": {
                  "background-color": "#dbf0f5"
                },
                "font-weight": "normal"
              },
              "title": {
                "font-size": "26px"
              },
              "price": {
                "font-size": "18px"
              },
              "compareAt": {
                "font-size": "15px"
              }
            },
            "googleFonts": [
              "Source Sans Pro"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#46636d",
                "font-family": "Source Sans Pro, sans-serif",
                ":hover": {
                  "background-color": "#dbf0f5",
                  "color": "#46636d"
                },
                ":focus": {
                  "background-color": "#dbf0f5"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Source Sans Pro"
            ]
          },
          "modalProduct": {
            "contents": {
              "variantTitle": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#46636d",
                "font-family": "Source Sans Pro, sans-serif",
                ":hover": {
                  "background-color": "#dbf0f5",
                  "color": "#46636d"
                },
                ":focus": {
                  "background-color": "#dbf0f5"
                },
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Source Sans Pro"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Source Sans Pro, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#dbf0f5"
                },
                ":focus": {
                  "background-color": "#dbf0f5"
                },
                "font-weight": "normal"
              },
              "count": {
                "color": "#46636d",
                ":hover": {
                  "color": "#46636d"
                }
              },
              "iconPath": {
                "fill": "#46636d"
              }
            },
            "googleFonts": [
              "Source Sans Pro"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
})();
