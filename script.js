const NET_WORTH = 809_000_000_000;

const items = [
  { name: "AirPods Pro", price: 249, image: "assets/9QtYXwu.jpg" },
  { name: "Nintendo Switch", price: 299, image: "assets/NjB1B10.jpg" },
  { name: "PS5", price: 499, image: "assets/0GPFIYa.jpg" },
  { name: "Xbox Series X", price: 499, image: "assets/B9ePUN9.jpg" },
  { name: "Two sticks of RAM 2026 (64gb DDR5)", price: 899, image: "assets/9jvLnqt.jpeg" },
  { name: "Iphone 17 Pro Max - 2TB", price: 1999, image: "assets/zdoBKrm.jpeg" },
  { name: "Samsung S25 Ultra - 1TB", price: 1499, image: "assets/Dfnlv06.png" },
  { name: "MacBook Pro 14' M4 Max (128GB RAM | 8TB)", price: 7699, image: "assets/6QjVUZV.jpg" },
  { name: "Mac Studio M3 Ultra (512GB RAM | 16TB SSD)", price: 14099, image: "assets/fminWBH.jpg" },
  { name: "Pro Gaming PC(I9 14900K, RTX 5090, 64GB, 4TB SSD)", price: 6950, image: "assets/diqWGS7.jpg" },
  { name: "Razer Blade 14 Top spec (2025)", price: 2799, image: "assets/C91Spgr.jpg" },
  { name: "Ipad Air M3 Chip (256GB)", price: 749, image: "assets/6cs5d6D.jpg" },
  { name: "Tesla Bot (Available 2027)", price: 25000, image: "assets/1zf8Od2.jpg" },
  { name: "Start your own StartUp", price: 5000000, image: "assets/F8tPuHG.jpg" },
  { name: "Open Fast Food Franchise", price: 1200000, image: "assets/LSZCZfI.jpg" },
  { name: "Spotify for 80 years", price: 13600, image: "assets/sgDA4Jc.jpg" },
  { name: "Entire Steam library (2025 - No discounts)", price: 1228000, image: "assets/6GP748G.jpg" },
  { name: "Launch your own satellite with your name", price: 80000000, image: "assets/ekogdpq.jpg" },
  { name: "Netflix for 80 Years", price: 19500, image: "assets/zGaCSFJ.jpg" },
  { name: "Entire production of Nvidia RTX GPUs for 2025", price: 6100000000, image: "assets/kjmUU0f.jpg" },
  { name: "Influence 1 high ranking politician", price: 3000000, image: "assets/7IB3CLt.jpg" },
  { name: "Private Concert with ANY Super Star", price: 1000000, image: "assets/qjQqs0v.jpg" },
  { name: "Give 10,000 USD to 5000 people", price: 50000000, image: "assets/NE7sbRU.jpg" },
  { name: "LG 88' OLED 8K ThinQ", price: 19990, image: "assets/TGGOqdl.jpg" },
  { name: "Fiat 500", price: 19000, image: "assets/sk9EP1i.jpg" },
  { name: "Toyota Camry", price: 29000, image: "assets/yfQjaS6.jpg" },
  { name: "Ford F150 Raptor 2025", price: 65900, image: "assets/SaSBjQ7.jpg" },
  { name: "Tesla Model S Plaid", price: 132000, image: "assets/tfSw6ND.jpg" },
  { name: "Cybertruck (Tri Motor)", price: 70000, image: "assets/pHxajOw.jpg" },
  { name: "Tesla Roadster (available 2026)", price: 200000, image: "assets/bX4SeTv.jpg" },
  { name: "Ferrari F8 Tributo", price: 276000, image: "assets/giumAZC.jpg" },
  { name: "Lamborghini Aventador SVJ", price: 512000, image: "assets/NdHxu2p.jpg" },
  { name: "Bugatti La Voiture Noire", price: 11000000, image: "assets/ULFQYv1.jpg" },
  { name: "1000 Acres of land", price: 5100000, image: "assets/4fY8du1.jpg" },
  { name: "Private Island, Central America (medium size)", price: 4950000, image: "assets/jtbz2S4.jpg" },
  { name: "Eating out for 80 years (4 meals/day)", price: 4100000, image: "assets/CNyhJF3.jpg" },
  { name: "Diamond Ring (Tiffany - 1.5 carat)", price: 20000, image: "assets/E8sg2YQ.jpg" },
  { name: "Whisky Macallan Michael Dillon 1926", price: 1530000, image: "assets/momWXBT.jpg" },
  { name: "Rolex Oyster 36mm", price: 14000, image: "assets/MUGVZ8i.jpg" },
  { name: "Rolex Day Date 40mm Gold", price: 65000, image: "assets/Cynw2Zw.png" },
  { name: "Les Femmes d'Alger by Picasso", price: 179400000, image: "assets/4a6CDQK.jpg" },
  { name: "Monalisa by Leonardo da Vinci (estimate)", price: 869000000, image: "assets/wDo8a6C.jpg" },
  { name: "Helicopter Bell 206", price: 850000, image: "assets/rqZ7IIk.jpg" },
  { name: "10 plastic surgeries", price: 130000, image: "assets/yU4EsJj.jpg" },
  { name: "One week in EVERY country of the planet", price: 1250000, image: "assets/dUxUeHi.jpg" },
  { name: "College Education (USA)", price: 190000, image: "assets/fVNcvTE.jpg" },
  { name: "NFL Team (Average)", price: 3000000000, image: "assets/stpt2ZG.jpg" },
  { name: "NBA Team (Average)", price: 2400000000, image: "assets/dr2aFvN.jpg" },
  { name: "F1 Team (Average)", price: 700000000, image: "assets/PKvVuAm.jpg" },
  { name: "Jet Gulfstream G450", price: 22000000, image: "assets/QlgwDGF.jpg" },
  { name: "M1 Abrams", price: 8000000, image: "assets/jemMZg5.jpg" },
  { name: "Produce a Hollywood Movie", price: 90000000, image: "assets/06isRMk.jpg" },
  { name: "Regular Modern Apartment (2 bd, 2 ba)", price: 480000, image: "assets/8Dd6fiM.jpg" },
  { name: "Paris Luxury Apartment(3 bd, 3 ba)", price: 3800000, image: "assets/my8vglc.jpg" },
  { name: "L.A Home (5bd, 6ba)", price: 6500000, image: "assets/ypjjQYX.jpg" },
  { name: "L.A Mega Mansion (8 bd, 20 ba)", price: 65000000, image: "assets/iGbwSSM.jpg" },
  { name: "Modern Building (35 condos + 10 Offices)", price: 14000000, image: "assets/j2JS3Us.jpg" },
  { name: "Sailboat", price: 130000, image: "assets/jsbtkG7.jpg" },
  { name: "Mega Yatch", price: 300000000, image: "assets/DGX1I5F.jpg" },
];

