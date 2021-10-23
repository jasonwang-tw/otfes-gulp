const app = Vue.createApp({
  data() {
    return {
      langBar: true,
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
          icon: 'bi bi-droplet',
          text: '專利螺旋注水設計'
        },
        {
          icon: 'bi bi-cup',
          text: '咖啡品質穩定一致'
        },
        {
          icon: 'bi bi-moisture',
          text: '雙鍋爐提供穩定水溫，可連續沖煮'
        },
        {
          icon: 'bi bi-clipboard-data',
          text: '自由設定沖煮參數'
        },
        {
          icon: 'bi bi-hand-index-thumb',
          text: '一鍵沖煮不費力'
        },
      ],
      benefits: [
        {
          brfore: [
            {
              icon: 'bi bi-person-check',
              text: '兼顧專注手沖和細微客戶服務',
            },
            {
              icon: 'bi bi-currency-dollar',
              text: '減少人事訓練成本',
            },
          ],
        },
        {
          after: [
            {
              icon: 'bi bi-shop',
              text: '快速展店',
            },
            {
              icon: 'bi bi-check2-circle',
              text: '咖啡品質穩定',
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


    // partner_carousel
    $('.partner_logo').slick({
      dots: true,
      infinite: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      prevArrow: '.to_left',
      nextArrow: '.to_right',
    });


    // fancybox 產品詳細
    $('.fancybox').fancybox();
  },
});

// 掛載
app.mount('.app');


