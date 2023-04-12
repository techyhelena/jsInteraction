let heading = document.getElementById("header");
let title = document.getElementById("title");
let readyButton = document.getElementById("readyButton");
let outputParagraph = document.getElementById("outputText");
let imgs = document.getElementById("outputPic");
var inputElement = document.getElementById("myInput");


// list of array
var foodItems = ["rice cracker", "haw flake", "white rabbit candy", "pocky", "dried fish", "yakult", "Hello Panda", "Yan Yan", "Choco Pie", "taiyaki"];
var imgItems = ["img/riceCracker.jpg", "img/hawflakes.jpg", "img/whiteRabbit.jpg", "img/pocky.jpg", "img/driedFish.jpg",  "img/yakult.jpg", "img/helloPanda.jpg", "img/yanyan.jpg", "img/chocoPie.png", "img/taiyaki.jpg"];
var style = ["normal", "italic", "oblique"];

readyButton.addEventListener("click", function() {
	var currentInputText = inputElement.value; // storing user's input
		if(currentInputText) {
		generate(currentInputText);
		restyle();
		} 
		else {
			outputParagraph.innerText = "Please enter a name."
		}
});

function generate(incUserInput) {
	var randomIndex = Math.floor(Math.random() * foodItems.length); // getting a random number from index 1-10
	var selectedRandomText= foodItems[randomIndex]; // retrieving the random element picked
	var selectedImg = imgItems[randomIndex]; // retrieving img from the specific index
	outputParagraph.innerText = incUserInput + ", you are a " + selectedRandomText + "!";
	// changing directory for images
	imgs.src = selectedImg;
}

function restyle() {
	var randomR = Math.floor(Math.random() * 255); 
	var randomG = Math.floor(Math.random() * 255);
	var randomB = Math.floor(Math.random() * 255); 

	// changing font style for every interaction
	var styleIndex = Math.floor(Math.random() * style.length);
	var selectedStyle = style[styleIndex];
	outputParagraph.style.fontStyle = selectedStyle;
	title.style.fontStyle = selectedStyle

	console.log(outputParagraph.style.fontStyle);

	// changing color of the box for every interaction
	var randomOutputColor = "rgba("+ randomR + ", " + randomG + ", " + randomB +  ", 80%" + ")";
	heading.style.backgroundColor = randomOutputColor;

}

