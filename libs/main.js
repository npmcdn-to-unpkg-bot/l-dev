
/**
* Defining documentation using jsDoc
*/
/**
* jQuery document ready function to initialze the code once DOM is ready
* @external "jQuery"
* @see {@link http://docs.jquery.com/ The jQuery API}
*/
$(function(){

	/** 
	* Invoking Bootstrap Carousel on dom element with class called .carousel 
	* @external "bootstrap"
	*/
	$('.carousel').carousel({
		  interval: 5000,
          pause: "hover",

	});


	//$('#dashboard-datatable').DataTable();

	/* Tooltip for invest widget*/
	$('[data-toggle="tooltip"]').tooltip();
	/*----------- FAQ Accordian ---------------*/

	$(document).on("hide.bs.collapse show.bs.collapse", ".collapse", function(event) {
	    $(this).prev().find(".glyphicon").toggleClass("glyphicon-plus glyphicon-minus");
	    $(this).prev().find("span.pull-right.text-muted").toggleClass("expandir fechar");
	    $(this).parent().find('.panel-heading').toggleClass('active');
	    event.stopPropagation();
	});

	/*----------- ./ FAQ Accordian ---------------*/
});


$(document).on('click', '.jsDropDownMenu', function() {
    console.info('menu item trigger');

    // var $this = $(this),
    //     pos = $this.position();


    // $('.jsDropDownMenu').hide();

    // var menuTargetSel = $this.data('target'),
    //     menuTargetObj = $('#' + menuTargetSel);

    // menuTargetObj.css({
    //     position: 'absolute',
    //     left: pos.left + 20,
    //     top: pos.top,
    //     zIndex: 1000
    // });

    $(".loginDropdown").show();
});

function showBorrowerCarousel() {
    $("#borrower-view").owlCarousel({
        items: 2.3,
        lazyLoad: true,
        navigation: true
    });
}


function startIntro(deviceType) {
    
    var desktopIntro = new Tour({
        steps: [{
            element: '#step1',
            content: "You can always change your preferences by:<br/><br/>- Enter the amount you want to invest.<br/>-  Choose expected rate of return.<br/>-  Choose tenure.<br/>-  Hit the arrow button, your portfolio will be auto generated.",
            placement: 'bottom',
            smartPlacement: true,
            autoscroll: true
        }, {
            element: '#step2',
            content: 'Based on your preferences,<br/>MY POOL dynamically gets gerenrated.<br/><br/><b>My pool info: </b><br/>-  Total value  of the pool.<br/>- Risk category of the pool.<br/>-  List of borrowers in the pool.<br/>-  You can remove, add borrowers in the pool.<br/>- Drag to remove the borrower out of the pool.<br/>- Invest button to fulfill loan.',
            placement: 'left',
            smartPlacement: true,
            autoscroll: true
        }, {
            element: '#step3',
            content: "All Borrower listing:<br/><br/>- Click on individual row header to sort the column.<br/>- You can single, multiselect borrower using check box control.<br/>- You can do direct investment by choosing the borrower click 'INVEST NOW' button.<br/>- You can also Add borrowers to pool, by hitting 'ADD TO POOL' button.",
            placement: 'right',
            smartPlacement: true,
            autoscroll: true
        }],
        debug: false,
        backdrop: true,
        backdropContainer: 'body',
        backdropPadding: 0,
        orphan: false,
        duration: false,
        animation: true,
        delay: false,
        template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default skip-btn' data-role='end'>Skip</button><button class='btn btn-default next-btn' data-role='next'>Next</button></div></div>"
    });

    var mobileIntro = new Tour({
            steps: [{
                element: '#step1',
                content: "You can always change your preferences by:<br/><br/>- Enter the amount you want to invest.<br/>-  Choose expected rate of return.<br/>-  Choose tenure.<br/>-  Hit the arrow button, your portfolio will be auto generated.",
                placement: 'top',
                smartPlacement: true,
                autoscroll: true
            }, {
                element: '#step2',
                content: 'Based on your preferences,<br/>MY POOL dynamically gets gerenrated.<br/><br/><b>My pool info: </b><br/>-  Total value  of the pool.<br/>- Risk category of the pool.<br/>-  List of borrowers in the pool.<br/>-  You can remove, add borrowers in the pool.<br/>- Drag to remove the borrower out of the pool.<br/>- Invest button to fulfill loan.',
                placement: 'top',
                smartPlacement: true,
                autoscroll: true
            }, {
                element: '#step3',
                content: "All Borrower listing:<br/><br/>- Click on individual row header to sort the column.<br/>- You can single, multiselect borrower using check box control.<br/>- You can do direct investment by choosing the borrower click 'INVEST NOW' button.<br/>- You can also Add borrowers to pool, by hitting 'ADD TO POOL' button.",
                placement: 'top',
                smartPlacement: true,
                autoscroll: true
            }],
            debug: false,
            backdrop: true,
            backdropContainer: 'body',
            backdropPadding: 0,
            orphan: false,
            duration: false,
            animation: true,
            delay: false,
            template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default skip-btn' data-role='end'>Skip</button><button class='btn btn-default next-btn' data-role='next'>Next</button></div></div>"
        });

    if(deviceType){
        if(deviceType.toLowerCase() === 'mobileortablet'){
            console.info('Start the mobile tour');

            mobileIntro.setCurrentStep(0);
            mobileIntro.init();
            mobileIntro.start(true);
        }

        if(deviceType.toLowerCase() === 'desktop'){
            console.info('Start the desktop tour');

            desktopIntro.setCurrentStep(0);
            desktopIntro.init();
            desktopIntro.start(true);
        }

    }else{
        console.error('value for deviceType parameter not found');
    }
}

// $(document).ready(function() {
//   console.log('hi');

// });
