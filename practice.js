console.log("hallo world".length)
console.log("halloworld".length)
const Money = (day) => {
  return day*5000
} 

// let innerFlex = document.createElement("div");
// innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");
// let cardDiv = document.createElement("div");
// cardDiv.classList.add("d-flex", "col-12", "profile-card");
// innerFlex.append(cardDiv);
// console.log(innerFlex);

// 左半分

// let leftInfo = document.createElement("div");
// leftInfo.classList.add("col-8", "py-3");

// let nameTitle = document.createElement("h4");
// nameTitle.innerHTML = "Kaiden Herman"

// leftInfo.append(nameTitle);

// let div1 = document.createElement("div")
// div1.classList.add("py-2")

// let div2 = div1.cloneNode(true);
// let div3 = div1.cloneNode(true);

// let employeeJob = document.createElement("p");
// employeeJob.innerHTML = "Job: " + "<br>"  + "Software Engineer";
// div1.append(employeeJob);

// let employeeSkill = document.createElement("p");
// employeeSkill.innerHTML = "Skill: " + "<br>"  + "C++, C#, Java, PHP, JavaScript, Python";
// div2.append(employeeSkill)

// let employeeCountry = document.createElement("p");
// employeeCountry.innerHTML = "Country : " + "<br>"  + "United States";
// div3.append(employeeCountry);

// leftInfo.append(div1);
// leftInfo.append(div2);
// leftInfo.append(div3);

// console.log(leftInfo);

// let rightInfo = document.createElement("div");
// rightInfo.classList.add("col-4", "d-flex", "justify-content-center", "align-items-center");

// let div4 = document.createElement("div")
// rightInfo.append(div4);

// let avater = document.createElement("img");
// avater.classList.add("avatar")
// avater.src = "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg";

// div4.append(avater);

// console.log(rightInfo);


// cardDiv.append(leftInfo);
// cardDiv.append(rightInfo);
// document.getElementById("profiles").append(innerFlex);

// function createEmployeeCard(employeeName, job, skills, country, avatarUrl) {
//   let innerFlex = document.createElement("div");
//   innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");

//   let cardDiv = document.createElement("div");
//   innerFlex.append(cardDiv);
//   cardDiv.classList.add("d-flex", "col-12", "profile-card");

//   let leftInfo = document.createElement("div");
//   leftInfo.classList.add("col-8", "py-3");
  
//   let div1 = document.createElement("div");
//   div1.classList.add("py-2")
  
//   let div2 = div1.cloneNode(true);
//   let div3 = div1.cloneNode(true);
  
//   let nameTitle = document.createElement("h4");
//   nameTitle.innerHTML = employeeName;
  
//   let employeeJob = document.createElement("p")
//   let employeeSkill = document.createElement("p")
//   let employeeCountry = document.createElement("p");
  
//   employeeJob.innerHTML = "Job: " + "<br>"  + job;
//   div1.append(employeeJob);
  
//   employeeSkill.innerHTML = "Skill: " + "<br>"  + skills;
//   div2.append(employeeSkill);
  
//   employeeCountry.innerHTML = "Country : " + "<br>"  + country;
//   div3.append(employeeCountry);
  
//   leftInfo.append(nameTitle);
//   leftInfo.append(div1);
//   leftInfo.append(div2);
//   leftInfo.append(div3);
  
//   let rightInfo = document.createElement("div");
//   let div4 = document.createElement("div");
//   rightInfo.classList.add("col-4", "d-flex", "justify-content-center", "align-items-center");
  
//   let avatar = document.createElement("img");
//   avatar.classList.add("avatar");
//   avatar.src = avatarUrl;
  
//   div4.append(avatar);
//   rightInfo.append(div4);
  
//   cardDiv.append(leftInfo);
//   cardDiv.append(rightInfo);
  

//   return innerFlex;
// }

// const profileDiv = document.getElementById("profiles");

// let employee1 = createEmployeeCard("Kaiden Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
// let employee2 = createEmployeeCard("Elizabeth Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
// let employee3 = createEmployeeCard("Duan Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");

// profileDiv.append(employee1);
// profileDiv.append(employee2);
// profileDiv.append(employee3);
