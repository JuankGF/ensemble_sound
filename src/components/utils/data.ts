import p1 from "../../assets/images/service.jpeg";
import p2 from "../../assets/images/service2.jpeg";
import p3 from "../../assets/images/service3.jpg";
import p4 from "../../assets/images/service4.jpeg";
import p5 from "../../assets/images/service5.jpeg";

export type Testimonial = {
  author: string;
  user: string;
  text: string;
  rate: 1 | 2 | 3 | 4 | 5;
  userImage: string;
};

export type Event = {
  id: string;
  image: string;
  name: string;
  description: string;
  date?: Interval;
  price?: number;
  categories?: string[];
};

export type Equipment = {
  type: EquipmentType;
  image: string;
  id: string;
  name: string;
  description?: string;
  dimension?: string;
  weight?: number;
  quantity: number;
};

export type EquipmentType =
  | "mixers"
  | "microphones"
  | "sub"
  | "speakers"
  | "monitors"
  | "stage-boxes"
  | "direct-input"
  | "instruments";

const defBookingTimes = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "13:00 PM",
  "13:30 PM",
  "14:00 PM",
  "14:30 PM",
  "15:00 PM",
  "15:30 PM",
  "16:00 PM",
  "16:30 PM",
  "17:00 PM",
  "17:30 PM",
  "18:00 PM",
  "18:30 PM",
  "19:00 PM",
  "19:30 PM",
  "20:00 PM",
  "20:30 PM",
  "21:00 PM",
  "21:30 PM",
  "22:00 PM",
];

const serviceList = [
  {
    id: "1",
    image: p1,
    name: "Night Event",
    price: 12.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    categories: ["salads"],
  },
  {
    id: "5",
    image: p5,
    name: "Equipment Rental",
    price: 18.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    categories: ["mains", "lunch"],
  },
  {
    id: "3",
    image: p4,
    name: "Recording",
    price: 5.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    categories: ["desserts"],
  },
  {
    id: "4",
    image: p4,
    name: "Mixin",
    price: 20.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    categories: ["mains", "specials", "lunch"],
  },
  {
    id: "2",
    image: p3,
    name: "Sound Check",
    price: 5.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    categories: ["mains", "specials"],
  },
  {
    id: "6",
    image: p2,
    name: "Concert",
    price: 3.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    categories: ["specials"],
  },
] as Event[];

const testimonials = [
  {
    author: "Sara Lopez",
    user: "sara72",
    rate: 5,
    text: "“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”",
    userImage:
      "data:image/jpeg;base64,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",
  },
  {
    author: "John Doe",
    user: "johnny_utah",
    rate: 5,
    text: "“We had such a great time celebrating my grandmothers birthday!”",
    userImage:
      "data:image/jpeg;base64,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",
  },
  {
    author: "Jane Doe",
    user: "jane_fl",
    rate: 5,
    text: "“Best Feta Salad in town. Flawless everytime!”",
    userImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Wang Mae",
    user: "wang_mae",
    rate: 5,
    text: "“Such a chilled out atmosphere - love it!”",
    userImage:
      "data:image/jpeg;base64,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",
  },
] as Testimonial[];

const findService = (serviceId: string) =>
  serviceList.find((service) => service.id === serviceId);

const techRider: Equipment[] = [
  {
    id: "1",
    image: "",
    name: "JBLSRX906LA",
    quantity: 4,
    type: "speakers",
    description: "Powered Array Speaker",
  },
  {
    id: "2",
    image: "",
    name: "JBLSRX918S",
    quantity: 2,
    type: "sub",
    description: "Powered Sub",
  },
  {
    id: "3",
    image: "",
    name: "JBLPRX818XLFW",
    quantity: 2,
    type: "sub",
    description: "Powered Sub",
  },
  {
    id: "4",
    image: "",
    name: "JBLPRX812W",
    quantity: 4,
    type: "monitors",
    description: "Powered Speaker Monitor",
  },
  {
    id: "5",
    image: "",
    name: "M32LIVE MIDAS",
    quantity: 1,
    type: "mixers",
    description: "40-CH M Series Digital Mixer",
  },
  {
    id: "6",
    image: "",
    name: "MDL32",
    quantity: 1,
    type: "stage-boxes",
    description: "MIDAS DL-32 32in/16out Stage Box",
  },
  {
    id: "7",
    image: "",
    name: "SHURE PSM300",
    quantity: 8,
    type: "monitors",
    description: "In Ear Monitor System Wireless",
  },
  {
    id: "8",
    image: "",
    name: "DONER EM1",
    quantity: 2,
    type: "monitors",
    description: "In Ear Monitor System Wired",
  },
  {
    id: "9",
    image: "",
    name: "SHURE SLX4",
    quantity: 4,
    type: "microphones",
    description: "SM58BETA SLX4 Wireless Mic",
  },
  {
    id: "10",
    image: "",
    name: "E604",
    quantity: 4,
    type: "microphones",
    description: "Sennheiser Clip-On Snare-Tom Mic",
  },
  {
    id: "11",
    image: "",
    name: "SHURE SM81",
    quantity: 3,
    type: "microphones",
    description: "Shure Cardioid 48V Inst Mic",
  },
  {
    id: "12",
    image: "",
    name: "SHURE BETA52",
    quantity: 1,
    type: "microphones",
    description: "Shure Super Din Kick Drum Mic",
  },
  {
    id: "13",
    image: "",
    name: "SHURE SM58",
    quantity: 3,
    type: "microphones",
    description: "Shure Dynamic Vocal Mic",
  },
  {
    id: "14",
    image: "",
    name: "SHURE SM57",
    quantity: 3,
    type: "microphones",
    description: "Shure Dynamic Inst Mic",
  },
  {
    id: "15",
    image: "",
    name: "TGD57C",
    quantity: 3,
    type: "microphones",
    description: "Beyerdinamic Clip GooseNeck Mic",
  },
  {
    id: "16",
    image: "",
    name: "PROD2",
    quantity: 1,
    type: "direct-input",
    description: "Radial 1CH Passive Inst D.I",
  },
  {
    id: "17",
    image: "",
    name: "PROD1",
    quantity: 1,
    type: "direct-input",
    description: "Radial 2CH Passive Inst D.I",
  },
  {
    id: "18",
    image: "",
    name: "IMP2",
    quantity: 1,
    type: "direct-input",
    description: "WirlWind 1CH Passive Inst D.I",
  },
];

export { serviceList, testimonials, defBookingTimes, findService, techRider };
