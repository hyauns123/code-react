import { generateImgPath } from "./data";

export const heroSlider = [
  {
    id: 1,
    thumbnail: generateImgPath("/assets/images/shop/slider-01.webp"),
  },
  {
    id: 2,
    thumbnail: generateImgPath("/assets/images/shop/slider-02.webp"),
  },
  {
    id: 3,
    thumbnail: generateImgPath("/assets/images/shop/slider-03.webp"),
  },
];

export const category = [
  {
    id: 1,
    title: "merchandise.activeman",
    image: generateImgPath("/assets/images/shop/categories/01.webp"),
  },
  {
    id: 2,
    title: "merchandise.avengers",
    image: generateImgPath("/assets/images/shop/categories/02.webp"),
  },
  {
    id: 3,
    title: "merchandise.disney_world",
    image: generateImgPath("/assets/images/shop/categories/03.webp"),
  },
  {
    id: 4,
    title: "merchandise.fantasia",
    image: generateImgPath("/assets/images/shop/categories/04.webp"),
  },

  {
    id: 6,
    title: "merchandise.galaxy_heaven",
    image: generateImgPath("/assets/images/shop/categories/05.webp"),
  },
  {
    id: 7,
    title: "merchandise.ghost_spider",
    image: generateImgPath("/assets/images/shop/categories/06.webp"),
  },
  {
    id: 8,
    title: "merchandise.harry_david",
    image: generateImgPath("/assets/images/shop/categories/07.webp"),
  },
  {
    id: 9,
    title: "merchandise.haunted_halloween",
    image: generateImgPath("/assets/images/shop/categories/08.webp"),
  },
  {
    id: 10,
    title: "merchandise.studios",
    image: generateImgPath("/assets/images/shop/categories/09.webp"),
  },
  {
    id: 11,
    title: "merchandise.monster_house",
    image: generateImgPath("/assets/images/shop/categories/11.webp"),
  },
  {
    id: 12,
    title: "merchandise.quid_game",
    image: generateImgPath("/assets/images/shop/categories/12.webp"),
  },
  {
    id: 13,
    title: "merchandise.the_madrid",
    image: generateImgPath("/assets/images/shop/categories/14.webp"),
  },
  {
    id: 14,
    title: "merchandise.the_chapion",
    image: generateImgPath("/assets/images/shop/categories/15.webp"),
  },
];

