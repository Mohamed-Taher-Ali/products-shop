interface IDimensions {
  height: number;
  width: number;
  depth: number;
}

interface IReview {
  reviewerEmail: string;
  reviewerName: string;
  comment: string;
  rating: number;
  date: string;
}

interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IProduct {
  minimumOrderQuantity: number;
  warrantyInformation: string;
  shippingInformation: string;
  discountPercentage: number;
  availabilityStatus: string;
  returnPolicy: string;
  description: string;
  thumbnail: string;
  category: string;
  images: string[];
  tags: string[];
  rating: number;
  weight: number;
  title: string;
  price: number;
  stock: number;
  brand: string;
  sku: string;
  id: string;

  dimensions: IDimensions;
  reviews: IReview[];
  meta: IMeta;
}

// {
//   "id": 1,
//   "title": "Essence Mascara Lash Princess",
//   "price": 9.99,
//   "discountPercentage": 10.48,
//   "rating": 2.56,
//   "tags": [
//     "beauty",
//     "mascara"
//   ],
//   "stock": 99,
//   "images": [
//     "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
//   ],

//   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",

//   "category": "beauty",
//   "brand": "Essence",
//   "sku": "BEA-ESS-ESS-001",
//   "weight": 4,
//   "dimensions": {
//     "width": 15.14,
//     "height": 13.08,
//     "depth": 22.99
//   },
//   "warrantyInformation": "1 week warranty",
//   "shippingInformation": "Ships in 3-5 business days",
//   "reviews": [
//     {
//       "rating": 3,
//       "comment": "Would not recommend!",
//       "date": "2025-04-30T09:41:02.053Z",
//       "reviewerName": "Eleanor Collins",
//       "reviewerEmail": "eleanor.collins@x.dummyjson.com"
//     },
//     {
//       "rating": 4,
//       "comment": "Very satisfied!",
//       "date": "2025-04-30T09:41:02.053Z",
//       "reviewerName": "Lucas Gordon",
//       "reviewerEmail": "lucas.gordon@x.dummyjson.com"
//     },
//     {
//       "rating": 5,
//       "comment": "Highly impressed!",
//       "date": "2025-04-30T09:41:02.053Z",
//       "reviewerName": "Eleanor Collins",
//       "reviewerEmail": "eleanor.collins@x.dummyjson.com"
//     }
//   ],
//   "returnPolicy": "No return policy",
//   "minimumOrderQuantity": 48,
//   "meta": {
//     "createdAt": "2025-04-30T09:41:02.053Z",
//     "updatedAt": "2025-04-30T09:41:02.053Z",
//     "barcode": "5784719087687",
//     "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
//   },
//   "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
// }
