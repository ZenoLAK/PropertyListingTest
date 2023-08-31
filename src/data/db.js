const mockListings = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "1 Kanal House for sale",
    address: "DHA Phase 6, Lahore",
    beds: 5,
    bath: 6,
    coveredAreaSQFT: 2350,
    propertyType: "house",
    isCommercial: false,
    price: 65000000,
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Luxury Apartment in City Center",
    address: "City Center, Rawalpindi",
    beds: 2,
    bath: 2,
    coveredAreaSQFT: 1200,
    propertyType: "apartment",
    isCommercial: false,
    price: 200000,
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Spacious Family Home",
    address: "G-13, Islamabad",
    beds: 4,
    bath: 3,
    coveredAreaSQFT: 1800,
    propertyType: "house",
    isCommercial: false,
    price: 450000,
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Modern Apartment in H13",
    address: "Capital Homes H13",
    beds: 1,
    bath: 1,
    coveredAreaSQFT: 800,
    propertyType: "condo",
    isCommercial: false,
    price: 150000,
  },
  {
    id: 5,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Classic Bungalow with Garden",
    address: "Gulberg, Lahore",
    beds: 3,
    bath: 2,
    coveredAreaSQFT: 2000,
    propertyType: "bungalow",
    isCommercial: false,
    price: 5500000,
  },
  {
    id: 6,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Luxury Villa in Clifton",
    address: "Clifton, Karachi",
    beds: 6,
    bath: 5,
    coveredAreaSQFT: 3000,
    propertyType: "villa",
    isCommercial: false,
    price: 100000000,
  },
  {
    id: 7,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Downtown Loft Apartment",
    address: "Zainab Market, Karachi",
    beds: 1,
    bath: 1,
    coveredAreaSQFT: 600,
    propertyType: "apartment",
    isCommercial: false,
    price: 5000000,
  },
  {
    id: 8,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Farmhouse with Scenic Views",
    address: "Murree Road, Islamabad",
    beds: 4,
    bath: 3,
    coveredAreaSQFT: 5000,
    propertyType: "farmhouse",
    isCommercial: false,
    price: 80000000,
  },
  {
    id: 9,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Commercial Office Space",
    address: "Blue Area, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 1000,
    propertyType: "office",
    isCommercial: true,
    price: 50000000,
  },
  {
    id: 10,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Modern Apartment in Bahria Town",
    address: "Bahria Town, Rawalpindi",
    beds: 3,
    bath: 2,
    coveredAreaSQFT: 1500,
    propertyType: "apartment",
    isCommercial: false,
    price: 12000000,
  },
  {
    id: 11,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Exquisite Villa in DHA",
    address: "DHA, Islamabad",
    beds: 6,
    bath: 5,
    coveredAreaSQFT: 3500,
    propertyType: "villa",
    isCommercial: false,
    price: 95000000,
  },
  {
    id: 12,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Cosy Studio Apartment",
    address: "G-13, Islamabad",
    beds: 1,
    bath: 1,
    coveredAreaSQFT: 600,
    propertyType: "apartment",
    isCommercial: false,
    price: 8000000,
  },
  {
    id: 13,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Elegant Townhouse in F-8",
    address: "F-8, Islamabad",
    beds: 4,
    bath: 4,
    coveredAreaSQFT: 2200,
    propertyType: "townhouse",
    isCommercial: false,
    price: 35000000,
  },
  {
    id: 14,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Commercial Plaza in F-10",
    address: "F-10, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 10000,
    propertyType: "plaza",
    isCommercial: true,
    price: 200000000,
  },
  {
    id: 15,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Luxury Apartment in E-7",
    address: "E-7, Islamabad",
    beds: 3,
    bath: 2,
    coveredAreaSQFT: 1800,
    propertyType: "apartment",
    isCommercial: false,
    price: 26000000,
  },
  {
    id: 16,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Farmhouse Oasis in Rawal Lake",
    address: "Rawal Lake, Islamabad",
    beds: 5,
    bath: 5,
    coveredAreaSQFT: 5000,
    propertyType: "farmhouse",
    isCommercial: false,
    price: 75000000,
  },
  {
    id: 17,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Prime Commercial Space in Blue Area",
    address: "Blue Area, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 15000,
    propertyType: "office",
    isCommercial: true,
    price: 280000000,
  },
  {
    id: 18,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Modern Apartment in D-12",
    address: "D-12, Islamabad",
    beds: 2,
    bath: 2,
    coveredAreaSQFT: 1300,
    propertyType: "apartment",
    isCommercial: false,
    price: 17500000,
  },
  {
    id: 19,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Luxury Villa in Emaar Canyon Views",
    address: "Emaar Canyon Views, Islamabad",
    beds: 4,
    bath: 4,
    coveredAreaSQFT: 3500,
    propertyType: "villa",
    isCommercial: false,
    price: 85000000,
  },

  {
    id: 20,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Modern Apartment in G-11",
    address: "G-11, Islamabad",
    beds: 2,
    bath: 2,
    coveredAreaSQFT: 1200,
    propertyType: "apartment",
    isCommercial: false,
    price: 18000000,
  },
  {
    id: 21,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Elegant Townhouse in F-10",
    address: "F-10, Islamabad",
    beds: 4,
    bath: 4,
    coveredAreaSQFT: 2200,
    propertyType: "townhouse",
    isCommercial: false,
    price: 35000000,
  },
  {
    id: 22,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Cosy Apartment in Blue Area",
    address: "Blue Area, Islamabad",
    beds: 1,
    bath: 1,
    coveredAreaSQFT: 800,
    propertyType: "apartment",
    isCommercial: false,
    price: 10000000,
  },
  {
    id: 23,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Farmhouse Retreat in Chak Shahzad",
    address: "Chak Shahzad, Islamabad",
    beds: 5,
    bath: 5,
    coveredAreaSQFT: 6000,
    propertyType: "farmhouse",
    isCommercial: false,
    price: 55000000,
  },
  {
    id: 24,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Commercial Building in G-9",
    address: "G-9, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 8000,
    propertyType: "building",
    isCommercial: true,
    price: 120000000,
  },
  {
    id: 25,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Spacious Apartment in E-11",
    address: "E-11, Islamabad",
    beds: 3,
    bath: 2,
    coveredAreaSQFT: 1600,
    propertyType: "apartment",
    isCommercial: false,
    price: 22000000,
  },
  {
    id: 26,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Luxury Villa in Bahria Enclave",
    address: "Bahria Enclave, Islamabad",
    beds: 7,
    bath: 6,
    coveredAreaSQFT: 4000,
    propertyType: "villa",
    isCommercial: false,
    price: 85000000,
  },
  {
    id: 27,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Modern Apartment in F-6",
    address: "F-6, Islamabad",
    beds: 2,
    bath: 2,
    coveredAreaSQFT: 1400,
    propertyType: "apartment",
    isCommercial: false,
    price: 21000000,
  },
  {
    id: 28,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Stylish Farmhouse in Bani Gala",
    address: "Bani Gala, Islamabad",
    beds: 6,
    bath: 5,
    coveredAreaSQFT: 5500,
    propertyType: "farmhouse",
    isCommercial: false,
    price: 60000000,
  },
  {
    id: 29,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Prime Commercial Space in I-8",
    address: "I-8, Islamabad",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 12000,
    propertyType: "office",
    isCommercial: true,
    price: 180000000,
  },
  {
    id: 30,
    imageUrl: "https://i.ibb.co/SN1sR5N/bgImage2.jpg",
    title: "Charming Cottage in the Countryside",
    address: "123 Country Lane",
    beds: 3,
    bath: 2,
    coveredAreaSQFT: 1600,
    propertyType: "house",
    isCommercial: false,
    price: 280000,
  },
];

export default mockListings;