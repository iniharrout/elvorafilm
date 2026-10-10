export const BRAND_INFO = {
  name: "Elvora Film",
  tagline: "Your story. Your emotions. Your forever.",
  statement: "We don't just capture moments. We preserve emotions for generations.",
  corePromise: "Every wedding has a unique story. Elvora Film captures the people, emotions, traditions, celebrations, and details that make each wedding unforgettable. The finished photographs and films should allow couples to revisit not just what happened, but how their wedding felt.",
  philosophy: "A wedding is not an event to document. It is a story to preserve.",
  
  phone: "+91 8895499662",
  phoneRaw: "918895499662",
  email: "elvorafilm@gmail.com",
  instagramUrl: "https://www.instagram.com/elvorafilm?obrf=YTY2M2RmcHJjb2Jv",
  instagramHandle: "@elvorafilm",
  websiteUrl: "https://www.elvorafilm.com",
  
  address: {
    plot: "Plot No. 451",
    locality: "Bhagawanpur, Patrapada",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    pin: "751019",
    formatted: "Plot No. 451, Bhagawanpur, Patrapada, Bhubaneswar, Odisha, India - 751019",
    googleMapsUrl: "https://maps.google.com/?q=Patrapada,+Bhubaneswar,+Odisha+751019"
  },
  
  commitments: [
    {
      id: "storytelling",
      title: "Creative Storytelling",
      desc: "We approach each wedding as a unique story rather than following the same formula for every couple."
    },
    {
      id: "team",
      title: "Professional Team",
      desc: "Our team includes dedicated photographers, cinematographers, videographers, drone operators, and certified FPV pilots."
    },
    {
      id: "post-production",
      title: "Premium Post-Production",
      desc: "We focus on meticulous editing, natural skin tones, cinematic color grading, sound design, pacing, and visual consistency."
    },
    {
      id: "workflow",
      title: "Organized Workflow",
      desc: "We coordinate with couples and families well in advance to make wedding day coverage effortless, discreet, and comfortable."
    },
    {
      id: "delivery",
      title: "Timely Delivery",
      desc: "Projects follow a structured timeline and planned post-production workflow with an emphasis on delivering finished memories on time."
    },
    {
      id: "revision",
      title: "One Free Edit Revision",
      desc: "One round of reasonable editing changes is included after the first final delivery to ensure complete artistic peace of mind."
    },
    {
      id: "care",
      title: "Care For Your Memories",
      desc: "Wedding footage and high-resolution master photographs are handled with rigorous redundancy throughout production and archiving."
    }
  ],
  
  approach: [
    {
      step: "01",
      title: "UNDERSTAND",
      subtitle: "The Foundation",
      description: "We learn about your story, wedding plans, traditions, preferences, and the personal moments that matter most to you."
    },
    {
      step: "02",
      title: "PLAN",
      subtitle: "Creative Direction",
      description: "We coordinate the coverage schedule, lighting setups, important family rituals, and production requirements before the celebration."
    },
    {
      step: "03",
      title: "CAPTURE",
      subtitle: "Unobtrusive Craft",
      description: "Our photography and cinematography team documents your celebration with keen attention to emotion, composition, movement, and light."
    },
    {
      step: "04",
      title: "PRESERVE",
      subtitle: "Artisan Finishing",
      description: "Through editorial grading, sound design, music scoring, and fine-art album binding, we turn fleeting moments into heirloom memories."
    }
  ]
};

export const getWhatsAppLink = (message) => {
  const encoded = encodeURIComponent(message || "Hi Elvora Film, I would like to discuss wedding photography and cinematography for my wedding.");
  return `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encoded}`;
};
