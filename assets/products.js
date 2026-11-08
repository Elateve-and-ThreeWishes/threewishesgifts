// Three Wishes Gifts — product catalog
// Synced from https://www.etsy.com/shop/ThreeWishesGiftsShop — prices as shown on Etsy in USD (Etsy shows each buyer their own currency at checkout).
// "was" is only set while a listing is on sale.

const CURRENCY = "$";

const PRODUCTS = [
  {
    title: "Christmas Planner Printable, Hyperlinked Digital PDF, Goodnotes iPad Holiday Organizer, A4 A5 US Letter, Classic Size",
    category: "Xmas Shop",
    price: 7.89, was: 11.27,
    img: "assets/products/xmas-planner-printable.jpg",
    url: "https://www.etsy.com/listing/4600837664/christmas-planner-printable-hyperlinked"
  },
  {
    title: "Golfer Personalized Christmas Ornament, Heritage Ceramic Decoration, Custom Initials Tree Ornament, Golf Christmas Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4602799374.jpg",
    url: "https://www.etsy.com/listing/4602799374"
  },
  {
    title: "Snow Leopard Christmas Ornament, Blue Toile Ceramic Decoration, Scalloped Border Wildlife Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4607165723.jpg",
    url: "https://www.etsy.com/listing/4607165723"
  },
  {
    title: "First Christmas in Our New Home Personalized Ornament, Heritage Tartan Ceramic Decoration, Custom Name Tree Ornament, New Home Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4607645724.jpg",
    url: "https://www.etsy.com/listing/4607645724"
  },
  {
    title: "Funny Christmas Sweatshirt, Vintage Retro Holiday Crewneck, Comfort Colors Garment-Dyed Xmas Sweater, Smiles Collection",
    category: "Xmas Shop",
    price: 60.64,
    img: "assets/products/xmas-funny-sweatshirt.jpg",
    url: "https://www.etsy.com/listing/4612017939/funny-christmas-sweatshirt-vintage-retro"
  },
  {
    title: "Snow Leopard Christmas Ornament, Burgundy Toile Ceramic Decoration, Winter Animal Tree Ornament, Burgundy and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-snow-leopard-ornament.jpg",
    url: "https://www.etsy.com/listing/4608336602/snow-leopard-christmas-ornament-burgundy"
  },
  {
    title: "Stag Christmas Ornament, Burgundy Toile Ceramic Decoration, Woodland Deer Tree Ornament, Burgundy and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-stag-ornament.jpg",
    url: "https://www.etsy.com/listing/4608339420/stag-christmas-ornament-burgundy-toile"
  },
  {
    title: "Stocking Christmas Ornament, Burgundy Toile Ceramic Decoration, Festive Stocking Tree Ornament, Burgundy and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-stocking-ornament.jpg",
    url: "https://www.etsy.com/listing/4608340026/stocking-christmas-ornament-burgundy"
  },
  {
    title: "Tree Christmas Ornament, Burgundy Toile Ceramic Decoration, Evergreen Tree Ornament, Burgundy and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-tree-ornament.jpg",
    url: "https://www.etsy.com/listing/4608321639/tree-christmas-ornament-burgundy-toile"
  },
  {
    title: "Nutcracker Christmas Ornament, Burgundy Toile Ceramic Decoration, Classic Nutcracker Tree Ornament, Burgundy and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-nutcracker-ornament.jpg",
    url: "https://www.etsy.com/listing/4608322263/nutcracker-christmas-ornament-burgundy"
  },
  {
    title: "Star Christmas Ornament, Burgundy Toile Ceramic Decoration, Celestial Star Tree Ornament, Burgundy and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-star-ornament.jpg",
    url: "https://www.etsy.com/listing/4608341958/star-christmas-ornament-burgundy-toile"
  },
  {
    title: "Wedding Anniversary Personalized Ornament, 30th 40th 50th, Heritage Tartan Ceramic Decoration, Custom Names Tree Ornament, Anniversary Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-anniversary-ornament.jpg",
    url: "https://www.etsy.com/listing/4607646536/30th-wedding-anniversary-personalized"
  },
  {
    title: "First Christmas as a Family Personalized Ornament, Heritage Tartan Ceramic Decoration, Custom Name Tree Ornament, New Family Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-first-christmas-ornament.jpg",
    url: "https://www.etsy.com/listing/4607646252/first-christmas-as-a-family-personalized"
  },
  {
    title: "First Christmas Married Personalized Ornament, Heritage Tartan Ceramic Decoration, Custom Names Tree Ornament, Newlywed Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4607644694.jpg",
    url: "https://www.etsy.com/listing/4607644694"
  },
  {
    title: "First Christmas Engaged Personalized Ornament, Heritage Tartan Ceramic Decoration, Custom Names Tree Ornament, Engagement Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4607623437.jpg",
    url: "https://www.etsy.com/listing/4607623437"
  },
  {
    title: "Baby's First Christmas Personalized Ornament, Heritage Tartan Ceramic Decoration, Custom Name Tree Ornament, New Baby Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4607643294.jpg",
    url: "https://www.etsy.com/listing/4607643294"
  },
  {
    title: "Star Christmas Ornament, Blue Toile Ceramic Decoration, Scalloped Border Winter Star Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4607190324.jpg",
    url: "https://www.etsy.com/listing/4607190324"
  },
  {
    title: "Nutcracker Christmas Ornament, Blue Toile Ceramic Decoration, Scalloped Border Traditional Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4607189900.jpg",
    url: "https://www.etsy.com/listing/4607189900"
  },
  {
    title: "Stocking Christmas Ornament, Blue Toile Ceramic Decoration, Scalloped Border Holiday Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4607167023.jpg",
    url: "https://www.etsy.com/listing/4607167023"
  },
  {
    title: "Christmas Tree Ornament, Blue Toile Ceramic Decoration, Scalloped Border Winter Tree Decoration, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4607189450.jpg",
    url: "https://www.etsy.com/listing/4607189450"
  },
  {
    title: "Stag Christmas Ornament, Blue Toile Ceramic Decoration, Scalloped Border Woodland Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4607188524.jpg",
    url: "https://www.etsy.com/listing/4607188524"
  },
  {
    title: "Tennis Player Personalized Christmas Ornament, Heritage Ceramic Decoration, Custom Initials Tree Ornament, Tennis Christmas Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4602799574.jpg",
    url: "https://www.etsy.com/listing/4602799574"
  },
  {
    title: "Polo Player Personalized Christmas Ornament, Heritage Ceramic Decoration, Custom Initials Tree Ornament, Polo Christmas Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4602774631.jpg",
    url: "https://www.etsy.com/listing/4602774631"
  },
  {
    title: "Angler Personalized Christmas Ornament, Heritage Ceramic Decoration, Custom Initials Tree Ornament, Fishing Christmas Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4602799186.jpg",
    url: "https://www.etsy.com/listing/4602799186"
  },
  {
    title: "Horsewoman Personalized Christmas Ornament, Heritage Ceramic Decoration, Custom Initials Tree Ornament, Equestrian Christmas Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4602773929.jpg",
    url: "https://www.etsy.com/listing/4602773929"
  },
  {
    title: "Horseman Personalized Christmas Ornament, Heritage Ceramic Decoration, Custom Initials Tree Ornament, Equestrian Christmas Gift",
    category: "Xmas Shop",
    price: 18.71, was: 26.73,
    img: "assets/products/xmas-4602798498.jpg",
    url: "https://www.etsy.com/listing/4602798498"
  },
  {
    title: "Star Christmas Ornament, Blue Toile Ceramic Decoration, Winter Star Holiday Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4596877169.jpg",
    url: "https://www.etsy.com/listing/4596877169"
  },
  {
    title: "Nutcracker Christmas Ornament, Blue Toile Ceramic Decoration, Traditional Holiday Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4596876049.jpg",
    url: "https://www.etsy.com/listing/4596876049"
  },
  {
    title: "Stocking Christmas Ornament, Blue Toile Ceramic Decoration, Holiday Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4596896620.jpg",
    url: "https://www.etsy.com/listing/4596896620"
  },
  {
    title: "Christmas Tree Ornament, Blue Toile Ceramic Decoration, Winter Holiday Tree Decoration, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4596897776.jpg",
    url: "https://www.etsy.com/listing/4596897776"
  },
  {
    title: "Stag Christmas Ornament, Blue Toile Ceramic Decoration, Woodland Winter Tree Ornament, Blue and White Christmas Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4596895488.jpg",
    url: "https://www.etsy.com/listing/4596895488"
  },
  {
    title: "Snow Leopard Toile Ceramic Ornament, Wildlife Christmas Tree Decoration, Winter Animal Keepsake Gift",
    category: "Xmas Shop",
    price: 16.74, was: 23.91,
    img: "assets/products/xmas-4595171748.jpg",
    url: "https://www.etsy.com/listing/4595171748"
  },
  {
    title: "She Said Yes Bridal Shower Invitation Suite, Editable Canva Template Bundle",
    category: "Celebrations & Invites",
    price: 7.04,
    img: "assets/products/she-said-yes.jpg",
    url: "https://www.etsy.com/listing/4557598126/she-said-yes-bridal-shower-invitation"
  },
  {
    title: "Party Invite Template | Editable Wine Dinner Party Birthday Invitation Canva",
    category: "Celebrations & Invites",
    price: 4.22,
    img: "assets/products/party-invite-wine.jpg",
    url: "https://www.etsy.com/listing/4561767649/party-invite-template-editable-wine"
  },
  {
    title: "Editable Bar Opening Flyer Template, Canva Gastrobar Poster",
    category: "Business & Event Flyers",
    price: 4.58,
    img: "assets/products/bar-opening-flyer.jpg",
    url: "https://www.etsy.com/listing/4561056352/new-bar-opening-flyer-template-editable"
  },
  {
    title: "Coffee Shop Grand Opening Flyer Template, A5 Canva Poster",
    category: "Business & Event Flyers",
    price: 4.58,
    img: "assets/products/coffee-shop-flyer.jpg",
    url: "https://www.etsy.com/listing/4561024649/coffee-shop-grand-opening-flyer-template"
  },
  {
    title: "Meal Plan & Grocery List Printable PDF | Aisle-by-Aisle Shopping List, Pantry Inventory",
    category: "Meal Planners",
    price: 5.99,
    img: "assets/products/meal-plan-grocery-list.png",
    url: "https://www.etsy.com/listing/4572661590/meal-plan-grocery-list-printable-pdf"
  },
  {
    title: "Simple Weekly Meal Planner PDF | 7 Dinners Printable, Grocery List by Aisle",
    category: "Meal Planners",
    price: 5.99,
    img: "assets/products/seven-dinners.png",
    url: "https://www.etsy.com/listing/4572661074/simple-weekly-meal-planner-pdf-7-dinners"
  },
  {
    title: "Minimalist Meal Plan Printable PDF | Calm Weekly Planner, Grocery List, Pantry & Freezer Log",
    category: "Meal Planners",
    price: 5.99,
    img: "assets/products/minimalist-meal-plan.png",
    url: "https://www.etsy.com/listing/4572660544/minimalist-meal-plan-printable-pdf-calm"
  },
  {
    title: "Kitchen Meal Planner PDF | Printable Weekly & Monthly Meal Plan, Prep Day Schedule",
    category: "Meal Planners",
    price: 5.99,
    img: "assets/products/kitchen-meal-planner.png",
    url: "https://www.etsy.com/listing/4572659814/kitchen-meal-planner-pdf-printable"
  },
  {
    title: "UK Student Planner 2026/27, ADHD & Neurodivergent Friendly, GoodNotes iPad PDF",
    category: "Study & School Planners",
    price: 7.76,
    img: "assets/products/uk-student-planner.jpg",
    url: "https://www.etsy.com/listing/4566019959/uk-student-planner-202627-digital"
  },
  {
    title: "UK Medical School Planner, Undated Digital Study Planner for Med Students Years 1-2",
    category: "Study & School Planners",
    price: 7.04,
    img: "assets/products/uk-medical-school.jpg",
    url: "https://www.etsy.com/listing/4572735627/uk-medical-school-planner-undated"
  },
  {
    title: "ADHD 2026-2027 Planner for Students, Study Tracker, Focus Homework Planner",
    category: "Study & School Planners",
    price: 11.27,
    img: "assets/products/adhd-student-planner.jpg",
    url: "https://www.etsy.com/listing/4561162366/adhd-digital-student-planner-2026-2027"
  },
  {
    title: "Focus Tracker for Students, Undated Hyperlinked Digital PDF, 12 Week Focus & Energy Log",
    category: "Study & School Planners",
    price: 8.45,
    img: "assets/products/focus-tracker.jpg",
    url: "https://www.etsy.com/listing/4565366500/focus-tracker-for-students-undated"
  },
  {
    title: "Student Success Planner 2026 2027, Study System & Habit Tracker, Dated School Planner",
    category: "Study & School Planners",
    price: 11.27,
    img: "assets/products/student-success-planner.jpg",
    url: "https://www.etsy.com/listing/4561614385/student-success-planner-2026-2027"
  },
  {
    title: "Fall Planner 2026 Digital Hyperlinked, Autumn Journal, Weekly Daily All In One Hub",
    category: "Study & School Planners",
    price: 7.04,
    img: "assets/products/fall-planner.jpg",
    url: "https://www.etsy.com/listing/4559933797/fall-planner-2026-digital-hyperlinked"
  },
  {
    title: "Self Care Journal for Women, Undated Daily Journal, Brain Dump for Busy Women",
    category: "Journals",
    price: 11.27,
    img: "assets/products/self-care-journal.jpg",
    url: "https://www.etsy.com/listing/4568921015/self-care-journal-for-women-undated"
  },
  {
    title: "Student Journal, Brain Dump Journal, 30-Day Focus Journal for ADHD",
    category: "Journals",
    price: 7.76,
    img: "assets/products/student-journal-brain-dump.jpg",
    url: "https://www.etsy.com/listing/4566037170/student-journal-brain-dump-journal-30"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Burnt | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 5.99,
    img: "assets/products/budget-burnt.jpg",
    url: "https://www.etsy.com/listing/4566612143/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Ledger Red | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 5.99,
    img: "assets/products/budget-ledger-red.jpg",
    url: "https://www.etsy.com/listing/4566610560/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Purple | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 5.99,
    img: "assets/products/budget-purple.jpg",
    url: "https://www.etsy.com/listing/4566635876/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Deep Oxide | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 5.99,
    img: "assets/products/budget-deep-oxide.jpg",
    url: "https://www.etsy.com/listing/4566598257/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Blue and Black | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 5.99,
    img: "assets/products/budget-blue-black.jpg",
    url: "https://www.etsy.com/listing/4566601941/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Quiet Ink | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 5.99,
    img: "assets/products/budget-quiet-ink.jpg",
    url: "https://www.etsy.com/listing/4566592533/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Ember | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 5.99,
    img: "assets/products/budget-ember.jpg",
    url: "https://www.etsy.com/listing/4566631430/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Green | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 5.99,
    img: "assets/products/budget-green.jpg",
    url: "https://www.etsy.com/listing/4566600127/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Signal | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 7.91,
    img: "assets/products/budget-signal.jpg",
    url: "https://www.etsy.com/listing/4566595371/digital-budget-planner-debt-payoff"
  },
  {
    title: "30 Day Puppy & Dog Training Guide, Hyperlinked Digital Planner for GoodNotes Notability",
    category: "Lifestyle Guides",
    price: 5.99,
    img: "assets/products/puppy-dog-training-guide.jpg",
    url: "https://www.etsy.com/listing/4572947222/30-day-puppy-dog-training-guide-digital"
  },
  {
    title: "Glow Up 30 Day Guide, Hyperlinked Digital Planner for iPad, Skincare Fitness Habit Tracker",
    category: "Lifestyle Guides",
    price: 5.99,
    img: "assets/products/glow-up-30-day-guide.jpg",
    url: "https://www.etsy.com/listing/4572892007/glow-up-30-day-guide-hyperlinked-digital"
  }
];

const ETSY_SHOP_URL = "https://www.etsy.com/shop/ThreeWishesGiftsShop";

function twProductCardHTML(p) {
  const pct = p.was ? Math.round((1 - p.price / p.was) * 100) : 0;
  return `
    <article class="product-card reveal">
      <a class="product-thumb" href="${p.url}" target="_blank" rel="noopener">
        ${pct ? `<span class="badge-off">-${pct}%</span>` : ""}
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </a>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-price">
          <span class="price-now">${CURRENCY}${p.price.toFixed(2)}</span>
          ${p.was ? `<span class="price-was">${CURRENCY}${p.was.toFixed(2)}</span>` : ""}
        </div>
        <a class="btn btn-primary btn-sm" href="${p.url}" target="_blank" rel="noopener">Shop on Etsy</a>
      </div>
    </article>`;
}
