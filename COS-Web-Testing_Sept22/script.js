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









