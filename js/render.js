document.addEventListener("DOMContentLoaded", async () => {
  const portfolio = await getPortfolio();
  renderPortfolio(portfolio);
});

//Get from json
async function getPortfolio() {
  const response = await fetch("../data/data.json");
  const data = await response.json();
  return data;
}

//Template for rendering
function baseRender(dataCategory, webSection) {
    const container = document.getElementById(webSection);
    container.innerHTML = "";

     dataCategory.forEach((item) => {
        const div = document.createElement("div");
        div.className = "design-item";
        div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank">${item.link}</a>
        `;
        container.appendChild(div);
    });
}

//Renders based on category from JSON
function renderPortfolio(portfolio) {
    code = portfolio.code; //student resources array
    design = portfolio.design; //lab resources array
    section1 = "code-list"
    section2 = "design-list"
    
    //Test to see if getting data---------------------------
    console.log("Loading links...");
    console.log(portfolio);
    console.log(code);
    console.log(design);
    //-------------------------------------------------------

    //Render on Page
    baseRender(design, section2);
    baseRender(code, section1);
    }
