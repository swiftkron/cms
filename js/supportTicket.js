    //Takes strings for each of the parameters, returns object containing ticket number and/or error message
    function GetTicket(country, firstname, lastname, email, phone, product, description, accountnumber, companyname, language, postcode, querytype) {
        var url = "https://crm-web1.crmcloud.infor.com/RESTServices/CreateTicketService.svc/";
        var value = { "Country": country, "EmailAddress": email, "FirstName": firstname,
            "LastName": lastname, "PhoneNumber": phone, "QueryType": querytype,
            "Product": product, "Description": description,
            "AccountNumber": accountnumber, "CompanyName": companyname, "PostalCode": postcode,
            "PreferredLanguage": language
        }
        var client = new XMLHttpRequest();

        client.open("POST", url, false);

        // client.withCredentials = true; // this line is not needed and is the cause of the issue. 
        // it is used to indicate whether or not the browser should send credentials with the OPTIONS request. 
        // The service will respond to any OPTIONS request it receives so credential are not needed for this operation. 

        client.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        client.setRequestHeader("Authorization", "Basic dXNlcjpwYXNzd29yZA==");

        //client.onreadystatechange = function () {
        //    if (client.readyState == 4 && client.status == 200) {
        //    }
        //}

        client.send(JSON.stringify(value));  // this line actually sets the request�s body
        var resp = client.responseText;
        return resp;

    }

// Validator
    $(document).ready(function () {
			
        // Define Language
				language = $('input[name=PreferredLanguage]').val();

				// Place ID's of all required fields here.
        required = ["country", "firstname", "lastname", "emailaddress", "phone", "product", "description"];
        // If using an ID other than #email or #error then replace it here
        email = $("#emailaddress");
        firstname = $("#firstname");
        lastname = $("#lastname");
        company = $("#company");
        country = $("#country");
        phone = $("#phone");
        product = $("#product");
        description = $("#description");
        accountnumber = $("#accountnumber");
        errornotice = $("#error");
        postcode = $("#postalcode");
        // The text to show up within a field when it is incorrect
        emptyerror = "Please fill out this field.";
        emailerror = "Please enter a valid e-mail.";
        phoneerror = "Please enter a valid phone number";

        $("#ticketForm").submit(function () {
            //Validate required fields
            for (i = 0; i < required.length; i++) {
                var input = $('#' + required[i]);
                if ((input.val() == "") || (input.val() == emptyerror)) {
                    input.addClass("needsfilled");
                    input.val(emptyerror);
                    errornotice.fadeIn(750);
                } else {
                    input.removeClass("needsfilled");
                }

            }
            // Validate the e-mail.
            if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
                email.addClass("needsfilled");
                email.val(emailerror);
            }

            // Validate the phone number.
            if (!/^[+()-]?(?:\d*\.)?\d+[+()-]?/.test(phone.val())) {
                phone.addClass("needsfilled");
                phone.val(phoneerror);
            }

            // Clears any fields in the form when the user clicks on them
            $(":input").focus(function () {
                if ($(this).hasClass("needsfilled")) {
                    $(this).val("");
                    $(this).removeClass("needsfilled");
                }
            });

            //var ticketnumbertest = GetTicket("United States", "Brian", "Mowka", "bmowka@yahoo.com", "480-855-7986", "act! Premium", "This is a test", "", "Swiftpage", "German", "85268", "");
            //alert(ticketnumbertest);

            //if any inputs on the page have the class 'needsfilled' the form will not submit
            if ($(":input").hasClass("needsfilled")) {
                return false;
            } else {
                errornotice.hide();
								var ticketnumber = GetTicket(country.val(), firstname.val(), lastname.val(), email.val(), phone.val(), product.val(), description.val(), accountnumber.val(), company.val(), language, postcode.val(), "");
								var rmsg = JSON.parse(ticketnumber);
								
								//alert(ticketnumber);
								$('.supportForm').css('display','none');
								
								// Display confirmation or error message from REST service
								if (!rmsg.TicketNumber){
									$('.returnMsg').addClass('returnError');
									$('.returnMsg').html("<h2>Sorry, we encountered an error generating the support ticket.</h2><p>Please contact customer support by calling <strong>(866) 873-2006</strong> or by emailing us at <a href=\"mailto:support@act.com\">support@act.com</a>.</p>");
								}
								else {
									$('.returnMsg').html("<h2>Thank you – your ticket has been created</h2><p>Ticket Number: <strong>"+ rmsg.TicketNumber +"</strong></p><p><strong>An Act! Support representative will respond to your query within 4 business hours.</strong></p>");
								}
								
								$('.returnMsg').css('display','block');
                return false;
            }
        });

    });
