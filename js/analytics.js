

$(document).ready(function() {
  var showdate=localStorage.getItem("dailyShowDate");
console.log("dailyShowDate",showdate);

  $.ajax({

    url:'http://52.7.123.186:8080/analysis/user-snapshot-views?date='+showdate,
    contentType:"application/x-www-form-urlencoded",
    type: 'GET',
    dataType: 'json',
    crossDomain: true,

    error: function() {
      $('#info').html('<p>An error has occurred</p>');
    },
    success: function (data) {
      var baseEmailAddress, numOfAccounts, userAccountStatus, trHTML='', details;

      // console.log('data>>>',data);

      data.forEach(function(single){
        // console.log("single>>>>",single);
        baseEmailAddress=single.baseEmailAddress;
        // console.log("baseEmailAddress>>>",baseEmailAddress);
        numOfAccounts = single.numOfAccounts.GMAIL+single.numOfAccounts.GMAIL_CALENDAR+single.numOfAccounts.SALESFORCE+single.numOfAccounts.TWITTER;
        // console.log("numOfAccounts>>>",numOfAccounts);
        userAccountStatus=single.userAccountStatus;
        // console.log("userAccountStatus>>>>",userAccountStatus);
        details=single.baseEmailAddress;
        //  console.log(">>>>>>",trHTML);

        trHTML += '<tr><td>' + baseEmailAddress + '</td><td>' + numOfAccounts + '</td><td>' + userAccountStatus +'</td><td><a href="analyticsDetail.html">'+details +'</a></td></tr>';
        // console.log("userAccountStatus>>>",userAccountStatus);

      })//for each
      $('#example1').append(trHTML);

    },//success
    complete: function (data) {
      trcolor();
      alink();
     }
  });//ajax/ajax
});

function myFunction() {
   var input, filter, table, tr, td, i;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   table = document.getElementById("example1");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];
     if (td) {
       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }
   }
 }

 function alink(txt) {
    var input, filter, table, tr, td, i,tdd;
    table = document.getElementById("example1");
    tr = table.getElementsByTagName("tr");
   for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];

//console.log("td>>>>",$("td > a").text() + " ");


      }
      $("td > a").click(function(e) {
         txt = $(e.target).text();

        console.log(txt);
        // return txt;
localStorage.setItem('userEmail', txt);
console.log("localStorage>>>>",localStorage.userEmail);
        //window.location = 'analyticsDetail.html';
      });
    }

// var test ={
//   email:
// };
// console.log("#####",test.email);
 //function number sortTable
 function numbersortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("example1");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      //check if the two rows should switch place:
      if (x.innerHTML > y.innerHTML) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
 }
 //sorting table function
 function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("example1");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
 function trcolor(){
   tablecolor = document.getElementById("example1");
   tr = tablecolor.getElementsByTagName("tr");

   for (i = 1; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[2];
    //  console.log("td>>>",td);
       if (td.innerHTML.toUpperCase()=="VALID") {
        $(tr[i]).css('background-color', '#99ff99');
        }
        if(td.innerHTML.toUpperCase()=="INVALID") {
            $(tr[i]).css('background-color', '#ff8080');
          }

 if(td.innerHTML.toUpperCase()=="PARTIAL_VALID") {
     $(tr[i]).css('background-color', '#ffff80');

    }
 }
 }
