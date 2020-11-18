const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length){
  console.log(ingregidients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let i = 1;
while (i <= ingredients.length){
  let x = ingredients.length - i;
  console.log(ingredients[x]);
  i++;
}
// option 2 using for loop:
for (i = 1; i <= ingredients.length; i++) {
  let x = ingredients.length - i;
  console.log(ingredients[x]);
}