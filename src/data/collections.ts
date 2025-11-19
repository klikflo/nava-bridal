export interface Dress {
  name: string;
  nameHe: string;
  description: string;
  images: string[];
}

export interface Collection {
  id: string;
  name: string;
  nameHe: string;
  description: string;
  dresses: Dress[];
}

export const collections: Collection[] = [
  {
    id: "falling-in-love",
    name: "Falling In Love",
    nameHe: "Falling In Love",
    description: "קולקציה בהשראת עונת הסתיו, קולקציה רומנטית מעוטרת במיני פרחים, עלים, תחרות עדינות ורכות. קולקציית FALL—ing in Love היא סיפור האהבה שלך שנרקם לשמלה. השמלה שתלווה אותך באלגנטיות ורכות לחגוג את מה שהתחיל בקסם ההתאהבות לאהבה מנצחת.",
    dresses: [
      {
        name: "FLORA",
        nameHe: "פלורה",
        description: "עיצוב פרחוני מרהיב עם תחרה עדינה",
        images: [
          "/Uploads/קולקציה Falling in love /FLORA/IMG_3864 Large.png",
          "/Uploads/קולקציה Falling in love /FLORA/IMG_3865 Large.png",
          "/Uploads/קולקציה Falling in love /FLORA/IMG_3866 Large.png"
        ]
      },
      {
        name: "AURORA",
        nameHe: "אורורה",
        description: "אלגנטיות קלאסית עם נגיעות מודרניות",
        images: [
          "/Uploads/קולקציה Falling in love /AURORA/IMG_3862 Large.png",
          "/Uploads/קולקציה Falling in love /AURORA/IMG_3863 Large.png",
          "/Uploads/קולקציה Falling in love /AURORA/IMG_3891 Large.png"
        ]
      },
      {
        name: "GRACE",
        nameHe: "גרייס",
        description: "חן וקסם בכל תפר",
        images: [
          "/Uploads/קולקציה Falling in love /GRACE/IMG_3888 Large.png",
          "/Uploads/קולקציה Falling in love /GRACE/IMG_3890 Large.png",
          "/Uploads/קולקציה Falling in love /GRACE/IMG_4005 Large.png"
        ]
      },
      {
        name: "BLANCA",
        nameHe: "בלנקה",
        description: "טוהר ויופי בעיצוב מינימליסטי",
        images: [
          "/Uploads/קולקציה Falling in love /BLANCA/IMG_3909 Large.png",
          "/Uploads/קולקציה Falling in love /BLANCA/IMG_3910 Large.png",
          "/Uploads/קולקציה Falling in love /BLANCA/IMG_3911 Large.png"
        ]
      },
      {
        name: "SIREN",
        nameHe: "סיירן",
        description: "שמלה מפתה בסגנון בת ים",
        images: [
          "/Uploads/קולקציה Falling in love /SIREN/IMG_3885 Large.png",
          "/Uploads/קולקציה Falling in love /SIREN/IMG_3887 Large.png",
          "/Uploads/קולקציה Falling in love /SIREN/IMG_3889 Large.png"
        ]
      },
      {
        name: "SWAN",
        nameHe: "סוואן",
        description: "אלגנטיות וחן כברבור",
        images: [
          "/Uploads/קולקציה Falling in love /SWAN/IMG_3874 Large.png",
          "/Uploads/קולקציה Falling in love /SWAN/IMG_3876 Large.png",
          "/Uploads/קולקציה Falling in love /SWAN/IMG_3878 Large.png"
        ]
      },
      {
        name: "BELLE",
        nameHe: "בל",
        description: "יופי נצחי ורומנטי",
        images: [
          "/Uploads/קולקציה Falling in love /BELLE/IMG_3873 Large.png",
          "/Uploads/קולקציה Falling in love /BELLE/IMG_3875 Large.png",
          "/Uploads/קולקציה Falling in love /BELLE/IMG_3877 Large.png"
        ]
      },
      {
        name: "LAURA",
        nameHe: "לאורה",
        description: "עיצוב קלאסי עם פרטים מיוחדים",
        images: [
          "/Uploads/קולקציה Falling in love /LAURA/IMG_3871 Large.png",
          "/Uploads/קולקציה Falling in love /LAURA/IMG_3872 Large.png",
          "/Uploads/קולקציה Falling in love /LAURA/IMG_4014 Large.png"
        ]
      },
      {
        name: "LYNN",
        nameHe: "לין",
        description: "עדינות ויוקרה בכל פרט",
        images: [
          "/Uploads/קולקציה Falling in love /LYNN/IMG_3880 Large.png",
          "/Uploads/קולקציה Falling in love /LYNN/IMG_3882 Large.png",
          "/Uploads/קולקציה Falling in love /LYNN/IMG_3884 Large.png"
        ]
      },
      {
        name: "ODETTE",
        nameHe: "אודט",
        description: "שמלה מלכותית ומרשימה",
        images: [
          "/Uploads/קולקציה Falling in love /ODETTE/IMG_3914 Large.png",
          "/Uploads/קולקציה Falling in love /ODETTE/IMG_4459_Facetune_21-03-2022-15-36-46 Large.png",
          "/Uploads/קולקציה Falling in love /ODETTE/IMG_4467_Facetune_21-03-2022-15-40-24 Large.png"
        ]
      }
    ]
  },
  {
    id: "moonlight",
    name: "Moonlight",
    nameHe: "Moonlight",
    description: "קולקציית Moonlight - שמלות כלה המשלבות קסם ומיסטיקה עם אלגנטיות מודרנית. כל שמלה בקולקציה זו מעוצבת להאיר את הכלה באור ייחודי ומיוחד.",
    dresses: [
      {
        name: "DRESS-1",
        nameHe: "שמלה 1",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /1/391F4C16-8778-4BEC-B660-EA2BE55C4456 Large.png",
          "/Uploads/קולקציה Moonlight /1/E1EEE1EA-8F53-4CA6-BC94-8413753EA662 Large.png",
          "/Uploads/קולקציה Moonlight /1/IMG_0128 Large.png"
        ]
      },
      {
        name: "DRESS-2",
        nameHe: "שמלה 2",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /2/Facetune_15-09-2025-12-56-03 Large.png",
          "/Uploads/קולקציה Moonlight /2/Facetune_15-09-2025-12-58-51 Large.png",
          "/Uploads/קולקציה Moonlight /2/Facetune_15-09-2025-13-10-23 Large.png"
        ]
      },
      {
        name: "DRESS-3",
        nameHe: "שמלה 3",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /3/Facetune_15-09-2025-12-50-36 Large.png",
          "/Uploads/קולקציה Moonlight /3/Facetune_15-09-2025-12-52-06 Large.png",
          "/Uploads/קולקציה Moonlight /3/Facetune_28-06-2025-19-46-12 Large.png"
        ]
      },
      {
        name: "DRESS-4",
        nameHe: "שמלה 4",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /4/78460D3D-18B7-43EB-A5B8-D3279DBBE084 Large.png",
          "/Uploads/קולקציה Moonlight /4/C17ECCBA-64BE-4357-9919-00BF046798C5 Large.png",
          "/Uploads/קולקציה Moonlight /4/IMG_2862 Large.png"
        ]
      },
      {
        name: "DRESS-5",
        nameHe: "שמלה 5",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /5/Facetune_16-03-2024-17-03-55 2.png",
          "/Uploads/קולקציה Moonlight /5/Facetune_16-03-2024-17-07-32 2.png",
          "/Uploads/קולקציה Moonlight /5/Facetune_16-03-2024-17-17-57 2.png"
        ]
      },
      {
        name: "DRESS-6",
        nameHe: "שמלה 6",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /6/Facetune_19-07-2025-18-57-58 Large.png",
          "/Uploads/קולקציה Moonlight /6/IMG_1091 Large.png",
          "/Uploads/קולקציה Moonlight /6/IMG_9589 Large.png"
        ]
      },
      {
        name: "DRESS-7",
        nameHe: "שמלה 7",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /7/Facetune_19-07-2025-19-26-41 Large.png",
          "/Uploads/קולקציה Moonlight /7/Facetune_19-07-2025-19-28-47 Large.png",
          "/Uploads/קולקציה Moonlight /7/Facetune_19-07-2025-19-32-58 Large.png"
        ]
      },
      {
        name: "DRESS-8",
        nameHe: "שמלה 8",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /8/Facetune_19-07-2025-19-07-59 Large.png",
          "/Uploads/קולקציה Moonlight /8/Facetune_19-07-2025-19-11-52 Large.png",
          "/Uploads/קולקציה Moonlight /8/Facetune_19-07-2025-19-13-27 Large.png"
        ]
      },
      {
        name: "DRESS-9",
        nameHe: "שמלה 9",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /9/Facetune_19-07-2025-19-19-29 Large.png",
          "/Uploads/קולקציה Moonlight /9/Facetune_19-07-2025-19-21-23 Large.png",
          "/Uploads/קולקציה Moonlight /9/IMG_0786 Large.png"
        ]
      },
      {
        name: "DRESS-10",
        nameHe: "שמלה 10",
        description: "שמלת כלה מקולקציית Moonlight",
        images: [
          "/Uploads/קולקציה Moonlight /10/Facetune_28-07-2024-18-02-26 2.png",
          "/Uploads/קולקציה Moonlight /10/Facetune_30-07-2024-19-05-58 2.png",
          "/Uploads/קולקציה Moonlight /10/Facetune_30-07-2024-19-07-22 2.png"
        ]
      }
    ]
  }
];

export const getDressById = (collectionId: string, dressName: string): Dress | undefined => {
  const collection = collections.find(c => c.id === collectionId);
  return collection?.dresses.find(d => d.name === dressName);
};

export const getCollectionById = (collectionId: string): Collection | undefined => {
  return collections.find(c => c.id === collectionId);
};

