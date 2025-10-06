function fullLoading(string,autohide){
	$('body').css({
		'width': $(window).width(),
		'height': $(window).height(),
		'overflow': 'hidden'
	});
	$('#overlapfull .loading-text').html(string);
	$('#overlapfull').fadeIn();
	
	if(autohide){
		setTimeout(function(){
			closeFullLoading();
		},2000);
	}
}
function closeFullLoading(){
	$('body').css({
		'width': 'auto',
		'height': 'auto',
		'overflow': 'auto'
	})
	$('#overlapfull').fadeOut();
}

function errAlert(errcode){   
	var captchabug = false;
	if(errcode=="31" || errcode=="39"){
		$('#confirm-db').modal('show');
		captchabug = true;
	}else if(errcode == "37"){
		alert('找不到這個帳號，請點選右上角註冊成為新會員吧');
		captchabug = true;
	}else if(errcode == "91"){
		alert('信箱尚未通過驗證，請收信或重發認證信');
		captchabug = true;
	}else if(errcode == "93"){
		alert('密碼錯誤，請再次檢查您的密碼');
		captchabug = true;
	}else if(errcode == "90"){
		alert('驗證碼輸入錯誤');
		captchabug = true;
	}else if(errcode == "99"){
		alert('這個社群帳號已被使用過，請再次檢查登入身份喔');
	}else{
		alert('登入失敗，請檢查您的帳號密碼');
		captchabug = true;
	}
	
	if (captchabug){
	    $('input[name="ct_captcha"]').val("");
	    $('#siimage').attr('src',base_url+'login/securimage_jpg'); 
	}
}

