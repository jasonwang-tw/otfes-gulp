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
      navBefore: [
        {
          link: '#',
          text: '產品特色'
        },
        {
          link: '#',
          text: '產品規格'
        },
        {
          link: '#',
          text: '咖啡浪潮'
        },
      ],
      navAfter: [
        {
          link: '#',
          text: '設計理念'
        },
        {
          link: '#',
          text: '設備效益'
        },
        {
          link: '#',
          text: '合作廠商'
        },
      ],
      feature_product: [
        {
          col: 'col-span-1',
          icon: '',
          text: '智慧注水設計，配合手法萃取咖啡最佳風味，高度穩定的咖啡品質'
        },
        {
          col: 'col-span-1',
          icon: '',
          text: '螺旋注水由內而外，模擬咖啡師手法'
        },
        {
          col: 'col-span-1',
          icon: '',
          text: '雙鍋爐穩定水溫，維持連續沖煮溫度'
        },
        {
          col: 'col-span-2',
          icon: '',
          text: ''
        },
        {
          col: 'col-span-1',
          icon: '',
          text: '客製化專屬手法參數設定，(三組儲存空間)'
        },
        {
          col: 'col-span-1',
          icon: '',
          text: '每杯都是專業咖啡師手法沖煮，減少人員能力需求及培訓成本'
        },
        {
          col: 'col-span-1',
          icon: '',
          text: '手機平板APP直覺式操作，智慧化操作設定'
        },
        {
          col: 1,
          icon: '',
          text: '滿足連續大量出杯需求，支援快速展店體系'
        },
      ],
      coffee_before: ['確保咖啡品質', '建構優質服務', '獨特品質與差異', '完整的咖啡體驗'],
      coffee_after: ['提升咖啡品質', '強調永續發展', '較淺的烘焙程度', '創新的沖煮方法'],
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
      benefit_shop: [
        {
          icon: '',
          text: '品質穩定'
        },
        {
          icon: '',
          text: '連續沖煮'
        },
        {
          icon: '',
          text: '一鍵沖煮減少對人的依賴'
        },
        {
          icon: '',
          text: '降低訓練成本'
        },
        {
          icon: '',
          text: '精品咖啡風味完整重現'
        },
        {
          icon: '',
          text: '設備良率高穩定輸出'
        },
        {
          icon: '',
          text: '保留與客戶互動交流的空間'
        }
      ],
      benefit_user: [
        {
          icon: '',
          text: '完整接收烘豆師欲傳達的風味和理想'
        },
        {
          icon: '',
          text: '享受店家優質服務'
        },
        {
          icon: '',
          text: '完整的咖啡體驗'
        },
        {
          icon: '',
          text: '穩定品質咖啡'
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


