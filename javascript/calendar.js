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
                    title: 'Praent vestibulum',
                    start: new Date(y, m, 1, 9, 00),
                    end: new Date(y, m, 1, 10, 00),
                    allDay: false
                },
                {
                    title: 'Vestibulum iaculis lacinia',
                    start: new Date(y, m, 2, 16, 00),
                    allDay: false
                },
                {
                    title: 'Integer rutrum ante eu lacus',
                    start: new Date(y, m, 4, 16, 00),
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