$(document).ready(function() {

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

    $('#calendar').fullCalendar({
    	dayClick: function() {
        	alert('a day has been clicked!');
    	},
    	events: [
    			{
                    title: 'Träning - Juniorer',
                    start: new Date(y, m, 1, 11, 30),
                    end: new Date(y, m, 1, 13, 00),
                    allDay: false
                },
                {
                    title: 'Träning Umeå AFC',
                    start: new Date(y, m, 6, 20, 15),
					end: new Date(y, m, 6, 22, 00),
                    allDay: false
                },
                {
                    title: 'Träning - Juniorer',
                    start: new Date(y, m, 8, 11, 30),
					end: new Date(y, m, 8, 13, 00),
                    allDay: false
                }
				{
                    title: 'Träning - Juniorer',
                    start: new Date(y, m, 15, 11, 30),
					end: new Date(y, m, 15, 13, 00),
                    allDay: false
                }
				{
                    title: 'Träning - Juniorer',
                    start: new Date(y, m, 22, 11, 30),
					end: new Date(y, m, 22, 13, 00),
                    allDay: false
                }
		],
        header: {
            left: '',
            center: 'title',
            right: 'today prev, next'
        },
        footer: {
            left: 'prev',
            center: '',
            right: 'next'
        }
    });
});

$('#my-prev-button').click(function() {
    $('#calendar').fullCalendar('prev');
});

$('#my-next-button').click(function() {
    $('#calendar').fullCalendar('next');
});

$('#my-today-button').click(function() {
    $('#calendar').fullCalendar('today');
});
