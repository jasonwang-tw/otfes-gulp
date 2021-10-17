const app = Vue.createApp({
  data() {
    return {
      poducts: [
        {
          type: 'MODEL 3',
          img: ['slamp', 'slamp'],
        },
        {
          type: 'MODEL 4',
          img: ['slamp', 'slamp', 'slamp', 'slamp'],
        }
      ],
      current_model: 0,
      nav: [
        {
          link: '#',
          text: '產品特色'
        },
        {
          link: '#',
          text: '產品優勢'
        },
        {
          link: '#',
          text: '品牌故事'
        },
        {
          link: '#',
          text: '支援中心'
        },
        {
          link: '#',
          text: '聯絡我們'
        },
      ],
      feature_product: [
        {
          icon: '',
          text: '專利螺旋注水設計'
        },
        {
          icon: '',
          text: '咖啡品質穩定一致'
        },
        {
          icon: '',
          text: '雙鍋爐提供穩定水溫，可連續沖煮'
        },
        {
          icon: '',
          text: '自由設定沖煮參數'
        },
        {
          icon: '',
          text: '一鍵沖煮不費力'
        },
      ],
      benefits: [
        {
          text: '兼顧專注手沖和細微客戶服務',
        },
        {
          text: '減少人事訓練成本',
        },
        {
          text: '快速展店',
        },
        {
          text: '咖啡品質穩定',
        },
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
      partner: ['Group', 'Rectangle', 'Rectangle-1', 'Rectangle-2', 'Rectangle-3', 'Rectangle-4', 'Rectangle-5', 'Rectangle-6', 'Rectangle-7']
    }
  },
  methods: {
    products_carousel() {
      const link = './assets/images/';

      const new_pc_M3 = []
      const new_pc_M4 = []

      this.poducts[0].img.forEach(m3 => {
        new_pc_M3.push(
          link + m3 + '.png'
        )
      });

      this.poducts[1].img.forEach(m4 => {
        new_pc_M4.push(
          link + m4 + '.png'
        )
      });

      this.poducts[0].img = new_pc_M3
      this.poducts[1].img = new_pc_M4
    },
    partner_reSet() {
      const link = './assets/images/partner/';
      const new_partner = []

      this.partner.forEach(p => {
        new_partner.push(
          link + p + '.png'
        )
      });

      this.partner = new_partner
    }
  },
  watch: {

  },
  mounted() {


    this.products_carousel();
    this.partner_reSet();


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


