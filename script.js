const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter((person) => person.profession === "developer");
  console.log(developers);
}

// 2. Add Data
function addData(newData) {
  data.push(...newData);
}

// 3. Remove Admins
function removeAdmin() {
  const filteredData = data.filter((person) => person.profession !== "admin");
  return filteredData;
}

// 4. Concatenate Array
function concatenateArray(newArray) {
  const concatenatedArray = data.concat(newArray);
  return concatenatedArray;
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  return totalAge / data.length;
}

// 6. Age Check
function checkAgeAbove25() {
  return data.every((person) => person.age > 25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map((person) => person.profession))];
  return professions;
}

// 8. Sort by Age
function sortByAge() {
  const sortedData = [...data].sort((a, b) => a.age - b.age);
  return sortedData;
}

// 9. Update Profession
function updateJohnsProfession(newProfession) {
  const updatedData = data.map((person) =>
    person.name === "john" ? { ...person, profession: newProfession } : person
  );
  return updatedData;
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCount = data.reduce((count, person) => {
    count[person.profession] = (count[person.profession] || 0) + 1;
    return count;
  }, {});
  return professionCount;
}
