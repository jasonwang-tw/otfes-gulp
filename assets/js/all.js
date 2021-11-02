"use strict";

var app = Vue.createApp({
  data: function data() {
    return {
      langBar: true,
      langBar_mobile: true,
      head: true,
      scrollNum: '',
      isTop: true,
      poducts: [{
        type: 'MODEL 3',
        img: ['Modol3_1', 'Modol3_2', 'Modol3_3']
      }, {
        type: 'MODEL 4',
        img: ['Model4_1', 'Model4_2', 'Model4_3']
      }],
      poductsSize_moblie: false,
      current_model: 0,
      nav: {
        tw: [{
          link: '#feature',
          text: '產品特色'
        }, {
          link: '#benefits',
          text: '產品優勢'
        }, {
          link: '#store',
          text: '品牌故事'
        }, {
          link: '#support',
          text: '支援中心'
        }, {
          link: '#contact',
          text: '聯絡我們'
        }],
        us: [{
          link: '#feature',
          text: 'FEATURES'
        }, {
          link: '#benefits',
          text: 'BENEFITS TO COFFEE SHOPS'
        }, {
          link: '#store',
          text: 'ABOUT'
        }, {
          link: '#support',
          text: 'SUPPORT'
        }, {
          link: '#contact',
          text: 'CONTACT'
        }]
      },
      feature_product: {
        tw: [{
          // icon: 'bi bi-hand-index-thumb',
          img: '5',
          title: '一鍵沖煮不費力',
          text: '簡單一鍵即可進行全自動沖煮，輕鬆獲得美味咖啡。'
        }, {
          // icon: 'bi bi-cup',
          img: '2',
          title: '咖啡品質穩定一致',
          text: '固定水量、水溫、萃取時間等要素，確保每杯咖啡都符合預設的品質，杯杯盡是最佳風味。'
        }, {
          // icon: 'bi bi-moisture',
          img: '3',
          title: '雙鍋爐提供穩定水溫，可連續沖煮',
          text: '優異的控溫能力，連續沖煮咖啡也不失溫，保證咖啡的預設沖煮溫度一致。'
        }, {
          // icon: 'bi bi-clipboard-data',
          img: '4',
          title: '自由設定沖煮參數',
          text: '可依咖啡豆特性設定最佳沖煮手法。'
        }, {
          // icon: 'bi bi-droplet',
          img: '1',
          title: '專利螺旋注水設計',
          text: '取得台灣、日本、美國、中國等國家專利。'
        }],
        us: [{
          // icon: 'bi bi-hand-index-thumb',
          img: '5',
          title: 'One Touch Brewing',
          text: 'Brew with a touch of the button from the pre-loaded recipes.'
        }, {
          // icon: 'bi bi-cup',
          img: '2',
          title: 'Stable supplies of quality coffee',
          text: 'Repeat the quality of each cup of coffee perfectly.'
        }, {
          // icon: 'bi bi-moisture',
          img: '3',
          title: 'Dual boilers, Temperature control system',
          text: 'Control the water temperature through the dual boiler system.'
        }, {
          // icon: 'bi bi-clipboard-data',
          img: '4',
          title: 'Custom recipes',
          text: 'Preset your brew recipes including pour numbers、 water amount、water  temperature and pour patterns.'
        }, {
          // icon: 'bi bi-droplet',
          img: '1',
          title: 'Design patents in brewing technique system',
          text: 'International patents.'
        }]
      },
      benefits: {
        tw: [{
          brfore: [{
            icon: 'bi bi-person-check',
            title: '兼顧專注手沖和細微客戶服務',
            text: '咖啡師不再被束縛在吧檯，可增加與消費者交流時間。'
          }, {
            icon: 'bi bi-currency-dollar',
            title: '減少人事訓練成本',
            text: '專業咖啡師人力配置及教育訓練成本降低，有效降低人事成本。'
          }]
        }, {
          after: [{
            icon: 'bi bi-shop',
            title: '快速展店',
            text: '人力需求降低，營業模式及咖啡沖煮手法可快速複製，縮短開店所需時間。'
          }, {
            icon: 'bi bi-check2-circle',
            title: '咖啡品質穩定',
            text: '由咖啡機執行固定沖煮參數，杯杯都是相同品質。'
          }]
        }],
        us: [{
          brfore: [{
            icon: 'bi bi-person-check',
            title: 'Balancing customer service & coffee quality',
            text: 'Baristas now have more time to communicate with customers without giving up the quality of coffee.'
          }, {
            icon: 'bi bi-currency-dollar',
            title: 'Low manpower demand',
            text: 'With one touch brew and pre-loaded recipes, anyone can be a qualified barista.'
          }]
        }, {
          after: [{
            icon: 'bi bi-shop',
            title: 'Rapid business expansion',
            text: 'Low manpower demand and standard operating procedures will allow Café owner to expand business easily and quickly.'
          }, {
            icon: 'bi bi-check2-circle',
            title: 'Consistent coffee quality',
            text: 'Exactly the same good quality of each cup of coffee, every time you press the button.'
          }]
        }]
      }
    };
  },
  methods: {
    products_carousel: function products_carousel() {
      var link = './assets/images/';
      var new_pc_M3 = [];
      var new_pc_M4 = [];
      this.poducts[0].img.forEach(function (m3) {
        new_pc_M3.push(link + 'm3/' + m3 + '.png');
      });
      this.poducts[1].img.forEach(function (m4) {
        new_pc_M4.push(link + 'm4/' + m4 + '.png');
      });
      this.poducts[0].img = new_pc_M3;
      this.poducts[1].img = new_pc_M4;
    },
    winReSize: function winReSize() {
      var win_width = $(window).width(); // top menu 隱藏

      if (win_width < 1024) {
        this.head = true;
      } // 產品圖片


      if (win_width < 640) {
        this.poductsSize_moblie = true;
      }
    },
    goTop: function goTop() {
      document.documentElement.scrollTop = 0;
    }
  },
  watch: {},
  mounted: function mounted() {
    var _this = this;

    this.products_carousel(); // products_carousel

    for (var index = 0; index < this.poducts.length; index++) {
      $('.products_img' + index).slick({
        dots: true,
        infinite: false,
        prevArrow: '.to_left' + index,
        nextArrow: '.to_right' + index
      });
    } // fancybox 產品詳細


    $('.fancybox').fancybox();
    this.winReSize();
    window.addEventListener("scroll", function () {
      var top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      _this.scrollNum = top;

      if (top < 300) {
        _this.isTop = true;
      } else {
        _this.isTop = false;
      }
    });
  }
}); // 掛載

app.mount('.app');
//# sourceMappingURL=all.js.map
