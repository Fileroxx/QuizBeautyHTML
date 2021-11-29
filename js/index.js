
// * Limites de select de imagens // IGOR

function checkboxlimit(checkgroup, limit){
	var checkgroup=checkgroup
	var limit=limit
	for (var i=0; i<checkgroup.length; i++){
		checkgroup[i].onclick=function(){
		var checkedcount=0
		for (var i=0; i<checkgroup.length; i++)
			checkedcount+=(checkgroup[i].checked)? 1 : 0
		if (checkedcount>limit){
			alert("You can only select a maximum of "+limit+" choices.")
			this.checked=false
			}
		}
	}
}

checkboxlimit(document.forms.builder.color, 1)
  checkboxlimit(document.forms.builder.font, 1)