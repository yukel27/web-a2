/*image slider*/
var imageNum = 0;
var imageArray = [
  "https://cdn.glitch.com/b5d41a28-aa7a-4461-bfb0-b5c027bd1b96%2FIUfall.jpeg?v=1601762107255",
  "https://cdn.glitch.com/b5d41a28-aa7a-4461-bfb0-b5c027bd1b96%2FIUwinter.jpeg?v=1601762095820",
  "https://cdn.glitch.com/b5d41a28-aa7a-4461-bfb0-b5c027bd1b96%2FCancunMorning.jpg?v=1601762091529",
  "https://cdn.glitch.com/b5d41a28-aa7a-4461-bfb0-b5c027bd1b96%2FFallingWater.jpg?v=1601762103614",
  "https://cdn.glitch.com/b5d41a28-aa7a-4461-bfb0-b5c027bd1b96%2Fartpiece.jpg?v=1601762074051"
];
var imageAlt = ["Fall IUB","Winter IUB","Cancun Morning","Falling Water","Yellow Porcelain Vase"];
var textArray=["Fall at IUB","Winter at IUB","December Morning in Cancun","The Falling Water","Yellow Porcelain Vase"]
var myImage;
var targetNode;
window.onload = init;


function init() {
  myImage = document.getElementById("mainImage");
  targetNode = document.getElementById('imgText');
  var buttonPrevious = document.getElementById("Previous");
  var buttonNext = document.getElementById("Next");
  if (buttonPrevious.addEventListener) {
    buttonPrevious.addEventListener(
      "click",
      function() {
        processClicks("previous");
      },
      false
    );
    buttonNext.addEventListener(
      "click",
      function() {
        processClicks("next");
      },
      false
    );
  } else if (buttonPrevious.attachEvent) {
    buttonPrevious.attachEvent("onclick", function() {
      processClicks("previous");
    });
    buttonNext.attachEvent("onclick", function() {
      processClicks("next");
    });
  }
}
function processClicks(action) {
  if (action == "previous") imageNum -= 1;
  else if (action == "next") imageNum++;
  if (imageNum < 0) imageNum = imageArray.length - 1;
  else if (imageNum > imageArray.length - 1) imageNum = 0;
  myImage.src = imageArray[imageNum];
  myImage.alt = imageAlt[imageNum];
  targetNode.textContent = textArray[imageNum];
}

/*add comment and show latest 5*/

var cnt = 0;
localStorage.clear();
window.addEventListener("load", function() {
  // add a "submit" listener to a form element with id "my-form"
  document.getElementById("my-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // catch the "favorite" string
    var comment = document.getElementById("comment");
    localStorage.setItem(cnt, comment.value);
    // create "favorite" element
    var comment = document.createElement("LI");
    // add the new element to document

    comment.appendChild(document.createTextNode("Comment: "+localStorage.getItem(cnt)));

    var newContent = document.getElementById("output");
    newContent.appendChild(comment);

    if(localStorage.length > 5){

      localStorage.removeItem(localStorage.key(0));
      newContent.removeChild(newContent.firstChild);

    }
    cnt += 1;
  });
});
