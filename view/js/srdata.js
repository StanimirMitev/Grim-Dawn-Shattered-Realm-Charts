var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1u1kxpq8eaIhOLsSotzgL5KsdaLzJklUteE-R-RGtXEc/edit?usp=sharing';
var breakStrings = ["Chest", "Trove", "SotSR", "GotSR"];
var chestArray = [];
var specialChestsArray01 = [null];
var specialChestsArray02 = [null];


function init() {
	Tabletop.init( { key: publicSpreadsheetUrl,
    callback: showInfo,
    parseNumbers: true,
    simpleSheet: true } )
	}

function showInfo(data, tabletop) {
	alert('Successfully processed!')
	//console.log(data);
  tranformDataToArray(data);
}

window.addEventListener('DOMContentLoaded', init)

function tranformDataToArray(data)
{
  var chest = [];
  for (var i = 0, c = 0; i < data.length; i++, c++) {
    chest.push(Object.values(data[i]));
    if(containsBreakStrings(chest[c][0])) {
      chest.pop();
      chestArray.push(chest);
      chest = [];
      c = -1;
    } 
  }
  chestArray.push(chest);
  separateSpecialChests();
}

function separateSpecialChests() {
  for (var i = 17; i <= 21; i++) {
    specialChestsArray01.push(chestArray[i]);
  }
  for (var i = 22; i <= 26; i++) {
    specialChestsArray02.push(chestArray[i]);
  }
  for (var i = 0; i <= 9; i++) {
    chestArray.pop();
  }
  console.log(chestArray);
  console.log(specialChestsArray01);
  console.log(specialChestsArray02);
}

function containsBreakStrings(data) {
  if(data.includes(breakStrings[0])){
    return true;
  } else if(data.includes(breakStrings[1])) {
    return true;
  } else if(data.includes(breakStrings[2])) {
    return true;
  } else if(data.includes(breakStrings[3])) {
    return true;
  }
  return false;
}

  