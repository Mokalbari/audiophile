import type {
  Accessories,
  ProductAccessories,
  ProductImages,
  Products,
} from "./types/definitions"

export const products: Products[] = [
  {
    id: "yx1-1",
    name: "YX1 Wireless Earphones",
    category: "earphones",
    preview_text:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    description:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    price: 599,
    is_new: true,
  },
  {
    id: "xx59-1",
    name: "XX59 Headphones",
    category: "headphones",
    preview_text:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.",
    description:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    price: 899,
    is_new: false,
  },
  {
    id: "xx99-1",
    name: "XX99 Mark I Headphones",
    category: "headphones",
    preview_text:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles.",
    description:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
    price: 1750,
    is_new: false,
  },
  {
    id: "xx99-2",
    name: "XX99 Mark II Headphones",
    category: "headphones",
    preview_text:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio, redefining your premium headphone experience.",
    description:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    price: 2999,
    is_new: true,
  },
  {
    id: "zx7-1",
    name: "ZX7 Speaker",
    category: "speakers",
    preview_text:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker is designed for home or studio use.",
    description:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    price: 3500,
    is_new: false,
  },
  {
    id: "zx9-1",
    name: "ZX9 Speaker",
    category: "speakers",
    preview_text:
      "Upgrade your sound system with the all new ZX9 active speaker. Truly wireless connectivity for modern setups.",
    description:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    price: 4500,
    is_new: true,
  },
] as const

export const accessories: Accessories[] = [
  { id: "acc_001", name: "Earphone unit" },
  { id: "acc_002", name: "Multi-size earplugs" },
  { id: "acc_003", name: "User manual" },
  { id: "acc_004", name: "USB-C charging cable" },
  { id: "acc_005", name: "Travel pouch" },
  { id: "acc_006", name: "Headphone unit" },
  { id: "acc_007", name: "Replacement earcups" },
  { id: "acc_008", name: "3.5mm 5m audio cable" },
  { id: "acc_009", name: "Travel bag" },
  { id: "acc_010", name: "Speaker unit" },
  { id: "acc_011", name: "Speaker cloth panel" },
  { id: "acc_012", name: "3.5mm 7.5m audio cable" },
  { id: "acc_013", name: "7.5m optical cable" },
  { id: "acc_014", name: "10m optical cable" },
] as const

export const productAccessories: ProductAccessories[] = [
  { id: "001", product_id: "yx1-1", accessory_id: "acc_001", quantity: 2 },
  { id: "002", product_id: "yx1-1", accessory_id: "acc_002", quantity: 6 },
  { id: "003", product_id: "yx1-1", accessory_id: "acc_003", quantity: 1 },
  { id: "004", product_id: "yx1-1", accessory_id: "acc_004", quantity: 1 },
  { id: "005", product_id: "yx1-1", accessory_id: "acc_005", quantity: 1 },
  { id: "006", product_id: "yx1-1", accessory_id: "acc_005", quantity: 1 },
  { id: "007", product_id: "xx59-1", accessory_id: "acc_006", quantity: 1 },
  { id: "008", product_id: "xx59-1", accessory_id: "acc_007", quantity: 2 },
  { id: "009", product_id: "xx59-1", accessory_id: "acc_003", quantity: 1 },
  { id: "010", product_id: "xx59-1", accessory_id: "acc_008", quantity: 1 },
  { id: "011", product_id: "xx99-1", accessory_id: "acc_006", quantity: 1 },
  { id: "012", product_id: "xx99-1", accessory_id: "acc_007", quantity: 2 },
  { id: "013", product_id: "xx99-1", accessory_id: "acc_003", quantity: 1 },
  { id: "014", product_id: "xx99-1", accessory_id: "acc_008", quantity: 1 },
  { id: "015", product_id: "xx99-2", accessory_id: "acc_006", quantity: 1 },
  { id: "016", product_id: "xx99-2", accessory_id: "acc_007", quantity: 2 },
  { id: "017", product_id: "xx99-2", accessory_id: "acc_003", quantity: 1 },
  { id: "018", product_id: "xx99-2", accessory_id: "acc_008", quantity: 1 },
  { id: "019", product_id: "xx99-2", accessory_id: "acc_009", quantity: 1 },
  { id: "020", product_id: "zx7-1", accessory_id: "acc_010", quantity: 2 },
  { id: "021", product_id: "zx7-1", accessory_id: "acc_011", quantity: 2 },
  { id: "022", product_id: "zx7-1", accessory_id: "acc_003", quantity: 1 },
  { id: "023", product_id: "zx7-1", accessory_id: "acc_012", quantity: 1 },
  { id: "024", product_id: "zx7-1", accessory_id: "acc_013", quantity: 1 },
  { id: "025", product_id: "zx9-1", accessory_id: "acc_010", quantity: 2 },
  { id: "026", product_id: "zx9-1", accessory_id: "acc_011", quantity: 2 },
  { id: "027", product_id: "zx9-1", accessory_id: "acc_003", quantity: 1 },
  { id: "028", product_id: "zx9-1", accessory_id: "acc_012", quantity: 1 },
  { id: "029", product_id: "zx9-1", accessory_id: "acc_014", quantity: 1 },
]

