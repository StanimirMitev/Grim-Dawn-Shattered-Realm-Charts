google.charts.load('current', {packages: ['corechart', 'line']});
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1u1kxpq8eaIhOLsSotzgL5KsdaLzJklUteE-R-RGtXEc/edit?usp=sharing';
var breakStrings = ["Chest", "Trove", "SotSR", "GotSR"];
var searchStrings = ["Legendary", "Epic", "MAGIC+", "RARE", "NEMESIS", "MI ", "Components", "Materials", "Blueprints", "BlueprintRunes"];
var chestArray = [];
var specialChestsArray01 = [null];
var specialChestsArray02 = [null];

var rewardTableData = [];
var rewardTableDataWithBonus = [];
var checkpointTableData = [];
var checkpointTableDataWithBonus = [];

var dbrChestA = 0;
var dbrChestB = 1;
var dbrChestC = 2;
var dbrChestD = 3;
var dbrChestE = 4;
var dbrChestF = 5;
var dbrChestG = 6;
var dbrChestH = 7;
var dbrChestI = 8;
var dbrChestJ = 9;
var dbrChestK = 10;
var dbrChestL = 11;
var dbrChestM = 12;
var dbrChestN = 13;
var dbrChestO = 14;
var dbrChestP = 15;
var dbrChestQ = 16;

var dbrSpecialChestA = 1;
var dbrSpecialChestB = 2;
var dbrSpecialChestC = 3;
var dbrSpecialChestD = 4;
var dbrSpecialChestE = 5;

var dbrSpecialChest02A = 1;
var dbrSpecialChest02B = 2;
var dbrSpecialChest02C = 3;
var dbrSpecialChest02D = 4;
var dbrSpecialChest02E = 5;

// Reward Table by Reward Tier with # of Entries equal to # of Chests
// Chests go from A to Q, with incrementally better rewards, null for when the chest location is unused
var rewardTable = [];
rewardTable[0] = [ null, null, dbrChestA, dbrChestB, dbrChestA, null, null ]
rewardTable[1] = [ null, dbrChestA, dbrChestD, dbrChestJ, dbrChestD, dbrChestA, null ];
rewardTable[2] = [ null, dbrChestB, dbrChestD, dbrChestJ, dbrChestD, dbrChestB, null ];
rewardTable[3] = [ null, dbrChestB, dbrChestE, dbrChestJ, dbrChestD, dbrChestB, null ];
rewardTable[4] = [ null, dbrChestC, dbrChestE, dbrChestJ, dbrChestD, dbrChestB, null ];
rewardTable[5] = [ null, dbrChestC, dbrChestE, dbrChestJ, dbrChestD, dbrChestC, null ];

rewardTable[6] = [ null, dbrChestD, dbrChestE, dbrChestJ, dbrChestE, dbrChestC, null ];
rewardTable[7] = [ null, dbrChestD, dbrChestF, dbrChestJ, dbrChestE, dbrChestC, null ];
rewardTable[8] = [ null, dbrChestE, dbrChestF, dbrChestJ, dbrChestE, dbrChestC, null ];
rewardTable[9] = [ null, dbrChestE, dbrChestF, dbrChestJ, dbrChestE, dbrChestC, null ];
rewardTable[10] = [ null, dbrChestE, dbrChestG, dbrChestJ, dbrChestE, dbrChestC, null ];

rewardTable[11] = [ null, dbrChestE, dbrChestG, dbrChestJ, dbrChestF, dbrChestD, null ];
rewardTable[12] = [ null, dbrChestF, dbrChestG, dbrChestJ, dbrChestF, dbrChestD, null ];
rewardTable[13] = [ null, dbrChestF, dbrChestH, dbrChestK, dbrChestF, dbrChestD, null ];
rewardTable[14] = [ null, dbrChestF, dbrChestH, dbrChestK, dbrChestF, dbrChestE, null ];
rewardTable[15] = [ null, dbrChestF, dbrChestH, dbrChestK, dbrChestG, dbrChestE, null ];

