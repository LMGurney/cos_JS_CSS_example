function hideElement(){
	var x = document.getElementById("hideMe");
	if (x.style.display === 'none'){
		x.style.display = 'block';
	}else{
		x.style.display = 'none';
	}

}