export const products = [
  {
    id: 1,
    slug: "bag-pack",
    product_name: "shop.bag_pack",
    thumbnail: generateImgPath("/assets/images/shop/product/01.webp"),
    descriptio:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    stock_status: "In Stock",
    tags: ["costume", "lighting"],
    sku: "Bag Pack",
    discount: "",
    price: "$28.00",
    final_price: "$25.00",
    customer_review: 2,
    is_sale: true,
    is_new: false,
    ratting: 4,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Green", "Yellow"],
        size: ["L", "M"],
      },
    ],
    created_at: "",
    category: ["merchandise.marvel_studios", "Uptight-Birds"],
  },
  {
    id: 2,
    slug: "believe-mask",
    product_name: "shop.believe_mask",
    thumbnail: generateImgPath("/assets/images/shop/product/02.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["shop.camera", "shop.costume", "merchandise.studios"],
    sku: "shop.mask",
    discount: "",
    price: "",
    final_price: "$13.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Gray"],
        size: ["M", "S"],
      },
    ],
    created_at: "",
    category: ["merchandise.disney_world", "merchandise.marvel_studios", "merchandise.fantasia", "merchandise.the_madrid"],
  },
  {
    id: 3,
    slug: "black-bow",
    product_name: "shop.black_bow",
    thumbnail: generateImgPath("/assets/images/shop/product/03.webp"),
    descriptio:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    stock_status: "In Stock",
    tags: ["Lighting", "merchandise.studios"],
    sku: "logo-collection",
    discount: "",
    final_price: "$18.00 – $45.00",
    customer_review: 1,
    is_sale: true,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: ["M", "S"],
      },
    ],
    created_at: "",
    category: [
      "Activeman",
      "Avengers",
      "Harry-David",
      "Haunted-Halloween",
      "merchandise.marvel_studios",
      "merchandise.marvel_studios",
      "Quid-Game",
      "The-Flashv",
      "Warner-Bros-Films",
    ],
  },
  {
    id: 4,
    slug: "black-cap",
    product_name: "shop.black_cap",
    thumbnail: generateImgPath("/assets/images/shop/product/04.webp"),
    category: ["merchandise.marvel_studios", "harry-david", "warner-bros-films"],
    stock_status: "In Stock",
    descriptio:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable..",
    tags: ["shop.camera", "Production"],
    sku: "woo-beanie",
    discount: "",
    price: "$20.00",
    final_price: "$18.00",
    customer_review: 0,
    is_sale: false,
    is_new: true,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Blue", "Gray", "Green", "Red", "Yellow"],
        size: ["l", "m", "s"],
      },
    ],
    created_at: "",
  },
  {
    id: 5,
    slug: "boxing-gloves",
    product_name: "shop.boxing_gloves",
    thumbnail: generateImgPath("/assets/images/shop/product/05.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["shop.lightning", "shop.production"],
    sku: "Gloves",
    discount: "",
    price: "",
    final_price: "$17.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 5,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["black", "red", "yellow"],
        size: ["l", "m", "s"],
      },
    ],
    created_at: "",
    category: ["quid-game"],
  },
  {
    id: 6,
    slug: "carry-bag",
    product_name: "shop.carry_bag",
    thumbnail: generateImgPath("/assets/images/shop/product/06.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production"],
    discount: "",
    price: "",
    final_price: "$18.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["gray"],
        size: [],
      },
    ],
    created_at: "",
    category: ["harry-david", "warner-bros-films"],
  },
  {
    id: 7,
    slug: "cartoon-character",
    product_name: "shop.cartoon_character",
    thumbnail: generateImgPath("/assets/images/shop/product/07.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "",
    final_price: "$18.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["uptight-birds"],
  },
  {
    id: 8,
    slug: "coffee-cap",
    product_name: "shop.coffee_cup",
    thumbnail: generateImgPath("/assets/images/shop/product/08.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "",
    final_price: "$15.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: ["l", "m", "s"],
      },
    ],
    created_at: "",
    category: ["galaxy-heaven"],
  },
  {
    id: 9,
    slug: "crown",
    product_name: "shop.crown",
    thumbnail: generateImgPath("/assets/images/shop/product/09.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["shop.camera", "lighting"],
    discount: "",
    price: "$10.00",
    final_price: "$7.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["quid-game"],
  },
  {
    id: 10,
    slug: "daily-diary",
    product_name: "shop.daily_diary",
    thumbnail: generateImgPath("/assets/images/shop/product/10.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["costume", "production"],
    discount: "",
    price: "$20.00",
    final_price: "$18.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Blue", "Gray", "Green", "Red", "Yellow"],
        size: ["l", "m", "s"],
      },
    ],
    created_at: "",
    category: ["activeman"],
  },
  {
    id: 11,
    slug: "face-paint-book",
    product_name: "shop.face_paint_book",
    thumbnail: generateImgPath("/assets/images/shop/product/17.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production", "merchandise.studios"],
    discount: "",
    price: "$45.00",
    final_price: "$35.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Blue", "Gray", "Green", "Red", "Yellow"],
        size: [],
      },
    ],
    created_at: "",
    category: [],
  },
  {
    id: 12,
    slug: "spider-cover",
    product_name: "shop.spider_cover",
    thumbnail: generateImgPath("/assets/images/shop/product/26.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production"],
    discount: "",
    price: "",
    final_price: "$6.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Black"],
        size: [],
      },
    ],
    created_at: "",
    category: ["haunted-halloween"],
  },
  {
    id: 13,
    slug: "sleeping-mask",
    product_name: "shop.sleeping_mask",
    thumbnail: generateImgPath("/assets/images/shop/product/24.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["costume"],
    discount: "",
    price: "",
    final_price: "$29.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Black", "Blue", "Gray", "Green", "Red", "Yellow"],
        size: ["mw", "s"],
      },
    ],
    created_at: "",
    category: ["haunted-halloween"],
  },
  {
    id: 14,
    slug: "phone-cover",
    product_name: "shop.phone_cover",
    thumbnail: generateImgPath("/assets/images/shop/product/20.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["shop.camera", "production"],
    discount: "",
    price: "$14.00",
    final_price: "$10.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Black", "Blue", "Green"],
        size: [],
      },
    ],
    created_at: "",
    category: ["haunted-halloween"],
  },
  {
    id: 15,
    slug: "mug",
    product_name: "shop.mug",
    thumbnail: generateImgPath("/assets/images/shop/product/13.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production", "merchandise.studios"],
    discount: "",
    price: "$18.00",
    final_price: "$8.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Black", "Red"],
        size: ["s"],
      },
    ],
    created_at: "",
    category: ["haunted-halloween"],
  },
  {
    id: 16,
    slug: "round-badges",
    product_name: "shop.round_badges",
    thumbnail: generateImgPath("/assets/images/shop/product/22.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["lighting", "merchandise.studios"],
    discount: "",
    price: "",
    final_price: "$18.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Gray"],
        size: [],
      },
    ],
    created_at: "",
    category: ["activeman"],
  },
  {
    id: 17,
    slug: "round-neck-t-shirt",
    product_name: "shop.round_t_shirt",
    thumbnail: generateImgPath("/assets/images/shop/product/10.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production"],
    discount: "",
    price: "$3.00",
    final_price: "$2.00",
    customer_review: 1,
    is_sale: false,
    is_new: true,
    ratting: 5,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: ["l", "m", "s"],
      },
    ],
    created_at: "",
    category: ["activeman"],
  },
  {
    id: 18,
    slug: "floral-badges",
    product_name: "shop.floral_badges",
    thumbnail: generateImgPath("/assets/images/shop/product/11.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["lighting", "production"],
    discount: "",
    price: "",
    final_price: "$20.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Blue", "Gray", "Green", "Red", "Yellow"],
        size: [],
      },
    ],
    created_at: "",
    category: ["galaxy-heaven"],
  },
  {
    id: 19,
    slug: "glossy-mug",
    product_name: "shop.glossy_mug",
    thumbnail: generateImgPath("/assets/images/shop/product/13.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["lighting", "production"],
    discount: "",
    price: "",
    final_price: "$25.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 4,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Blue", "Gray", "Red", "Yellow"],
        size: ["l", "m"],
      },
    ],
    created_at: "",
    category: ["galaxy-heaven"],
  },
  {
    id: 20,
    slug: "magazine",
    product_name: "shop.magazine",
    thumbnail: generateImgPath("/assets/images/shop/product/18.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production"],
    discount: "",
    price: "",
    final_price: "$45.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: ["l", "m", "s"],
      },
    ],
    created_at: "",
    category: ["galaxy-heaven"],
  },
  {
    id: 21,
    slug: "ghost-cap",
    product_name: "shop.ghost_cap",
    thumbnail: generateImgPath("/assets/images/shop/product/12.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production"],
    discount: "",
    price: "",
    final_price: "$90.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 4,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Blue", "Gray", "Green", "Red", "Yellow"],
        size: ["l", "m", "s"],
      },
    ],
    created_at: "",
    category: ["ghost-spider", "monster-house"],
  },
  {
    id: 22,
    slug: "spider-pillow",
    product_name: "shop.spider_pillow",
    thumbnail: generateImgPath("/assets/images/shop/product/27.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["lighting", "production"],
    discount: "",
    price: "$18.00",
    final_price: "$16.00",
    customer_review: 0,
    is_sale: false,
    is_new: true,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["Yellow"],
        size: [],
      },
    ],
    created_at: "",
    category: ["ghost-spider", "monster-house"],
  },
  {
    id: 23,
    slug: "harry-t-shirt",
    product_name: "shop.harry_t_shirt",
    thumbnail: generateImgPath("/assets/images/shop/product/15.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production", "merchandise.studios"],
    discount: "",
    price: "",
    final_price: "$45.00",
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: "",
        value: "",
        color: ["blue"],
        size: ["l", "m", "s"],
      },
    ],
    created_at: "",
    category: [
      "merchandise.disney_world",
      "merchandise.fantasia",
      "harry-david",
      "quid-game",
      "merchandise.the_madrid",
      "the-champion",
      "uptight-birds",
      "warner-bros-films",
      "haunted-halloween",
    ],
  },
  {
    id: 24,
    slug: "magic-hat",
    product_name: "shop.magic_hat",
    thumbnail: generateImgPath("/assets/images/shop/product/19.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "",
    final_price: "$10.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["uptight-birds"],
  },
  {
    id: 25,
    slug: "green-specs",
    product_name: "shop.green_specs",
    thumbnail: generateImgPath("/assets/images/shop/product/14.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["production"],
    discount: "",
    price: "$22.00",
    final_price: "$18.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["uptight-birds"],
  },
  {
    id: 26,
    slug: "sunglasses",
    product_name: "shop.sunglasses",
    thumbnail: generateImgPath("/assets/images/shop/product/28.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "$65.00",
    final_price: "$55.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["ghost-spider", "monster-house"],
  },
  {
    id: 27,
    slug: "keychain",
    product_name: "shop.keychain",
    thumbnail: generateImgPath("/assets/images/shop/product/16.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "",
    final_price: "$42.00 – $45.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["harry-david", "warner-bros-films"],
  },
  {
    id: 28,
    slug: "streamit-tshirt",
    product_name: "shop.sreamit_t_shirt",
    thumbnail: generateImgPath("/assets/images/shop/product/30.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "$12.00",
    final_price: "$8.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["quid-game"],
  },
  {
    id: 29,
    slug: "vehicle keychain",
    product_name: "shop.vehicle_keychain",
    thumbnail: generateImgPath("/assets/images/shop/product/29.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "",
    final_price: "$17.00 – $25.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["quid-game"],
  },
  {
    id: 30,
    slug: "logo t-shirt",
    product_name: "shop.logo_t_Shirt",
    thumbnail: generateImgPath("/assets/images/shop/product/17.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "$17.00",
    final_price: "$8.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["merchandise.the_madrid"],
  },
  {
    id: 31,
    slug: "red-&-black-t-shirt",
    product_name: "shop.red_&_black_t-shirt",
    thumbnail: generateImgPath("/assets/images/shop/product/21.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "$27.00",
    final_price: "$19.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["merchandise.the_madrid"],
  },
  {
    id: 32,
    slug: "socks",
    product_name: "shop.socks",
    thumbnail: generateImgPath("/assets/images/shop/product/25.webp"),
    descriptio:
      "shop.desc2",
    stock_status: "In Stock",
    tags: ["merchandise.studios"],
    discount: "",
    price: "",
    final_price: "$5.00",
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 2,
    additional_info: [
      {
        title: "",
        value: "",
        color: [],
        size: [],
      },
    ],
    created_at: "",
    category: ["merchandise.the_madrid"],
  },
];
export const filterCategory = (slug) =>
  category.find((item) => item.slug === slug);
export const categoryWiseProduct = (category) =>
  products.filter((item) => item.category.includes(category));
export const tagsWiseProduct = (tag) =>
  products.filter((item) => item.tags.includes(tag));

export const shopBannerSlider = [
  filterCategory("activeman"),
  filterCategory("avengers"),
  filterCategory("merchandise.disney_world"),
  filterCategory("merchandise.fantasia"),
  filterCategory("galaxy-heaven"),
  filterCategory("ghost-spider"),
  filterCategory("harry-david"),
  filterCategory("haunted-halloween"),
  filterCategory("merchandise.marvel_studios"),
  filterCategory("monster-house"),
  filterCategory("quid-game"),
  filterCategory("the-flashv"),
  filterCategory("merchandise.the_madrid"),
  filterCategory("the-champion"),
  filterCategory("uptight-birds"),
  filterCategory("warner-bros-films"),
];

export const filterProduct = (slug) =>
  products.find((item) => item.slug === slug);

export const newProduct = [
  filterProduct("bag-pack"),
  filterProduct("believe-mask"),
  filterProduct("black-bow"),
  filterProduct("black-cap"),
  filterProduct("boxing-gloves"),
  filterProduct("carry-bag"),
];
export const bestseller = [
  filterProduct("bag-pack"),
  filterProduct("believe-mask"),
  filterProduct("black-cap"),
  filterProduct("round-neck-t-shirt"),
  filterProduct("daily-diary"),
];

export const myWishlist = [
  filterProduct("black-bow"),
  filterProduct("spider-pillow"),
  filterProduct("round-neck-t-shirt"),
  filterProduct("harry-t-shirt"),
];

export const myCart = [filterProduct("bag-pack")];
