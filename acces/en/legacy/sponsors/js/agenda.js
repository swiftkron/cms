    <!-- AGENDA -->
		// initialize
		$(document).ready(function() 
				{ 
					$.ajax({
					type: "GET",
					url: "agenda.xml",
					dataType: "xml",
					success:
					function(xml){
					//Be sure to update country code below
/*					$(xml).find("AGENDA").find("THU").find("item").each(function(){
						var start = $(this).find('start').text();
						var end = $(this).find('end').text();
						var title = $(this).find('title').text();
						var description = $(this).find('description').text();
						var location = $(this).find('location').text();
						var attendance = $(this).find('attendance').text();
						var category = $(this).find('category').text();
						$("<tr class=\"THU\"></tr>").html("<td>"+start+" &ndash; "+end+"</td><td><p>"+category+"</p></td><td><p>"+title+"</p></td>").appendTo("#agendaThu");

					});
					$(xml).find("AGENDA").find("FRI").find("item").each(function(){
						var start = $(this).find('start').text();
						var end = $(this).find('end').text();
						var title = $(this).find('title').text();
						var description = $(this).find('description').text();
						var location = $(this).find('location').text();
						var attendance = $(this).find('attendance').text();
						var category = $(this).find('category').text();
						$("<tr class=\"FRI\"></tr>").html("<td>"+start+" &ndash; "+end+"</td><td><p>"+category+"</p></td><td><p>"+title+"</p></td>").appendTo("#agendaFri");

					});
					$(xml).find("AGENDA").find("SAT").find("item").each(function(){
						var start = $(this).find('start').text();
						var end = $(this).find('end').text();
						var title = $(this).find('title').text();
						var description = $(this).find('description').text();
						var location = $(this).find('location').text();
						var attendance = $(this).find('attendance').text();
						var category = $(this).find('category').text();
						$("<tr class=\"SAT\"></tr>").html("<td>"+start+" &ndash; "+end+"</td><td><p>"+category+"</p></td><td><p>"+title+"</p></td>").appendTo("#agendaSat");

					});
					$(xml).find("AGENDA").find("SUN").find("item").each(function(){
						var start = $(this).find('start').text();
						var end = $(this).find('end').text();
						var title = $(this).find('title').text();
						var description = $(this).find('description').text();
						var location = $(this).find('location').text();
						var attendance = $(this).find('attendance').text();
						var category = $(this).find('category').text();
						$("<tr class=\"SUN\"></tr>").html("<td>"+start+" &ndash; "+end+"</td><td><p>"+category+"</p></td><td><p>"+title+"</p></td>").appendTo("#agendaSun");

					});
					$(xml).find("AGENDA").find("MON").find("item").each(function(){
						var start = $(this).find('start').text();
						var end = $(this).find('end').text();
						var title = $(this).find('title').text();
						var description = $(this).find('description').text();
						var location = $(this).find('location').text();
						var attendance = $(this).find('attendance').text();
						var category = $(this).find('category').text();
						$("<tr class=\"MON\"></tr>").html("<td>"+start+" &ndash; "+end+"</td><td><p>"+category+"</p></td><td><p>"+title+"</p></td>").appendTo("#agendaMon");

					});
					$(xml).find("AGENDA").find("ADD").find("item").each(function(){
						var start = $(this).find('start').text();
						var end = $(this).find('end').text();
						var title = $(this).find('title').text();
						var description = $(this).find('description').text();
						var location = $(this).find('location').text();
						var attendance = $(this).find('attendance').text();
						var category = $(this).find('category').text();
						$("<tr class=\"ADD\"></tr>").html("<td><p>"+title+"</p></td>").appendTo("#agendaAdd");

					});
*/
						var thu = $('div#Thursday');
						var fri = $('div#Friday');
						var sat = $('div#Saturday');
						var sun = $('div#Sunday');
						var mon = $('div#Monday');
						var add = $('div#Additional');
						
						$('#agenda-thu').click(function() {
								thu.show();
								fri.hide();
								sat.hide();
								sun.hide();
								mon.hide();
								add.hide();
						});
						
						$('#agenda-fri').click(function() {
								thu.hide();
								fri.show();
								sat.hide();
								sun.hide();
								mon.hide();
								add.hide();
						});
						$('#agenda-sat').click(function() {
								thu.hide();
								fri.hide();
								sat.show();
								sun.hide();
								mon.hide();
								add.hide();
						});
						$('#agenda-sun').click(function() {
								thu.hide();
								fri.hide();
								sat.hide();
								sun.show();
								mon.hide();
								add.hide();
						});

						$('#agenda-mon').click(function() {
								thu.hide();
								fri.hide();
								sat.hide();
								sun.hide();
								mon.show();
								add.hide();
						});

						$('#agenda-add').click(function() {
								thu.hide();
								fri.hide();
								sat.hide();
								sun.hide();
								mon.hide();
								add.show();
						});
	
						$('#agenda-all').click(function() {
								thu.show();
								fri.show();
								sat.show();
								sun.show();
								mon.show();
								add.show();
						});

					},
					error: function(){
						alert("An error occurred while processing XML file.");
					}
				});
		});
		