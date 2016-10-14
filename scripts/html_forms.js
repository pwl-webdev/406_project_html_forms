$.validator.addMethod("pwd_upletter",
function(value, element) {
   return /[A-Z]/.test(value);
});
$.validator.addMethod("pwd_downletter",
function(value, element) {
   return /[a-z]/.test(value);
});
$.validator.addMethod("pwd_num",
function(value, element) {
   return /[0-9]/.test(value);
});
$.validator.addMethod("pwd_symbol",
function(value, element) {
   return /[!@#$%\^&\*()_\-.'",\\|/;+=<>\?\{\}]/.test(value);
});

$(document).ready(function(){
	console.log("ready");
	$('#signup_form').validate({
		highlight: function(element) {
    		$(element).parent().addClass("error");
		},
		unhighlight: function(element) {
		    $(element).parent().removeClass("error");
			},
		rules: {
			email: {
				required: true,
				email: true
			},
			confirm_email: {
				required: true,
				email: true,
				equalTo: "#email"
			},
			password: {
				required: true,
				minlength: 8,
				pwd_upletter: true,
				pwd_downletter: true,
				pwd_num: true,
				pwd_symbol: true
			},
			confirm_password: {
				required: true,
				equalTo: "#password"
			}
		},
		messages: {
			confirm_email: {
				equalTo: "Confirm email field does not match the email address field",
				highlight:function(element){
					$('.form_warning').addClass('error');
				},
				unhighlight:function(element){
					$('.form_warning').removeClass('error');
				}
			},
			password: {
				minlength: "Use 8 or more characters",
				pwd_upletter: "Use upper and lower case letters (e.g. Aa)",
				pwd_downletter: "Use upper and lower case letters (e.g. Aa)",
				pwd_num: "Use a number (e.g. 1234)",
				pwd_symbol: "Use a symbol (e.g. !@#$)"/*,
				errorPlacement: function (error, element) {
                        $("#qaErrorLabel").append(error);
                        $("#qaErrorDiv").show();
				}*/
			},
			confirm_password: {
				equalTo: "Confirm password field does not match the password field."
			}
		}
	});
});