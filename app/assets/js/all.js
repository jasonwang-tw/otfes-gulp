const app = Vue.createApp({
  data() {
    return {
      langBar: true,
      langBar_mobile: true,
      head: true,
      scrollNum: '',
      isTop: true,
      poducts: [
        {
          type: 'MODEL 3',
          img: ['Modol3_1', 'Modol3_2', 'Modol3_3'],
        },
        {
          type: 'MODEL 4',
          img: ['Model4_1', 'Model4_2', 'Model4_3'],
        }
      ],
      poductsSize_moblie: false,
      current_model: 0,
      nav: [
        {
          link: '#feature',
          text: '產品特色'
        },
        {
          link: '#benefits',
          text: '產品優勢'
        },
        {
          link: '#store',
          text: '品牌故事'
        },
        {
          link: '#support',
          text: '支援中心'
        },
        {
          link: '#contact',
          text: '聯絡我們'
        },
      ],
      feature_product: [
        {
          // icon: 'bi bi-droplet',
          img: '1',
          title: '專利螺旋注水設計',
          text: '取得台灣、日本、美國、中國等國家專利'
        },
        {
          // icon: 'bi bi-cup',
          img: '2',
          title: '咖啡品質穩定一致',
          text: '固定水量、水溫、萃取時間等要素，確保每杯咖啡都符合預設的品質，杯杯盡是最佳風味。'
        },
        {
          // icon: 'bi bi-moisture',
          img: '3',
          title: '雙鍋爐提供穩定水溫，可連續沖煮',
          text: '優異的控溫能力，連續沖煮咖啡也不失溫，保證咖啡的預設沖煮溫度一致。'
        },
        {
          // icon: 'bi bi-clipboard-data',
          img: '4',
          title: '自由設定沖煮參數',
          text: '可依咖啡豆特性設定最佳沖煮手法。'
        },
        {
          // icon: 'bi bi-hand-index-thumb',
          img: '5',
          title: '一鍵沖煮不費力',
          text: '簡單一鍵即可進行全自動沖煮，輕鬆獲得美味咖啡。'
        },
      ],
      benefits: [
        {
          brfore: [
            {
              icon: 'bi bi-person-check',
              title: '兼顧專注手沖和細微客戶服務',
              text: '咖啡師不再被束縛在吧檯，可增加與消費者交流時間'
            },
            {
              icon: 'bi bi-currency-dollar',
              title: '減少人事訓練成本',
              text: '專業咖啡師人力配置及教育訓練成本降低，有效降低人事成本。'
            },
          ],
        },
        {
          after: [
            {
              icon: 'bi bi-shop',
              title: '快速展店',
              text: '人力需求降低，營業模式及咖啡沖煮手法可快速複製，縮短開店所需時間。'
            },
            {
              icon: 'bi bi-check2-circle',
              title: '咖啡品質穩定',
              text: '由咖啡機執行固定沖煮參數，杯杯都是相同品質。'
            },
          ]
        }
      ],
      design_concept: [
        {
          icon: '',
          text: '兼顧專注手沖和細微客戶服務',
        },
        {
          icon: '',
          text: '品質穩定精品咖啡降低對於"人"的依賴',
        },
        {
          icon: '',
          text: '咖啡師手法參數化',
        },
        {
          icon: '',
          text: 'OTFES完美重現手法',
        },
        {
          icon: '',
          text: '減少人事訓練成本',
        },
        {
          icon: '',
          text: '降低快速展店門檻',
        }
      ],
    }
  },
  methods: {
    products_carousel() {
      const link = './assets/images/';

      const new_pc_M3 = []
      const new_pc_M4 = []

      this.poducts[0].img.forEach(m3 => {
        new_pc_M3.push(
          link + 'm3/' + m3 + '.png'
        )
      });

      this.poducts[1].img.forEach(m4 => {
        new_pc_M4.push(
          link + 'm4/' + m4 + '.png'
        )
      });

      this.poducts[0].img = new_pc_M3
      this.poducts[1].img = new_pc_M4
    },
    winReSize() {

      const win_width = $(window).width();

      // top menu 隱藏
      if (win_width < 1024) {
        this.head = true
      }

      // 產品圖片
      if (win_width < 640) {
        this.poductsSize_moblie = true
      }
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    }
  },
  watch: {},
  mounted() {

    this.products_carousel();

    // products_carousel
    for (let index = 0; index < this.poducts.length; index++) {
      $('.products_img' + index).slick({
        dots: true,
        infinite: false,
        prevArrow: '.to_left' + index,
        nextArrow: '.to_right' + index,
      });
    }

    // fancybox 產品詳細
    $('.fancybox').fancybox();

    this.winReSize();

    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top < 300) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
});

// 掛載
app.mount('.app');


