//jshint esversion:6
$(document).ready(function() {

	var res = 0;
	var op = "";
	var disp = true;
	var scr = $('.screen');

	$('main').on('click','button',function(){
		let input = $(this).text();
		let scrtxt = $('.screen').text();
		switch(input){
			case "AC":
				res = 0;
				op = "";
				disp = true;
				scr.text("0");
				break;
			case "C":
				scr.text("0");
				disp = true;
				$(".buttons > button:first-child").text("AC");
				break;
			case "+/-":
				scr.text(-parseFloat(scrtxt,10) + "");
				break;
			case "%":
				scr.text(parseFloat(scrtxt,10)/100 + "");
				disp = true;
				break;
			case "+":
				updateResult(parseFloat(scrtxt),"+");
				break;
			case "-":
				updateResult(parseFloat(scrtxt),"-");
				break;
			case "x":
				updateResult(parseFloat(scrtxt),"*");
				break;
			case "\u00f7":
				updateResult(parseFloat(scrtxt),"/");
				break;
			case "=":
				updateResult(parseFloat(scrtxt),"=");
				break;
			default:
				if(scrtxt.length >= 15) break; //improve later
				if(disp) {
					scr.text(input);
					disp = false;
				}
				else scr.text(scrtxt + input);
				$(".buttons > button:first-child").text("C");
		}
	});

	function updateResult(num, opr) {
		disp = true;
		switch(op) {
			case "+":
				res += num;
				break;
			case "-":
				res -= num;
				break;
			case "/":
				res /= num;
				break;
			case "*":
				res *= num;
				break;
			default:
				res = num === 0 ? res : num;
		}
		op = opr == "=" ? "" : opr;
		let scrtxt = res + "";
		scr.text(scrtxt.length > 15 ? scrtxt.substr(0,15) : scrtxt);
	}

	$('.modal-trigger').leanModal();

});
