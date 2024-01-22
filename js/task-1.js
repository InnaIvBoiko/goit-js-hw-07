const categories = document.querySelectorAll("#categories .item");

console.log(`Nambers of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i++) {
    const titles = document.querySelectorAll(".item h2");
    const elements = document.querySelectorAll(".item ul");

    console.log(`Category: ${titles[i].textContent}`);
    console.log(`Elements: ${elements[i].children.length}`);
};