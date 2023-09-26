function hideElement(){
	var x = document.getElementById("hideMe");
	if (x.style.display === 'none'){
		x.style.display = 'block';
	}else{
		x.style.display = 'none';
	}

}


function myFunction(myThumb){
	myThumb.classList.toggle("fa-thumbs-down");
	
}

function swapImg(myCupCake){
	myCupCake.src="images/rainbowChocolate1.png";
}
function swapImgBack(myCupCake){
	myCupCake.src="images/rainbowStrawberry.png";
}

function MouseRollover(myImg){
	myImg.src="images/cupcakes-2285209_1280.jpg";
}
function MouseOut(myImg){
	myImg.src="images/cupcakesImage.jpg";
}

function validateForm(){
	let fname = document.forms['myForm']['fname'].value;
	if (fname === ""){
		alert("Name must be filled out");
		return false;
	}
}