rewardTable[16] = [ null, dbrChestG, dbrChestI, dbrChestK, dbrChestG, dbrChestE, null ];
rewardTable[17] = [ null, dbrChestG, dbrChestI, dbrChestL, dbrChestG, dbrChestF, null ];
rewardTable[18] = [ null, dbrChestG, dbrChestI, dbrChestL, dbrChestG, dbrChestF, null ];
rewardTable[19] = [ null, dbrChestG, dbrChestI, dbrChestL, dbrChestH, dbrChestF, null ];
rewardTable[20] = [ null, dbrChestG, dbrChestJ, dbrChestL, dbrChestH, dbrChestF, null ];

rewardTable[21] = [ null, dbrChestH, dbrChestJ, dbrChestL, dbrChestH, dbrChestG, null ];
rewardTable[22] = [ null, dbrChestH, dbrChestJ, dbrChestL, dbrChestI, dbrChestG, null ];
rewardTable[23] = [ null, dbrChestH, dbrChestK, dbrChestL, dbrChestI, dbrChestG, null ];
rewardTable[24] = [ null, dbrChestH, dbrChestK, dbrChestM, dbrChestI, dbrChestG, null ];
rewardTable[25] = [ null, dbrChestH, dbrChestK, dbrChestM, dbrChestI, dbrChestH, null ];

rewardTable[26] = [ null, dbrChestI, dbrChestK, dbrChestM, dbrChestI, dbrChestH, null ];
rewardTable[27] = [ null, dbrChestI, dbrChestK, dbrChestM, dbrChestJ, dbrChestH, null ];
rewardTable[28] = [ null, dbrChestI, dbrChestL, dbrChestM, dbrChestJ, dbrChestH, null ];
rewardTable[29] = [ null, dbrChestI, dbrChestL, dbrChestM, dbrChestJ, dbrChestI, null ];
rewardTable[30] = [ null, dbrChestJ, dbrChestL, dbrChestM, dbrChestJ, dbrChestI, null ];

rewardTable[31] = [ null, dbrChestJ, dbrChestL, dbrChestN, dbrChestK, dbrChestI, null ];
rewardTable[32] = [ null, dbrChestJ, dbrChestM, dbrChestN, dbrChestK, dbrChestI, null ];
rewardTable[33] = [ null, dbrChestJ, dbrChestM, dbrChestN, dbrChestK, dbrChestJ, null ];
rewardTable[34] = [ null, dbrChestK, dbrChestM, dbrChestN, dbrChestK, dbrChestJ, null ];
rewardTable[35] = [ null, dbrChestK, dbrChestM, dbrChestN, dbrChestL, dbrChestJ, null ];

rewardTable[36] = [ null, dbrChestK, dbrChestN, dbrChestN, dbrChestL, dbrChestJ, null ];
rewardTable[37] = [ null, dbrChestK, dbrChestN, dbrChestN, dbrChestL, dbrChestK, null ];
rewardTable[38] = [ null, dbrChestK, dbrChestN, dbrChestO, dbrChestL, dbrChestK, null ];
rewardTable[39] = [ null, dbrChestL, dbrChestN, dbrChestO, dbrChestL, dbrChestK, null ];
rewardTable[40] = [ null, dbrChestL, dbrChestN, dbrChestO, dbrChestM, dbrChestK, null ];

rewardTable[41] = [ dbrChestB, dbrChestL, dbrChestN, dbrChestO, dbrChestM, dbrChestL, null ];
rewardTable[42] = [ dbrChestB, dbrChestL, dbrChestO, dbrChestO, dbrChestM, dbrChestL, null ];
rewardTable[43] = [ dbrChestC, dbrChestL, dbrChestO, dbrChestO, dbrChestM, dbrChestL, null ];
rewardTable[44] = [ dbrChestC, dbrChestL, dbrChestO, dbrChestP, dbrChestM, dbrChestL, null ];
rewardTable[45] = [ dbrChestC, dbrChestM, dbrChestO, dbrChestP, dbrChestM, dbrChestL, null ];

