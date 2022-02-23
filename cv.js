
const jsonUrl = "cv.json";

async function getAllData() {
  const response = await fetch(jsonUrl);
  const data = await response.json();
  console.log(data);

  const contact = data.contact;
  let contactText = "";
  for (let i = 0; i < contact.length; i++) {
    let obj = contact[i];
    for (let key in obj) {
      let value = obj[key];
      contactText += "<br>"+ value;
    }
    document.getElementById("contact").innerHTML = contactText;
  }

  const work = data.work;
  let workText = "";
  for (let i = 0; i < work.length; i++) {
    workText += "<br/>"
    let obj = work[i];
    for (let key in obj) {
      let value = obj[key];
      workText += "<br>"+ value;
    }
    document.getElementById("work").innerHTML = workText;
  }

  const edu = data.education;
  let eduText = "";
  for (let i = 0; i < edu.length; i++) {
    eduText += "<br/>"
    let obj = edu[i];
    for (let key in obj) {
      let value = obj[key];
      eduText += "<br>"+ value;
    }
    document.getElementById("education").innerHTML = eduText;
  }

  const comp = data.compKnowledge;
  let compText = "";
  for (let i = 0; i < comp.length; i++) {
    let obj = comp[i];
    for (let key in obj) {
      let value = obj[key];
      compText += "<br>"+ value;
    }
    document.getElementById("compknow").innerHTML = compText;
  }

  const lang = data.language;
  let langText = "";
  for (let i = 0; i < lang.length; i++) {
    let obj = lang[i];
    for (let key in obj) {
      let value = obj[key];
      langText += "<br>"+ value;
    }
    document.getElementById("language").innerHTML = langText;
  }
}
getAllData();