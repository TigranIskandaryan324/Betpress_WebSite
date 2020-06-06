$(document).ready(function(){

    var w = window.innerWidth,
        h = window.innerHeight;

    /**
    *   Hover For Navigation Bar
    */

    $('#navBar ul li').hover(
        function() {
            if ($(this).attr('id') !== "card21") {
                $( this ).find('a').css( 'color', '#61BCF7' );
                $( this ).find('img').attr( 'src', 'images/icons/arrowDownBlue.png' );
            } else {
                $( this ).find('img').attr( 'src', 'images/icons/21white.png' );
            }
        }, function() {
            if ($(this).attr('id') !== "card21") {
                $( this ).find('a').css( 'color', '#fff' );
                $( this ).find('img').attr( 'src', 'images/icons/arrowDown.png' );
            } else {
                $( this ).find('img').attr( 'src', 'images/icons/21.png' );
            }
        }
    );

    /**
    *   Hover For Mid section's LIVE table
    */

    $('#liveMidSection #liveBody table tbody').hover(function(){
        var tr = $(this).find('tr');
        $.each(tr, function(index, item){
            var td = $(item).find('td');
            $.each(td, function(key, value){
                if ($(value).hasClass('darkColumn') && $(value).html() != '-') {
                    $(value).removeClass('darkColumn');
                    $(value).addClass('darkHover');
                }

                if (!$(value).hasClass('lightColumn')) {
                    $(value).css({
                        'border-left'  :  '1px solid #EBF2F7',
                        'border-top'   :  '1px solid #EBF2F7',
                        'border-bottom':  '1px solid #EBF2F7'
                    });
                }
            });
            $(item).removeClass('backgroundWhite');
            $(item).addClass('backgrountLightBlue');
        });
        $(this).css('cursor', 'pointer');
    }, function(){
        var tr = $(this).find('tr');
        $.each(tr, function(index, item){
            var td = $(item).find('td');
            $.each(td, function(key, value){
                if ($(value).hasClass('darkHover') && $(value).html() != '-') {
                    $(value).removeClass('darkHover');
                    $(value).addClass('darkColumn');
                }

                if (!$(value).hasClass('lightColumn')) {
                    $(value).css({
                        'border-left'  :  '1px solid #FFFFFF',
                        'border-top'   :  '1px solid #FFFFFF',
                        'border-bottom':  '1px solid #FFFFFF'
                    });
                }
            });
            $(item).addClass('backgroundWhite');
            $(item).removeClass('backgrountLightBlue');
        });
        $(this).css('cursor', 'normal');
    });


    /**
    *   Hover For Mid section's Sport table
    */


    $('#sportMidSection #sportBody table tbody tr').hover(function(){
        var td = $(this).find('td');
        $.each(td, function(key, value){
            if ($(value).hasClass('darkColumn') && $(value).html() != '-') {
                $(value).removeClass('darkColumn');
                $(value).addClass('darkHover');
            }

            if (!$(value).hasClass('lightColumn')) {
                $(value).css({
                    'border-left'  :  '1px solid #EBF2F7',
                    'border-top'   :  '1px solid #EBF2F7',
                    'border-bottom':  '1px solid #EBF2F7'
                });
            }
        });
        $(this).removeClass('backgroundWhite');
        $(this).addClass('backgrountLightBlue');

        $(this).css('cursor', 'pointer');
    }, function(){
        var td = $(this).find('td');
        $.each(td, function(key, value){
            if ($(value).hasClass('darkHover') && $(value).html() != '-') {
                $(value).removeClass('darkHover');
                $(value).addClass('darkColumn');
            }

            if (!$(value).hasClass('lightColumn')) {
                $(value).css({
                    'border-left'  :  '1px solid #FFFFFF',
                    'border-top'   :  '1px solid #FFFFFF',
                    'border-bottom':  '1px solid #FFFFFF'
                });
            }
        });
        $(this).addClass('backgroundWhite');
        $(this).removeClass('backgrountLightBlue');

        $(this).css('cursor', 'normal');
    });

    $('#regType button').on('click', function(){
        var regType = $(this).data('name');

        $(this).addClass('active');
        $(this).nextAll('button').removeClass('active');
        $(this).prevAll('button').removeClass('active');


        $('#'+regType).css({'display' : 'inline-block'});
        $('#'+regType).nextAll('form').css({'display' : 'none'});
        $('#'+regType).prevAll('form').css({'display' : 'none'});
    });

    $('.footerMainDiv').on('click', function(){
        $('.footerAfterClickDiv').toggle('slow');
    });

    $('.betSlipHeader button').on('click', function(){
        var betName = $(this).data('name');

        $('.betSlipHeader').find('.betSlipActive').removeClass('betSlipActive');
        $(this).addClass('betSlipActive');

        $('.betSlip').find('.betSlipBody').css({'display' : 'none'});
        $('#'+betName).css({'display' : 'inline-block'});
    });

    $(document).on('input', '.codeForLoading', function(){
        var inputText = $(this).val();
        if (inputText !== '') {
            $(this).parent().find('button').eq(1).css({'opacity' : 1});
            $(this).parent().find('button').eq(1).removeAttr('disabled');
        } else {
            $(this).parent().find('button').eq(1).css({'opacity' : .5});
            $(this).parent().find('button').eq(1).attr('disabled', 'disabled');
        }
    });

    $('#topMatches .iconDiv').on('click', function(){
        var img = $(this).find('img'),
            div = $('#topMatches #topMatchesDiv');
        
            rotateArrows(img, div);
    });

    $('#sportCategory .iconDiv').on('click',function(){
        var img = $(this).find('img'),
            div = $('#sportCategory #filters');

            rotateArrows(img, div);
    });

    function rotateArrows(item,div) {
        if (div.css('display') === 'none') {
            $(item).addClass('topMatchesIconRotateUp');
            $(item).removeClass('topMatchesIconRotateDown');
            $(div).css('display', 'block');
        } else {
            $(item).removeClass('topMatchesIconRotateUp');
            $(item).addClass('topMatchesIconRotateDown');
            $(div).css('display', 'none');
        }
    }

    $(document).on('mouseover', '.eachCategoryRow', function () {
        var iconName = $(this).find('img').data('name');
        $(this).find('img').attr('src', 'images/icons/sport/' + iconName + '-h.png');
    });

    $(document).on('mouseleave', '.eachCategoryRow', function () {
        var iconName = $(this).find('img').data('name');
        $(this).find('img').attr('src', 'images/icons/sport/' + iconName + '.png');
    });

    $(document).on('click', '#leftSideBar #liveEvents .iconDiv', function () {

        if ($('#leftSideBar').hasClass('hovered')){
            $('#leftSideBar').removeClass('hovered');
        } else {
            $('#leftSideBar').toggleClass('small');
        }
        leftSideBarHover(this);

    });

    $(document).on('mouseover', '#leftSideBar', function () {
        if ($(this).hasClass('small')){
            $(this).removeClass('small');
            $(this).addClass('hovered');
            leftSideBarHover($('#leftSideBar #liveEvents .iconDiv'));
        }
    });

    $(document).on('mouseleave', '#leftSideBar', function () {
        if ($(this).hasClass('hovered')){
            $(this).addClass('small');
            $(this).removeClass('hovered');
            leftSideBarHover($('#leftSideBar #liveEvents .iconDiv'));
        }
    });

    function leftSideBarHover(_this) {
        if ($('#leftSideBar').hasClass('small') || $('#leftSideBar').hasClass('hovered')){
            var categoriesDiv = $('.categoriesMainDiv').find('div').not('.eachCategoryRow, .eachCategoryTitleRow, .eachCategoryTitleRow>div'),
                categoriesDivLen = categoriesDiv.length;

            for (let i = 1; i <= categoriesDivLen; i+=2){
                $(categoriesDiv[i]).toggle();
            }



            if ($('#leftSideBar').hasClass('small')){

                $('#leftSideBar').css('width', '3%');
                $(_this).find('img').attr('src','images/icons/dblRightArrowBlue.png');
                $('.categoriesMainDiv').css({'margin-bottom': '100px'});
                $('#midSection').css({'margin': '0 3%', 'width': '70%', 'float': 'left'});
            } else {
                $('#leftSideBar').css('width','');
                if (!$('#leftSideBar').hasClass('hovered')){
                    $(_this).find('img').attr('src','images/icons/dblLeftArrowBlue.png');
                }
                $('.categoriesMainDiv').css({'margin-bottom': ''});
                $('#midSection').css({'margin': '0 16.7%', 'width': '', 'float': ''});
            }



            $('#leftSideBar').toggleClass('col-md-2');

            $('#liveEvents .titleDiv').toggle();

            $('#topMatches').find('.iconDiv').toggle();
            $('#topMatches .titleDiv').find('span').eq(1).toggle();

            $('#sportCategory').find('.sportCategoryheader').find('div').not('.filterDiv').toggle();
            $('#sportCategory').find('.sportCategoryheader').find('.filterDiv').find('span').eq(1).toggle();
            $('#sportCategory').find('.sportCategoryheader').find('.filterDiv').find('div').toggle();
            $('#sportCategory').find('.filterSearch').toggle();

            $('#leftSideBarBanner').toggle();

            $('#midSection').toggleClass('col-md-7');

        } else {
            $(_this).find('img').attr('src','images/icons/dblLeftArrowBlue.png');
        }

    }

    $(document).on('click', '.filterSearch', function () {
        var prevDiv = $(this).prev(),
            text = '';
        
        $(prevDiv).find('.filterDiv').hide();
        $(prevDiv).find('.filterDblArr').hide();
        $(prevDiv).find('.filterGlob').hide();

        if ($(prevDiv).find('.dynamicSearchDiv').length === 0){

            text += "<div class='dynamicSearchDiv'>"
                + "<input type='search' placeholder='Search...' class='dynamicSearchInput'>"
                + "<i class='clearable__clear'>&times;</i>"
                + "</div>";

            $(prevDiv).append(text);
            $(prevDiv).css('width', '88%');
        } else {
            $('#searchModal').modal('show');
        }
    });

    $(document).on('click', '.dynamicSearchDiv .clearable__clear', function () {
        var searchDiv = $(this).parent(),
            parentDiv = $(this).parents('.sportCategoryheader');

        $(searchDiv).remove();

        $(parentDiv).find('.filterDiv').show();
        $(parentDiv).find('.filterDblArr').show();
        $(parentDiv).find('.filterGlob').show();

        $(parentDiv).css('width', '');
    });

    $(document).on('click', '.modalSearchInputDiv .clearable__clear', function () {
        $(this).prev().val('');
    });

    $(document).on('click', '.resultTypeButtonDiv button', function () {
        if (!$(this).hasClass('activeType')) {
            $(this).parent().find('.activeType').removeClass('activeType');
            $(this).addClass('activeType');
        }
    });

    $(document).on('click', '.offersSecHeader img', function () {
        if ($('#offersSec .offersBannerMainDiv').css('display') === 'none'){
            $('#offersSec .offersBannerMainDiv').fadeIn();
        } else {
            $('#offersSec .offersBannerMainDiv').fadeOut();
        }
    });

    $(document).on('click', '.betSlipIconsDiv .arrowAgainst', function () {

        if ($('#rightSideBar').hasClass('col-md-3')) {
            $('#rightSideBar').removeClass('col-md-3');
            $('#rightSideBar').addClass('col-md-2');

            $('#midSection').removeClass('col-md-7');
            $('#midSection').addClass('col-md-8');
        } else if ($('#rightSideBar').hasClass('col-md-2')) {
            $('#rightSideBar').removeClass('col-md-2');
            $('#rightSideBar').addClass('col-md-4');

            $('#midSection').removeClass('col-md-8');
            $('#midSection').addClass('col-md-6');
        } else if ($('#rightSideBar').hasClass('col-md-4')) {
            $('#rightSideBar').removeClass('col-md-4');
            $('#rightSideBar').addClass('col-md-3');

            $('#midSection').removeClass('col-md-6');
            $('#midSection').addClass('col-md-7');
        }
    });

    $(document).on('click', '.betSlipIconsDiv .arrowRight', function () {

        $('#rightSideBar #rightSideRegistration').toggle();
        $('#rightSideBar .socialAccDiv').toggle();
        $('#rightSideBar #offersSec').toggle();

        $(this).parents('.betSlip').find('.betSlipBody').toggle();
        $(this).parents('.betSlip').find('#myBets').toggle();
        $(this).parents('.betSlip').find('.betSlipFooter').toggle();

        if ($('#rightSideBar').css('position') === 'fixed') {
            $('#rightSideBar').css({'position': 'absolute', 'min-height': '500px'});

            $(this).parents('.betSlip').css({'position': 'absolute', 'top': '263px', 'right': '0', 'z-index': '100'} );

            $(this).parents('.betSlip').find('.betSlipButtonDiv button').css('padding', '6px 35px');

            $(this).parents('.betSlip').find('.betSlipHeader').css({'font-size': '8px', 'height': '33px'});

            $(this).css({'width': '10px', 'height': '10px'});
            $(this).attr('src', 'images/icons/dblLeftArrowWhite.png');
            $(this).next().css({'display': 'none'});

            $('#midSection').removeClass('col-md-7');
            $('#midSection').addClass('col-md-10');
        } else {

            $(this).parents('.betSlip').css('width', '');

            $('#rightSideBar').css({'position': 'fixed', 'min-height': ''});
            $(this).parents('.betSlip').css({'position': '', 'top': '', 'right': '', 'z-index': ''} );

            $(this).parents('.betSlip').find('.betSlipButtonDiv button').css('padding', '10px');

            $(this).parents('.betSlip').find('.betSlipHeader').css({'font-size': '1em', 'height': ''});

            $(this).css({'width': '15px', 'height': '15px'});
            $(this).attr('src', 'images/icons/dblRightArrowWhite.png');
            $(this).next().css({'display': 'block'});

            $('#midSection').removeClass('col-md-10');
            $('#midSection').addClass('col-md-7');
        }

    });

    $(document).on('mouseover', '.betSlipHeader', function () {
        if ($('#rightSideBar').css('position') === 'absolute') {
            $(this).parents('.betSlip').find('.betSlipBody').show();
            $(this).parents('.betSlip').css('width', '47%');
            if ($(this).find('.betSlipActive').data('name') === 'myBets') {
                $(this).parents('.betSlip').find('#myBets').show();
                $(this).parents('.betSlip').find('#betSlip').hide();
            } else {
                $(this).parents('.betSlip').find('#myBets').hide();
                $(this).parents('.betSlip').find('#betSlip').show();
            }
            $(this).parents('.betSlip').find('.betSlipFooter').show();
        }
    });

    $(document).on('mouseleave', '.betSlipHeader', function () {
        if ($('#rightSideBar').css('position') === 'absolute') {
            var isHovered = !!$('.betSlipBody').
            filter(function() { return $(this).is(":hover"); }).length;

            if (isHovered === false){
                $(this).parents('.betSlip').find('.betSlipBody').hide();
                $(this).parents('.betSlip').find('.betSlipFooter').hide();
            }
        }
    });

    $(document).on('mouseleave', '.betSlipBody', function () {
        if ($('#rightSideBar').css('position') === 'absolute'){
            $(this).parents('.betSlip').find('.betSlipBody').hide();
            $(this).parents('.betSlip').find('.betSlipFooter').hide();
        }
    });

    $('.pin').hover(function() {
        $(this).attr('src', 'images/icons/pinIconGray.png');
    }, function() {
        $(this).attr('src', 'images/icons/pinIcon.png');
    });
});


        // log in hover
        // Get the modal
var modal1 = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
//register
var modal2 = document.getElementById('reg');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
//menu karobka
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}


//Right border Open && Close button
function openRight() {
    document.getElementById("bcBetSlipBorderId").style.width = "200px";
    document.getElementById("rightBorderOpen").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeRight() {
    document.getElementById("bcBetSlipBorderId").style.width = "0";
    document.getElementById("rightBorderOpen").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}