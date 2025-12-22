export interface HeritageItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullContent: string;
  image: string;
  location: string;
  yearEstablished: string;
}

export const heritageData: HeritageItem[] = [
  {
    id: 1,
    slug: "akolu",
    title: "Akolu",
    subtitle: "A Place of Refuge",
    category: "Historical Site",
    description: "A significant historical site that served as a place of refuge against attacks.",
    fullContent: `
      <p>Akolu is historically significant as a place of refuge against attacks for the early settlers of Eruwa. Its strategic location provided safety and security during turbulent times.</p>
      <p>Located along the Eruwa/Igboora Road at Aborerin, it stands as a testament to the resilience and survival strategies of the ancestors.</p>
    `,
    image: "/assets/images/Akolu.jpeg",
    location: "Along Eruwa/Igboora Road, at Aborerin",
    yearEstablished: "Ancient"
  },
  {
    id: 2,
    slug: "ojoko",
    title: "Ojoko",
    subtitle: "A Place of Sojourn",
    category: "Historical Landmark",
    description: "Another place of sojourn before further relocation, now housing the Ojoko Club House.",
    fullContent: `
      <p>Ojoko served as another place of sojourn for the people before further relocation. It is a site deeply embedded in the migration history of Eruwa.</p>
      <p>Today, the area is located at the back of Ilupeju Baptist Church, Sanngo, Eruwa. It now houses the Club House of the Ojoko Club of Eruwa, blending historical significance with modern social utility.</p>
    `,
    image: "/assets/images/Ojoko.jpeg",
    location: "Back of Ilupeju Baptist Church, Sanngo, Eruwa",
    yearEstablished: "Ancient"
  },
  {
    id: 3,
    slug: "ofere",
    title: "Ofere",
    subtitle: "Impregnable Fortress",
    category: "Historical Fortress",
    description: "An impregnable fortress for early settlers against attacks, formerly an Egungun groove.",
    fullContent: `
      <p>Ofere was an impregnable fortress that provided critical protection for early settlers against external attacks. It was originally an Egungun groove, highlighting its spiritual and cultural importance.</p>
      <p>The site later hosted the Colonial Rest House. Currently, it hosts the residential estate complex of Chief Adeseun Ogundoyin in Anko, Eruwa, marking a transition from ancient defense to modern residence.</p>
    `,
    image: "/assets/images/Ofere.jpeg",
    location: "Anko, Eruwa",
    yearEstablished: "Ancient"
  },
  {
    id: 4,
    slug: "okele-obaseeku",
    title: "Okele (Obaseeku)",
    subtitle: "Resting Place of the Founder",
    category: "Sacred Site",
    description: "The hill where Obaseeku was buried, often referred to as Obaseeku Hill.",
    fullContent: `
      <p>Okele is of immense historical and spiritual significance as Obaseeku was buried at the foot of this hill. Consequently, the hill is often referred to as Obaseeku Hill.</p>
      <p>It houses the grave of Obaseeku, known as 'Oju Obaseeku', which is worshipped annually. The site connects the present generation directly to the founder of Eruwa.</p>
    `,
    image: "/assets/images/Obaseeku.jpeg",
    location: "Near L.A. School, Isale-Kola, Apode High School Road, Eruwa",
    yearEstablished: "Ancient"
  },
  {
    id: 5,
    slug: "ilewu",
    title: "Ilewu",
    subtitle: "The Last Hill Habitat",
    category: "Historical Settlement",
    description: "The last habitat on the hill by early settlers before descending into the valley.",
    fullContent: `
      <p>Ilewu was the last habitat 'on the hill' occupied by the early settlers of the Oke-Oba, Anko, Isaba, and Aborerin quarters. It was from here that they descended into the present valley to their respective locations during the reign of Oba Olurin.</p>
      <p>Ilewu provides a commanding height from where a panoramic view of the entire Eruwa town can be seen, serving as a physical reminder of the town's topographical history.</p>
    `,
    image: "/assets/images/Ilewu.jpeg",
    location: "Back of Aafin Eleruwa and back of Olurin Compound, Oke-Oba, Eruwa",
    yearEstablished: "Ancient"
  },
  {
    id: 6,
    slug: "weewee",
    title: "Weewee",
    subtitle: "Historical Site",
    category: "Historical Site",
    description: "A significant location in the historical landscape of Eruwa.",
    fullContent: `
      <p>Weewee is a notable location within the historical geography of Eruwa. Like other hills and sites, it played a role in the settlement patterns and history of the town.</p>
    `,
    image: "/assets/images/Weewee.jpeg",
    location: "Near Former Customary Court, Oke-Oba, Eruwa",
    yearEstablished: "Ancient"
  },
  {
    id: 7,
    slug: "apanpa",
    title: "Apanpa",
    subtitle: "Protective Sanctuary",
    category: "Historical Refuge",
    description: "Provided adequate protection for early settlers against attack.",
    fullContent: `
      <p>Apanpa is historically significant for providing adequate protection for early settlers against attacks. Its location offered a strategic advantage for defense and safety.</p>
      <p>It is sandwiched between the back of Ebenezer Baptist Church, Aborerin, Eruwa and the Gate of the Adeseun Ogundoyin Polytechnic, Eruwa.</p>
    `,
    image: "/assets/images/Apanpa.jpeg",
    location: "Between Ebenezer Baptist Church and Adeseun Ogundoyin Polytechnic",
    yearEstablished: "Ancient"
  },
  {
    id: 8,
    slug: "andoro",
    title: "Andoro",
    subtitle: "First Sojourn of Obaseeku",
    category: "Historical Landmark",
    description: "The place where Obaseeku, founder of Eruwa, first sojourned before relocating.",
    fullContent: `
      <p>Andoro holds a special place in Eruwa's history as the location where Obaseeku, the founder of Eruwa, first sojourned before relocating to other hills.</p>
      <p>It marks the beginning of the settlement journey of the founder. The site is located near HAMO HOTEL on Temidire Road, New Eruwa.</p>
    `,
    image: "/assets/images/Andoro.jpeg",
    location: "Near HAMO HOTEL on Temidire Road, New Eruwa",
    yearEstablished: "Ancient"
  },
  {
    id: 9,
    slug: "onigbaporo",
    title: "Onigbaporo",
    subtitle: "Place of Refuge",
    category: "Historical Refuge",
    description: "Another significant place of refuge for the people of Eruwa.",
    fullContent: `
      <p>Onigbaporo served as another place of refuge, contributing to the network of safe havens that protected the early inhabitants of Eruwa.</p>
      <p>It is located at the back of the Water Reservoir, Oke-Oba, Eruwa.</p>
    `,
    image: "/assets/images/Onigbaporo.jpeg",
    location: "Back of the Water Reservoir, Oke-Oba, Eruwa",
    yearEstablished: "Ancient"
  }
];