rewardTable[46] = [ dbrChestC, dbrChestM, dbrChestO, dbrChestP, dbrChestN, dbrChestL, dbrChestB ];
rewardTable[47] = [ dbrChestC, dbrChestM, dbrChestO, dbrChestP, dbrChestN, dbrChestM, dbrChestB ];
rewardTable[48] = [ dbrChestC, dbrChestM, dbrChestO, dbrChestP, dbrChestN, dbrChestM, dbrChestC ];
rewardTable[49] = [ dbrChestC, dbrChestM, dbrChestP, dbrChestP, dbrChestN, dbrChestM, dbrChestC ];
rewardTable[50] = [ dbrChestD, dbrChestM, dbrChestP, dbrChestP, dbrChestN, dbrChestM, dbrChestC ];

rewardTable[51] = [ dbrChestD, dbrChestN, dbrChestP, dbrChestQ, dbrChestN, dbrChestM, dbrChestC ];
rewardTable[52] = [ dbrChestD, dbrChestN, dbrChestP, dbrChestQ, dbrChestN, dbrChestM, dbrChestD ];
rewardTable[53] = [ dbrChestD, dbrChestN, dbrChestP, dbrChestQ, dbrChestO, dbrChestM, dbrChestD ];
rewardTable[54] = [ dbrChestD, dbrChestN, dbrChestP, dbrChestQ, dbrChestO, dbrChestN, dbrChestD ];
rewardTable[55] = [ dbrChestE, dbrChestN, dbrChestP, dbrChestQ, dbrChestO, dbrChestN, dbrChestD ];

rewardTable[56] = [ dbrChestE, dbrChestN, dbrChestQ, dbrChestQ, dbrChestO, dbrChestN, dbrChestD ];
rewardTable[57] = [ dbrChestE, dbrChestN, dbrChestQ, dbrChestQ, dbrChestO, dbrChestN, dbrChestE ];
rewardTable[58] = [ dbrChestE, dbrChestO, dbrChestQ, dbrChestQ, dbrChestO, dbrChestN, dbrChestE ];
rewardTable[59] = [ dbrChestE, dbrChestO, dbrChestQ, dbrChestQ, dbrChestP, dbrChestN, dbrChestE ];
rewardTable[60] = [ dbrChestF, dbrChestO, dbrChestQ, dbrChestQ, dbrChestP, dbrChestN, dbrChestF ];

rewardTable[61] = [ dbrChestF, dbrChestO, dbrChestQ, dbrChestQ, dbrChestP, dbrChestO, dbrChestF ];
rewardTable[62] = [ dbrChestF, dbrChestO, dbrChestQ, dbrChestQ, dbrChestP, dbrChestO, dbrChestG ];
rewardTable[63] = [ dbrChestF, dbrChestO, dbrChestQ, dbrChestQ, dbrChestP, dbrChestO, dbrChestH ];
rewardTable[64] = [ dbrChestG, dbrChestO, dbrChestQ, dbrChestQ, dbrChestP, dbrChestO, dbrChestH ];
rewardTable[65] = [ dbrChestG, dbrChestP, dbrChestQ, dbrChestQ, dbrChestP, dbrChestO, dbrChestH ];

rewardTable[66] = [ dbrChestG, dbrChestP, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestO, dbrChestI ];
rewardTable[67] = [ dbrChestG, dbrChestP, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP, dbrChestI ];
rewardTable[68] = [ dbrChestH, dbrChestP, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP, dbrChestI ];
rewardTable[69] = [ dbrChestH, dbrChestP, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP, dbrChestJ ];
rewardTable[70] = [ dbrChestH, dbrChestP, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP, dbrChestK ];

