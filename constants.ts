import { ServiceSection } from './types';

export const PRICE_LIST_DATA: ServiceSection[] = [
  {
    title: "WIG MAKING AND STYLING",
    items: [
      { service: "CLOSURE WIGGING", price: "#20,000" },
      { service: "FRONTAL WIGGING", price: "#25,000" },
      { service: "PONYTAIL CLIPS", price: "#10,000" },
      { service: "HEADBAND WIG", price: "#20,000" },
      { service: "BOB WIG RE-WIGGING", price: "#20,000" },
    ],
    policy: [
      "REWIGGING OLD UNITS AND NEW BUNDLES COST THE SAME.",
      "THERE IS NO ONE SIZE FIT ALL FOR WIGS, WE REQUIRE YOU TO SEND YOUR EXACT HEAD MEASUREMENT FOR A CUSTOMISED WIG.",
      "PLEASE SEE THE SIZE CHART GUIDE IN HIGHLIGHTS OR REQUEST FOR ASSISTANCE WITH A GUIDE ON HOW TO TAKE MEASUREMENTS.",
      "PRICES ARE NON NEGOTIABLE AND IT INCLUDES STYLING AND BASIC CUSTOMIZING"
    ]
  },
  {
    title: "WIG REVAMP AND STYLING",
    items: [
      { service: "8 - 12 INCHES", price: "#13,000" },
      { service: "14 - 18 INCHES", price: "#15,000" },
      { service: "20 - 24 INCHES", price: "#17,000" },
      { service: "26 - 32 INCHES", price: "#20,000" },
      { service: "COLORED WIG AND WEAVES", price: "#4,000", detail: "EXTRA" },
    ],
    policy: [
      "THE COST INCLUDES STYLING. THE SERVICE IS INCLUSIVE OF FREE CHANGE OF LOOSE ELASTIC BAND, MAKE UP AND GLUE FROM LACE, RESTITCHING OF LOOSE TRACK AND DEEP CONDITIONING.",
      "WE DONT ACCEPT ONLY STYLING OF WIGS WITHOUT REVAMPING EXCEPT IT IS A BRAND NEW WIG THAT IS CLEAN WITHOUT ANY PRODUCTS ON IT. THIS IS TO ENSURE THAT WE PROVIDE THE BEST SERVICE FOR YOU."
    ]
  },
  {
    title: "LACE MAINTENANCE",
    items: [
      { service: "CLOSURE REFILL", price: "#10,000", detail: "FROM" },
      { service: "FRONTAL REFILL", price: "#15,000", detail: "FROM" },
      { service: "LACE REPAIR AND REFILL", price: "#15,000", detail: "FROM" },
    ],
    policy: [
      "YOU ARE REQUIRED TO PROVIDE THE WEAVE WE WILL USE FOR REFILLING BALD AREAS OF YOUR CLOSURE/FRONTAL.",
      "PRICE OF REPAIR AND REFILL WILL BE BASED ON THE EXTENT OF DAMAGE.",
      "WE USE SWISS LACE FOR LACE REPAIRS."
    ]
  },
  {
    title: "OTHER SERVICES",
    items: [
      { service: "CLOSURE TO FRINGE" },
      { service: "LAYERING" },
      { service: "VENTILATING" },
      { service: "COLORING" },
    ],
    policy: [] // No specific policy text in the 4th image, but keeping structure valid
  }
];

export const CONTACT_NUMBER = "2348105895363";
export const INSTAGRAM_HANDLE = "@HAIRRESIDENCE_STYLING";