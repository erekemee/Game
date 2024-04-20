/*var word = 'hello';
switch(word){
	case 'hello':
		console.log('sain bn uu');
		break;
	case 'bonjour':
		console.log('sain bn uu');
		break;
	case 'nihao':
		console.log('sain bn uu');
		break;
	default:
		console.log('iim ug baihgui');
}
var day=1;
switch(day){
	case 1:
		console.log('monday');
	break;
	case 2:
		console.log('tuesday');
	break;
	case 3:
		console.log('wednesday');
	break;
	case 4:
		console.log('thursday');
	break;
	case 5:
		console.log('friday');
	break;
	case 6:
		console.log('saturday');
	break;
	case 7:
		console.log('sunday');
	break;
	default:
		console.log('buruu odor bn');
}
var jams ='alim';
switch(jams){
	case 'alim':
		console.log('ulaan');
	break;
	case 'liir':
		console.log('nogoon');
	break;
	case 'banana':
	case 'lemon':
		console.log('sar');
	break;
	case 'guzeelgene':
		console.log('yagaan');
	break;
}
var sar ='132435464563567556'
switch(sar){
	case '1sar':
	case '2sar':
	case '12sar':
		console.log('uvul');
	break;
	case '3sar':
	case '4sar':
	case '5sar':
		console.log('havar');
	break;
	case '6sar':
	case '7sar':
	case '8sar':
		console.log('zun');
	break;
	case '9sar':
	case '10sar':
	case '11sar':
		console.log('namar');
	break;
	default:
		console.log('tiim sar baihgui bn');
}
var too = +prompt('ta too hiin uu');
var temdeg = prompt('yamar nigen temdeg bich');
var too2 = +prompt('too2 iig odoo bich');
switch(temdeg){
	case "+":
		alert(too+too2)
	break;
	case "-":
		alert(too-too2)
	break;
	case "*":
		alert(too*too2)
	break;
	case "%":
		alert(too%too2)
	break;
    case "/":
		alert(too/too2)
	break;
	default:
		alert('tiim temdeg baihgui bn');
} */
alert('You enterd my game!');
alert('Do you want to play with me?');
var route = prompt('Type yes to play type no to not play');
if(route=='yes'){
	alert('Ok!');
	alert("Choose you're power to fight bad guys");
	var ability = prompt("invisble/teleport");
		if(ability=="teleport"){
			alert("It was a hellish teleport power! and you teleported to hell!");
		}else if(ability=="invisble"){
			alert("You chose Invisblity!");
			alert("Theres a robber and you must stop it before he robs the bank!");
			var answer1 = prompt("fight/warn him");
			if(answer1=="fight"){
				alert("You saved the day!");
			}else if(answer1=="warn him"){
				alert("You tried to warn him but you died!");
			}
		}
}else if(route=="no"){
alert("Guess i will play with you next time... Goodbye");
}




