rewardTable[71] = [ dbrChestH, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP, dbrChestK ];
rewardTable[72] = [ dbrChestI, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP, dbrChestK ];
rewardTable[73] = [ dbrChestI, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestK ];
rewardTable[74] = [ dbrChestI, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestL ];
rewardTable[75] = [ dbrChestI, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestM ];

rewardTable[76] = [ dbrChestJ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestM ];
rewardTable[77] = [ dbrChestJ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestN ];
rewardTable[78] = [ dbrChestJ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestO ];
rewardTable[79] = [ dbrChestJ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP ];
rewardTable[80] = [ dbrChestK, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP ];

rewardTable[81] = [ dbrChestL, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP ];
rewardTable[82] = [ dbrChestM, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP ];
rewardTable[83] = [ dbrChestN, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP ];
rewardTable[84] = [ dbrChestO, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP ];
rewardTable[85] = [ dbrChestP, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP ];

rewardTable[86] = [ dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestP ];
rewardTable[87] = [ dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ, dbrChestQ ];

// Bonus Table used for the Time-based chests.
// Chests go from A to Q, with incrementally better rewards, nil for when the chest location is unused
var bonusTable = [];
bonusTable[0] = [ null, null ];
bonusTable[1] = [ null, dbrChestA ];
bonusTable[2] = [ null, dbrChestA ];
bonusTable[3] = [ dbrChestA, dbrChestA ];
bonusTable[4] = [ dbrChestA, dbrChestA ];
bonusTable[5] = [ dbrChestB, dbrChestA ];

bonusTable[6] = [ dbrChestB, dbrChestA ];
bonusTable[7] = [ dbrChestB, dbrChestB ];
bonusTable[8] = [ dbrChestB, dbrChestB ];
bonusTable[9] = [ dbrChestB, dbrChestC ];
bonusTable[10] = [ dbrChestB, dbrChestC ];

bonusTable[11] = [ dbrChestC, dbrChestC ];
bonusTable[12] = [ dbrChestC, dbrChestC ];
bonusTable[13] = [ dbrChestC, dbrChestD ];
bonusTable[14] = [ dbrChestC, dbrChestD ];
bonusTable[15] = [ dbrChestD, dbrChestD ];

bonusTable[16] = [ dbrChestD, dbrChestD ];
bonusTable[17] = [ dbrChestD, dbrChestE ];
bonusTable[18] = [ dbrChestD, dbrChestE ];
bonusTable[19] = [ dbrChestE, dbrChestE ];
bonusTable[20] = [ dbrChestE, dbrChestE ];

bonusTable[21] = [ dbrChestE, dbrChestF ];
bonusTable[22] = [ dbrChestE, dbrChestF ];
bonusTable[23] = [ dbrChestF, dbrChestF ];
bonusTable[24] = [ dbrChestF, dbrChestF ];
bonusTable[25] = [ dbrChestF, dbrChestG ];

bonusTable[26] = [ dbrChestF, dbrChestG ];
bonusTable[27] = [ dbrChestG, dbrChestG ];
bonusTable[28] = [ dbrChestG, dbrChestG ];
bonusTable[29] = [ dbrChestG, dbrChestG ];
bonusTable[30] = [ dbrChestG, dbrChestH ];

bonusTable[31] = [ dbrChestG, dbrChestH ];
bonusTable[32] = [ dbrChestG, dbrChestH ];
bonusTable[33] = [ dbrChestH, dbrChestH ];
bonusTable[34] = [ dbrChestH, dbrChestH ];
bonusTable[35] = [ dbrChestH, dbrChestH ];

bonusTable[36] = [ dbrChestH, dbrChestI ];
bonusTable[37] = [ dbrChestH, dbrChestI ];
bonusTable[38] = [ dbrChestH, dbrChestI ];
bonusTable[39] = [ dbrChestI, dbrChestI ];
bonusTable[40] = [ dbrChestI, dbrChestI ];

bonusTable[41] = [ dbrChestI, dbrChestI ];
bonusTable[42] = [ dbrChestI, dbrChestJ ];
bonusTable[43] = [ dbrChestI, dbrChestJ ];
bonusTable[44] = [ dbrChestI, dbrChestJ ];
bonusTable[45] = [ dbrChestJ, dbrChestJ ];