items.sort((a, b) => a.price - b.price);

for (const item of items) {
  item.quantity = 0;
}

const itemsList = document.getElementById("items-list");
const spentTotal = document.getElementById("spent-total");
const remainingTotal = document.getElementById("remaining-total");
const billBody = document.getElementById("bill-body");
const billCount = document.getElementById("bill-count");
const billGrandTotal = document.getElementById("bill-grand-total");
const printBillButton = document.getElementById("print-bill");
const percentageSpent = document.getElementById("percentage-spent");

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value < 1 ? 2 : 0,
  }).format(value);
}

function getSpentTotal() {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderItems() {
  itemsList.innerHTML = "";

  const spent = getSpentTotal();
  const remaining = NET_WORTH - spent;

  for (const item of items) {
    const card = document.createElement("article");
    card.className = "item-card";

    const visual = document.createElement("div");
    visual.className = "item-visual";
    visual.innerHTML = `<img src="${item.image}" alt="${item.name}">`;

    const info = document.createElement("div");
    info.className = "item-body";
    info.innerHTML = `
      <h3>${item.name}</h3>
      <p class="item-price">${formatMoney(item.price)}</p>
    `;

    const actions = document.createElement("div");
    actions.className = "item-actions";

    const sellButton = document.createElement("button");
    sellButton.className = "action-button sell";
    sellButton.textContent = "-";
    sellButton.disabled = item.quantity === 0;
    sellButton.addEventListener("click", () => {
      item.quantity -= 1;
      updateAll();
    });

    const qty = document.createElement("span");
    qty.className = "qty";
    qty.textContent = String(item.quantity);

    const buyButton = document.createElement("button");
    buyButton.className = "action-button buy";
    buyButton.textContent = "+";
    buyButton.disabled = item.price > remaining;
    buyButton.addEventListener("click", () => {
      item.quantity += 1;
      updateAll();
    });

    actions.append(sellButton, qty, buyButton);
    info.appendChild(actions);
    card.append(visual, info);
    itemsList.appendChild(card);
  }
}

function renderSummary() {
  const spent = getSpentTotal();
  const remaining = NET_WORTH - spent;
  const percent = (spent / NET_WORTH) * 100;

  spentTotal.textContent = formatMoney(spent);
  remainingTotal.textContent = `Remaining: ${formatMoney(remaining)}`;
  percentageSpent.textContent = `You spent ${percent.toFixed(6)}% of the total.`;
}

function renderBill() {
  const chosenItems = items.filter((item) => item.quantity > 0);
  billBody.innerHTML = "";

  if (!chosenItems.length) {
    billBody.innerHTML = `
      <tr>
        <td colspan="4" class="empty-row">Nothing selected yet.</td>
      </tr>
    `;
  } else {
    for (const item of chosenItems) {
      const row = document.createElement("tr");
      const total = item.price * item.quantity;

      row.innerHTML = `
        <td>${item.name}</td>
        <td>${formatMoney(item.price)}</td>
        <td>${item.quantity}</td>
        <td>${formatMoney(total)}</td>
      `;

      billBody.appendChild(row);
    }
  }

  const totalQuantity = chosenItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = getSpentTotal();

  billCount.textContent = String(totalQuantity);
  billGrandTotal.textContent = formatMoney(totalCost);
}

function updateAll() {
  renderItems();
  renderSummary();
  renderBill();
}

if (itemsList && spentTotal && remainingTotal && billBody && billCount && billGrandTotal) {
  updateAll();
}

if (printBillButton) {
  printBillButton.addEventListener("click", () => {
    window.print();
  });
}
