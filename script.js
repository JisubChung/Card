// CHANGE ONLY THESE NUMBERS!!!

// 3/26/17
// lanscape 10,31,2,7,7,30,44,2,5
// Portrait 10,51,3,8,10,20,40,1

// how many members on each row
var membersPerRow = 10;

// how wide should each photo be
var photoWidth = 51;

// how much padding between photos and border
var borderPadding = 3;

// how much padding between each photos
var photoPaddingTopBottom = 8;
var photoPaddingLeftRight = 10;

// how far to off set from TOP of page
var pageOffSetTOP = 25;

// space between the two cards
var spacer = 40;

// one card or two?
var numOfCards = 1;

// amount of space below the year inside the cards
var bottomSpacer = 5;

// NO MORE CHANGING

var longListOfNames = [
];

function createRowsAndCols (longListOfNames) {
    var totWidth = (membersPerRow*(photoWidth+(photoPaddingLeftRight*2)))+(borderPadding*2)+20;

    $('#container').css('width',totWidth);
    $("#members").css('padding', borderPadding);
    $('#container2').css('width',totWidth);
    $("#members2").css('padding', borderPadding);
    var photoHeigth = photoWidth*1.5;
    var stopPerson = longListOfNames.length;
    if (membersPerRow % longListOfNames.length !== 0) {
      stopPerson = (longListOfNames.length - (longListOfNames.length % membersPerRow));
    }

    var result = "<table cellspacing=\"0\">\n";
    for (i = 0; i < stopPerson; i++)
    {
        if (i % membersPerRow == 0)
        {
            result += "\t<tr>\n";
        }
        result += "\t\t<td><img src=\"Images/" + longListOfNames[i] + ".jpg\" height="+photoHeigth+" width="+photoWidth+"></td>\n";

        if (i % membersPerRow == membersPerRow - 1 || i == longListOfNames.length - 1)
        {
            result += "\t</tr>\n";
        }
    }
    result += "</table>\n";

    result += "<table cellspacing=\"0\">\n";
    for (i = stopPerson; i < longListOfNames.length; i++)
    {
        if (i == stopPerson)
        {
            result += "\t<tr>\n";
        }
        result += "\t\t<td><img src=\"Images/" + longListOfNames[i] + ".jpg\" height="+photoHeigth+" width="+photoWidth+"></td>\n";
    }
    result += "</table>\n";

    return result;
}

function showTags(markup) {
    return markup.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
}

$( document ).ready(function() {
    if(numOfCards==1) {
      $('#container').css('height', '10.35in');
      $('#container').css('width', '8in');
      $("#second").remove();
      $("#spacer").remove();
    }

    var result = createRowsAndCols(longListOfNames);
    $("#members").append(result);
    $("#members img").css('padding', photoPaddingTopBottom);
    $("#members img").css('padding-left', photoPaddingLeftRight);
    $("#members img").css('padding-right', photoPaddingLeftRight);
    $("#members img").css('display', 'block');
    $('#paper').css('padding-top', pageOffSetTOP);

    if(numOfCards===2) {
      $("#members2").append(result);
      // $("#members2 img").css('padding', photoPadding);
      // $("#members2 img").css('padding', photoPadding);
      $("#members2 img").css('display', 'block');
      $('#paper2').css('padding-top', pageOffSetTOP);
      $('#spacer').css('width', spacer);
    }


    var today = new Date();
    var year = today.getFullYear();

    $('.year').text(year).css('padding-bottom',bottomSpacer);
});

// window.print();