bonusTable[46] = [ dbrChestJ, dbrChestJ ];
bonusTable[47] = [ dbrChestJ, dbrChestJ ];
bonusTable[48] = [ dbrChestJ, dbrChestK ];
bonusTable[49] = [ dbrChestJ, dbrChestK ];
bonusTable[50] = [ dbrChestJ, dbrChestK ];

bonusTable[51] = [ dbrChestK, dbrChestK ];
bonusTable[52] = [ dbrChestK, dbrChestK ];
bonusTable[53] = [ dbrChestK, dbrChestK ];
bonusTable[54] = [ dbrChestK, dbrChestL ];
bonusTable[55] = [ dbrChestK, dbrChestL ];

bonusTable[56] = [ dbrChestK, dbrChestL ];
bonusTable[57] = [ dbrChestL, dbrChestL ];
bonusTable[58] = [ dbrChestL, dbrChestL ];
bonusTable[59] = [ dbrChestL, dbrChestL ];
bonusTable[60] = [ dbrChestL, dbrChestM ];

bonusTable[61] = [ dbrChestL, dbrChestM ];
bonusTable[62] = [ dbrChestL, dbrChestM ];
bonusTable[63] = [ dbrChestM, dbrChestM ];
bonusTable[64] = [ dbrChestM, dbrChestM ];
bonusTable[65] = [ dbrChestM, dbrChestM ];

bonusTable[66] = [ dbrChestM, dbrChestN ];
bonusTable[67] = [ dbrChestM, dbrChestN ];
bonusTable[68] = [ dbrChestM, dbrChestN ];
bonusTable[69] = [ dbrChestN, dbrChestN ];
bonusTable[70] = [ dbrChestN, dbrChestN ];

bonusTable[71] = [ dbrChestN, dbrChestN ];
bonusTable[72] = [ dbrChestN, dbrChestO ];
bonusTable[73] = [ dbrChestN, dbrChestO ];
bonusTable[74] = [ dbrChestN, dbrChestO ];
bonusTable[75] = [ dbrChestO, dbrChestO ];

bonusTable[76] = [ dbrChestO, dbrChestO ];
bonusTable[77] = [ dbrChestO, dbrChestO ];
bonusTable[78] = [ dbrChestO, dbrChestP ];
bonusTable[79] = [ dbrChestO, dbrChestP ];
bonusTable[80] = [ dbrChestO, dbrChestP ];

bonusTable[81] = [ dbrChestO, dbrChestQ ];
bonusTable[82] = [ dbrChestO, dbrChestQ ];
bonusTable[83] = [ dbrChestO, dbrChestQ ];
bonusTable[84] = [ dbrChestP, dbrChestQ ];
bonusTable[85] = [ dbrChestP, dbrChestQ ];

bonusTable[86] = [ dbrChestP, dbrChestQ ];
bonusTable[87] = [ dbrChestQ, dbrChestQ ];

