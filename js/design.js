document.addEventListener("DOMContentLoaded", async () => {
  const designs = await getDesigns();
  renderdesigns(designs);

//Sorts based on dropdown selectoin
  const dropdown = document.getElementById("sortSelect");
  dropdown.addEventListener("change", () => {
    const sortType = dropdown.value;
    if (sortType === "name") {
      designs.sort((a, b) => a.design.localeCompare(b.design));
    } else if (sortType === "price") {
      designs.sort((a, b) => Number(a.price) - Number(b.price));
    }
    renderdesigns(designs);
  });
});

//Get from json
async function getDesigns() {
  const response = await fetch("../data/design.json");
  const data = await response.json();
  return data;
}

//Render
function renderdesigns(designs) {

    
    //Test to see if getting data
    console.log("Loading designs...")
    designs.forEach((design) => {
    console.log(`   ${design.title}`);
    })

    //For real
    const container = document.getElementById("design-list");
    container.innerHTML = "";

    designs.forEach((design) => {
        const div = document.createElement("div");
        div.className = "design-item";
        div.innerHTML = `
        <img src="${design.image}" alt="${design.title}">
        <h2>${design.title}</h2>
        <p>${design.description}</p>
        `;
        container.appendChild(div);
    });
}