export const productImages: ProductImages[] = [
  {
    id: "001",
    product_id: "yx1-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/earphones/yx1_main-zmkzIc98FbzIa5wottAVGAXWmhbtnT.jpg",
    is_main: true,
  },
  {
    id: "002",
    product_id: "yx1-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/earphones/yx1_gal-1-40LeS9CaDaa3RvdIPN23hoFvbtxggi.jpg",
    is_main: false,
  },
  {
    id: "003",
    product_id: "yx1-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/earphones/yx1_gal-2-zcEw1WUl8lluT0aN9AQ9JyrlAyAP4n.jpg",
    is_main: false,
  },
  {
    id: "004",
    product_id: "yx1-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/earphones/yx1_gal-3-m8Mv0o4DDbrhujH5op6FjHggMWe2nA.jpg",
    is_main: false,
  },
  {
    id: "005",
    product_id: "xx59-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx59_main-phvyyfCCvRoAYu4R2JUIbRU79sfNY4.jpg",
    is_main: true,
  },
  {
    id: "006",
    product_id: "xx59-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx59_gal-1-oEh4ubmwEq35JU3UlSa8RzvDXIkvM9.jpg",
    is_main: false,
  },
  {
    id: "007",
    product_id: "xx59-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx59_gal-2-D8d30VzL1Ky31QrPVGPOgNifFGC1Gr.jpg",
    is_main: false,
  },
  {
    id: "008",
    product_id: "xx59-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx59_gal-3-sWCHqQ52rfPtK0JsSU6NDRxfZtmHE2.jpg",
    is_main: false,
  },
  {
    id: "009",
    product_id: "xx99-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx99-mark-one_main-WhGui5cIjeAQV16ZhrdLV0Q5HF50Jr.jpg",
    is_main: true,
  },
  {
    id: "010",
    product_id: "xx99-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx99-mark-one_gal-1-vPu6zPWafXDxbWgyiq1WKFVRrhRiUd.jpg",
    is_main: false,
  },
  {
    id: "011",
    product_id: "xx99-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx99-mark-one_gal-2-nAYyibukNGmX4BPjRSRcQ9kE2WaHBh.jpg",
    is_main: false,
  },
  {
    id: "012",
    product_id: "xx99-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx99-mark-one_gal-3-tTderu7UQmfEXmfOeLcYJxpbDGsQgV.jpg",
    is_main: false,
  },
  {
    id: "013",
    product_id: "xx99-2",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx99-mark-two_main-Fu0AhbxnlA7QxM9GH0TohMhoxeAI8l.jpg",
    is_main: true,
  },
  {
    id: "014",
    product_id: "xx99-2",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx99-mark-two_gal-1-WughprrTt94SeIrIylXqXlgsclaqfl.jpg",
    is_main: false,
  },
  {
    id: "015",
    product_id: "xx99-2",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx99-mark-two_gal-2-c8tX1RcCj4SsvRloHly69tHEQmSmO6.jpg",
    is_main: false,
  },
  {
    id: "016",
    product_id: "xx99-2",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/headphones/xx99-mark-two_gal-3-jVejM9ieOFc9E0K3hu0ZPpFCpbQ22O.jpg",
    is_main: false,
  },
  {
    id: "017",
    product_id: "zx7-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/speakers/zx7_main-IMRfzp34wKl6zh9y5qGcfkjNJOy1uF.jpg",
    is_main: true,
  },
  {
    id: "018",
    product_id: "zx7-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/speakers/zx7_gal-1-PmPzyYXgLmTlM4mY35poAsUsuzgiid.jpg",
    is_main: false,
  },
  {
    id: "019",
    product_id: "zx7-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/speakers/zx7_gal-2-cOH46MDUvRDyT0Eqfsez6d6WsPOJXg.jpg",
    is_main: false,
  },
  {
    id: "020",
    product_id: "zx7-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/speakers/zx7_gal-3-tm6X6k87F2UNrByzD0qH0D4Asxdaex.jpg",
    is_main: false,
  },
  {
    id: "021",
    product_id: "zx9-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/speakers/zx9_main-L1GQUB9kGtzsvKBGtgJO4dEVEUdYM1.jpg",
    is_main: true,
  },
  {
    id: "022",
    product_id: "zx9-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/speakers/zx9_gal-1-AougFpmcHJOgpJYJpLL2KtfPiwu6ZO.jpg",
    is_main: false,
  },
  {
    id: "023",
    product_id: "zx9-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/speakers/zx9_gal-2-yA6D5UFbJRv5FE0ESMLzQKMsnfzQ3T.jpg",
    is_main: false,
  },
  {
    id: "024",
    product_id: "zx9-1",
    url: "https://an03be0hje1rc83y.public.blob.vercel-storage.com/speakers/zx9_gal-3-3VbT2Kw5fLey89FcRphLTKmSEN3c2j.jpg",
    is_main: false,
  },
]