// Reward Table for Checkpoint for when players skip to a later floor, with # of Entries equal to # of Chests
// Chests go from A to Q, with incrementally better rewards, nil for when the chest location is unused
var checkpointTable = [];
checkpointTable[5] = [ null, dbrChestB, dbrChestD, null, null, dbrChestB, null ];
checkpointTable[10] = [ null, dbrChestC, dbrChestE, null, null, dbrChestC, null ];
checkpointTable[15] = [ null, dbrChestD, dbrChestF, null, null, dbrChestD, null ];
checkpointTable[20] = [ null, dbrChestE, dbrChestG, null, null, dbrChestE, null ];
checkpointTable[25] = [ null, dbrChestF, dbrChestH, null, null, dbrChestF, null ];
checkpointTable[30] = [ null, dbrChestG, dbrChestI, null, null, dbrChestH, null ];
checkpointTable[35] = [ null, dbrChestH, dbrChestJ, null, null, dbrChestH, null ];
checkpointTable[40] = [ null, dbrChestI, dbrChestK, null, null, dbrChestI, null ];
checkpointTable[45] = [ null, dbrChestJ, dbrChestL, null, null, dbrChestJ, null ];
checkpointTable[50] = [ null, dbrChestK, dbrChestM, null, null, dbrChestK, null ];
checkpointTable[55] = [ null, dbrChestL, dbrChestN, null, null, dbrChestL, null ];
checkpointTable[60] = [ null, dbrChestM, dbrChestN, null, null, dbrChestM, null ];
checkpointTable[65] = [ null, dbrChestN, dbrChestO, null, null, dbrChestN, null ];
checkpointTable[70] = [ null, dbrChestO, dbrChestO, null, null, dbrChestO, null ];
checkpointTable[75] = [ null, dbrChestP, dbrChestP, null, null, dbrChestP, null ];
//checkpointTable[80] = [ null, dbrChestQ, dbrChestP, null, null, dbrChestQ, null ];
//checkpointTable[85] = [ null, dbrChestQ, dbrChestQ, null, null, dbrChestQ, null ];
//checkpointTable[90] = [ null, dbrChestQ, dbrChestQ, null, null, dbrChestQ, null ];
//checkpointTable[95] = [ null, dbrChestQ, dbrChestQ, null, null, dbrChestQ, null ];
//checkpointTable[100] = [ null, dbrChestQ, dbrChestQ, null, null, dbrChestQ, null ];

// Bonus Reward Table for Checkpoint for when players skip to a later floor, with # of Entries equal to # of Chests
// Chests go from A to Q, with incrementally better rewards, nil for when the chest location is unused
var checkpointBonusTable = [];
checkpointBonusTable[10] = [ dbrChestB, null ];
checkpointBonusTable[15] = [ dbrChestD, null ];
checkpointBonusTable[20] = [ dbrChestE, null ];
checkpointBonusTable[25] = [ dbrChestF, null ];
checkpointBonusTable[30] = [ dbrChestG, null ];
checkpointBonusTable[35] = [ dbrChestH, null ];
checkpointBonusTable[40] = [ dbrChestI, null ];
checkpointBonusTable[45] = [ dbrChestJ, null ];
checkpointBonusTable[50] = [ dbrChestJ, null ];
checkpointBonusTable[55] = [ dbrChestK, null ];
checkpointBonusTable[60] = [ dbrChestL, null ];
checkpointBonusTable[65] = [ dbrChestM, null ];
checkpointBonusTable[70] = [ dbrChestM, null ];
checkpointBonusTable[75] = [ dbrChestO, null ];
//checkpointBonusTable[80] = [ dbrChestN, null ];
//checkpointBonusTable[85] = [ dbrChestP, null ];
//checkpointBonusTable[90] = [ dbrChestP, null ];
//checkpointBonusTable[95] = [ dbrChestP, null ];
//checkpointBonusTable[100] = [ dbrChestP, null ];

function init() {
	Tabletop.init( { key: publicSpreadsheetUrl,
    callback: showInfo,
    parseNumbers: true,
    simpleSheet: true } )
	}

function showInfo(data, tabletop) {
  tranformDataToArray(data);
  calculateRewards(rewardTable, rewardTableData);
  calculateRewardsWithBonus(bonusTable, rewardTableData, rewardTableDataWithBonus);
  calculateRewards(checkpointTable, checkpointTableData);
  calculateRewardsWithBonus(checkpointBonusTable, checkpointTableData, checkpointTableDataWithBonus);
  alert('Successfully processed!');
  drawBasic();
}

window.addEventListener('DOMContentLoaded', init)

