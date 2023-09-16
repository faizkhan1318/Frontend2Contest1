const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i of data){
      if(i.profession === "developer"){
        console.log(i)
      }
    }
  }
  
  // 2. Add Data
  function addData() {
    let add = {name : "Walt", age: 40, profession: "developer"};
    data.push(add);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i in data){
      if(data[i].profession === "admin"){
        data.splice(i, 1);
      }
    }
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let data1 = [
      {name: "Jesse", age: 28, profession: "developer"},
      {name: "Gus", age: 34, profession: "admin"}
    ]
    let combinedArr= data.concat(data1)
  //  combinedArr.map((data)=>{
  //    console.log(data)
  //  };
  console.log(combinedArr);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0;
    for(let i in data){
      sum = sum + data[i].age;
    }
    let avg = sum/data.length;
    console.log(avg);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i in data){
      if(data[i].age > 25){
        console.log(data[i]);
      }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueProfession = [];
    let countedProfession ={};
    for(let i of data){
      let prof = i.profession;
      if(!countedProfession[prof]){
        countedProfession[prof]=true;
        uniqueProfession.push(prof);
      }
    }
    console.log(uniqueProfession);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data[0].profession= "manager";
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let countAdmin=0;
    let countDeveloper = 0;
  
    for(let i of data){
      if(i.profession === "developer"){
        countDeveloper++;
      }
      else if(i.profession === "admin"){
        countAdmin++;
      }
    }
    console.log("Total Developers:", countDeveloper);
  console.log("Total Admins:", countAdmin);
  }
  
