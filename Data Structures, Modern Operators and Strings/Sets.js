const orderSets = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risosto",
  "Pasta",
  "Pizza",
]);
console.log(orderSets);
console.log(new Set("Alamin"));
console.log(orderSets.size);
console.log(orderSets.has("Pizza"));
orderSets.add("Burger");
orderSets.add("Gurlic Bread");
console.log(orderSets);
orderSets.delete("Pizza");
// orderSets.clear();
console.log(orderSets);
for (const order of orderSets) console.log(order);

const staff = ["Abir", "Shohag", "Shakil"];
const staffUnique = new Set(staff);
console.log(staffUnique);
console.log("Size:", new Set(["Abir", "Shohag", "Shakil"]).size);