$(document).ready(function(){
	//全站通用
	jQuery.validator.addMethod("mobileTaiwan", function( value, element ) {
		var str = value;
		var result = false;

		if(str.length > 0){
			//是否只有數字;
			var patt_mobile = /^[\d]{1,}$/;
			result = patt_mobile.test(str);

			if(result){
				//檢查前兩個字是否為 09
				//檢查前四個字是否為 8869
				var firstTwo = str.substr(0,2);
				var firstFour = str.substr(0,4);
				var afterFour = str.substr(4,str.length-1);
				if(firstFour == '8869'){
					// console.log('firstFour8869');
					$(element).val('09'+afterFour);
					if(afterFour.length == 8){
						result = true;
					} else {
						result = false;
					}
				} else if(firstTwo == '09'){
					// console.log('firstTwo09');
					if(str.length == 10){
						result = true;
					} else {
						// console.log('總長要是 10');
						result = false;
					}
				} else {
					// console.log('firstFourNOT');
					result = false;
				}
			}
		}

		return result;
	}, "手機號碼不符合格式，僅允許數字，臺灣地區為10碼，886開頭為12碼");

	jQuery.validator.addMethod("mobileStyle", function( value, element ) {
		var str = value;
		var result = false;

		if(str.length > 0){
			//是否只有數字;
			var patt_mobile = /^[\d]{1,}$/;
			result = patt_mobile.test(str);

			if(result){
				//檢查前兩個字是否為 09
				//檢查前四個字是否為 8869
				var firstTwo = str.substr(0,2);
				var firstFour = str.substr(0,4);
				var afterFour = str.substr(4,str.length-1);
				if(firstFour == '8869'){
					// console.log('firstFour8869');
					$(element).val('09'+afterFour);
					if(afterFour.length == 8){
						result = true;
					} else {
						result = false;
					}
				} else if(firstTwo == '09'){
					// console.log('firstTwo09');
					if(str.length == 10){
						result = true;
					} else {
						// console.log('總長要是 10');
						result = false;
					}
				} else {
					// console.log('firstFourNOT');
					result = true;
				}
			}
		}

		return result;
	}, "手機號碼不符合格式，僅允許數字，臺灣地區為10碼，886開頭為12碼，國外號碼不限位數");

	jQuery.validator.addMethod("phoneStyle", function( value, element ) {
		var str = value;
		var result = false;

		if(str.length > 0){
			var patt_phone = /^[\d\-\(\)\#]{1,}$/;
			result = patt_phone.test(str);
		} else {
			result = true;
		}

		return result;
	}, "電話號碼不符合格式，僅接受數字、#-()等符號");

	jQuery.validator.addMethod("checkpwdhard", function( value, element ) {
		var str = value;
		var result = false;

		var patt = /^[a-zA-Z0-9]{6,20}$/;
		var result1 = patt.test(str);
		//先測試是否有英文
		var pattEN = /[a-zA-Z]{1,}/;
		result2 = pattEN.test(str);
		//先測試是否有數字
		var pattDigit = /[0-9]{1,}/;
		result3 = pattDigit.test(str);

		if(result1 == true && result2 == true && result3 == true){
			result = true;
		} else{
			result = false;
		}

		return result;
	}, "密碼為 6～20個字元的英文字母、數字混合，但不含空白鍵及標點符號。");

	jQuery.validator.addMethod("checkname", function( value, element ) {
		var str = value;

		//先測試是否有中文
		var pattCH = /[\u4e00-\u9fa5]{1,}/;
		result1 = pattCH.test(str);
		//先測試是否有英文
		var pattEN = /[a-zA-Z]{1,}/;
		result2 = pattEN.test(str);
		//檢查先生小姐
		testa = str.search("先生");
		testb = str.search("小姐");

		//整段內容只接受 (英文或中文)或空白、dash、underline
		var pattSimbo = /^[\u4e00-\u9fa5a-zA-Z\-_\s]{1,}$/;
		result3 = pattSimbo.test(str);

		//整段內容是否有空白、dash、underline
		var pattHasSimbo = /[\-_\s]{1,}/;
		result4 = pattHasSimbo.test(str);

		if(result1 && result2){
			// console.log('有中文也有英文');
			result = false;
		} else {
			if(result1){
				// console.log('有中文');
				if(testa == -1 && testb == -1){
					// console.log('沒有先生也沒有小姐');
					if(result3){
						// console.log('符號 合規則');
						if(result4){
							result = false;
						} else {
							result = true;
						}
					} else {
						// console.log('符號不合規則');
						result = false;
					}
				} else {
					// console.log('有先生或小姐');
					result = false;
				}
			} else {
				// console.log('沒有中文');
				result = false;
				if(result2){
					// console.log('有英文');
					if(result3){
						// console.log('符號 合規則');
						result = true;
					} else {
						// console.log('符號不合規則');
						result = false;
					}
				} else {
					// console.log('沒有英文');
					result = false;
				}
			}
		}
		return result;
	}, "姓名可為中文（最少兩字）或英文（最少三字），英文請勿使用除了空白、底線、DASH以外的符號");

	jQuery.validator.addMethod("checkpwd", function( value, element ) {
		var str = value;
		var patt = /^[a-zA-Z0-9]{4,20}$/;
		var result = patt.test(str);
		return result;
	}, "密碼為 6～20個字元的英文字母、數字混合，但不含空白鍵及標點符號。");

	jQuery.validator.addMethod("onlyemail", function( value, element ) {
		var str = value;
		var patt = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
		var result = patt.test(str);
		// console.log(result);
		// console.log('onlyemail'+result);
		return result;
	}, "請輸入正確的 Email 信箱");

	jQuery.validator.addMethod("clubcard", function( value, element ) {
		var str = value;
		var patt = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
		var result = patt.test(str);
		// console.log('clubcard'+result);

		var patt2 = /^[a-zA-Z]\d{7,7}$/;
		var result2 = patt2.test(str);
		// console.log('clubcard'+result2);

		var finalresult = false;

		if(result == true || result2 == true){
			finalresult = true;
		}
		// console.log('clubcard'+finalresult);

		return finalresult;
	}, "帳號不符合格式");

});

/** 剖析URL變數為 jq_GET[] **/
var jq_GET = (function(qurl) {
    if (qurl == "") return {};
    var b = {};
    for (var i = 0; i < qurl.length; ++i)
    {
        var p=qurl[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));


function parentReload(si){
	si = si || null;
	window.parent.postMessage('ssoreload_'+si, '*');
}

function parentRedirect(si){
	si = si || null;
	var gotoUrl = "index";	
	if(typeof jq_GET['rdurl'] == 'string'){	   
		gotoUrl = jq_GET['rdurl'];		
		if(gotoUrl.indexOf("?")>0){
			gotoUrl = gotoUrl+"&si="+si;
		}else{
			gotoUrl = gotoUrl+"?si="+si;
		}
	}			
	parent.location.href = gotoUrl;
}

function parentRedirectnew(si,rdurl){
	si = si || null;
	var gotoUrl = "index";	
	if(rdurl > ''){	   
		if(rdurl.indexOf("?")>0){
			gotoUrl = rdurl+"&si="+si;
		}else{
			gotoUrl = rdurl+"?si="+si;
		}
	}			
	parent.location.href = gotoUrl;
}

//序列化
$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function(){
	page = $('body').attr('rel');
	
	//member-navi 當頁反橘
	if(page != 'register' && page != 'login' && page != 'passwordreset') {
		$('.memebr-'+page+'-btn').addClass('active');
	}
	
	$('.cwgv-table-selectall .select-all').on('click',function(){
		var needChk = $(this).closest('table').find('tbody tr .childchk');

		if($(this).hasClass('active')){
			$(this).removeClass('active');
			needChk.prop("checked",false).change();
		} else {
			$(this).addClass('active');
			needChk.prop("checked",true).change();
		}
	});
});


	
