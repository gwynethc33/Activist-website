/* .js files add interaction to your website */


var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
var name = document.getElementById("name").value;
var location = document.getElementById("location").value;
var action = document.getElementById("action").value;

displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am writing to you to make you aware of the continued inequalities faced in my community. Despite some change, minorities still continue to face inequality in education especially and in the community. I urge you to take action immediately to address some of these injustices. For example, " + action + ". Thank you for your attention to this matter.";
}