function tranformDataToArray(data) {
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

function searchChest(chest, str) {
  var arr = [];
  for(let i = 0; i < chest.length; i++)
  {
    if(chest[i][0].includes(str)) {
      arr.push(i);
    }
  }
  return arr;
}

function AddToItems(indexArr, chest, items) {
  for(let ind = 0; ind < indexArr.length; ind++) {
    for(let itemIndex = 1; itemIndex < chest[ind].length; itemIndex++) {
      items[itemIndex - 1] += chest[indexArr[ind]][itemIndex];
    }
  }
  return items;
}

function AddItemsFromChest(chest, str, items) {
  if(chest != null) {
    let indexArr = searchChest(chest, searchStrings[str]);
    items = AddToItems(indexArr, chest, items);
  }
  return items;
}

function GetSpecialChest01Tier(level) {
  if(level >= 65) {
    return 5;
  } else if(level >= 50) {
    return 4;
  } else if (level >= 35) {
    return 3;
  } else if(level >= 20) {
    return 2;
  } else if(level >= 5) {
    return 1;
  }
  return 0;
}

function GetSpecialChest02Tier(level) {
  if(level >= 60) {
    return 5;
  } else if(level >= 45) {
    return 4;
  } else if (level >= 30) {
    return 3;
  } else if(level >= 20) {
    return 2;
  } else if(level >= 10) {
    return 1;
  }
  return 0;
}

function calculateRewards(chestRewards, outputRewards) {
  for (let level = 0, chestRewardsLen = chestRewards.length; level < chestRewardsLen; level++) {
    if(!chestRewards[level]) {
      continue;
    }
    outputRewards[level] = new Map();
    for(let str = 0, searchStringsLen = searchStrings.length; str < searchStringsLen; str++) {
      let items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for(let chestNum = 0, chestRewardsArrlen = chestRewards[level].length; chestNum < chestRewardsArrlen; chestNum++) {
        var chest = chestArray[chestRewards[level][chestNum]];
        items = AddItemsFromChest(chest, str, items);
      }
      var specialchest01 = specialChestsArray01[GetSpecialChest01Tier(level)];
      items = AddItemsFromChest(specialchest01, str, items);

      var specialchest02 = specialChestsArray02[GetSpecialChest02Tier(level)];
      items = AddItemsFromChest(specialchest02, str, items);
      outputRewards[level].set(searchStrings[str], items);
    }
  }
}

function deepCopyRewards(copyFromRewards, copyToRewards) {
  for(let i = 0, len = copyFromRewards.length; i < len; i++) {
    if(!copyFromRewards[i]) {
      continue;
    }
    let newMap = new Map();
    let oldMap = copyFromRewards[i];
    for (var [key, value] of oldMap) {
      let newItems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for(let itemNum = 0, itemsLen = value.length; itemNum < itemsLen; itemNum++) {
        newItems[itemNum] = value[itemNum];
      }
      newMap.set(key, newItems);
    }
    copyToRewards[i] = newMap;
  }
}

function calculateRewardsWithBonus(bonusChestRewards, baseRewards, outputRewards) {
  deepCopyRewards(baseRewards, outputRewards);
  for(let level = 0, rewardsLen = bonusChestRewards.length; level < rewardsLen; level++) {
    if(!bonusChestRewards[level]) {
      continue;
    }
    for(let str = 0, strArrLen = searchStrings.length; str < strArrLen; str++) {
      let items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for(let chestNum = 0, chestLen = bonusChestRewards[level].length; chestNum < chestLen; chestNum++) {
        let chest = chestArray[bonusChestRewards[level][chestNum]];
        items = AddItemsFromChest(chest, str, items);
      }
      let map = outputRewards[level];
      let itemArr = map.get(searchStrings[str])
      for(let i = 0, itemLen = items.length; i < itemLen; i++){
        itemArr[i] += items[i];
      }
    }
  }
}

function drawBasic() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Dogs');
  data.addColumn('number', 'Cats');

  data.addRows([
    [1, 15, 17], [2, 16, 18], [3, 17, 19]
  ]);

  var options = {
    hAxis: {
      title: 'Level'
    },
    vAxis: {
      title: 'Items'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}