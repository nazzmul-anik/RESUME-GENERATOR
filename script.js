function addExperience(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "write down your work experience")


    let weObject = document.getElementById("we");
    let weAddButtonObject = document.getElementById("weAddButton");

    weObject.insertBefore(newNode, weAddButtonObject);
}

function addQualification(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "write down your academic qualification");


    let qaObject = document.getElementById("qa");
    let aqAddButtonObject = document.getElementById("aqAddButton");

    qaObject.insertBefore(newNode, aqAddButtonObject);

}

function generateResume(){

    // name filed
    let nameField = document.getElementById("nameField").value;

    let nameTemplate1 = document.getElementById("nameTemplate1");

    nameTemplate1.innerHTML = nameField;

    let nameTemplate2 = document.getElementById("nameTemplate2");
    nameTemplate2.innerHTML = nameField;


    // contact filed

    let contactField = document.getElementById("contactField").value;
    document.getElementById("contactTemplate").innerHTML = contactField;

    // address filed

    let addressField = document.getElementById("addressField").value;
    document.getElementById("addressTemplate").innerHTML = addressField;

    // facebook field
    document.getElementById("facebookTemplate").href=document.getElementById("facebookField").value;

    // linkedin filed
    document.getElementById("linkedinTemplate").href = document.getElementById("linkedinField").value;

    // instagram filed
    document.getElementById("instagramTemplate").href = document.getElementById("instagramField").value;

    // objective field
    document.getElementById("objectiveTemplate").innerHTML = document.getElementById("objectiveField").value;

    // work experience

    let workExperiences = document.getElementsByClassName("weField");
    let str="";
    for(let experience of workExperiences){
        str = str + `<li> ${experience.value} </li>`
    }
    document.getElementById("experienceTemplate").innerHTML = str;

    let qualificationField = document.getElementsByClassName("eqField");
    str="";
    for(let qualification of qualificationField){
        str = str +  `<li>${qualification.value}</li>`
    }
    document.getElementById("academicTemplate").innerHTML = str;

    // setting image
    let file = document.getElementById("imageField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function(){
        document.getElementById("imageTemplate").src = reader.result;
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printResume(){



}