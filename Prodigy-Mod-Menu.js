alert("MOD INJECTED")
alert("Thank You For Using GameHackerC's Prodigy Mod Menu!")
javascript:!function(){var checkKeyPressed=e=>{console.log(e.key),
"a"==e.key&&solve(document.querySelector(".questions-text-alignment").childNodes[0].data+"x"+document.querySelector
(".questions-text-alignment").childNodes[2].data)};function solve(func){var out=document.querySelector
(".questions-input-adjustment");if(console.log(out),"H"!=func[1]){func=func.replace("%C3%97","*"),
func=func.replace("%C3%B7","/");var sides=func.split("=");console.log(sides);var tokens=tokenize(sides);console.log(tokens);
var fixedTokens=solveTokens(JSON.parse(JSON.stringify(tokens)));console.log(fixedTokens),out.value=eval(evalify(fixedTokens[1]))}
else out.value=parseInt(func.split(" ")[3])/2}function evalify(e){for(var t="",s=0;s<e.length;s++)t+=e[s].type+e[s].val.toString();
return t}function tokenize(e){for(var t=e[0].split(" "),s=e[1].split(" "),l=[],n=[],o=1;o<t.length;o+=2){let e=parseInt(t[o]);
if(e=isNaN(e)?"x":e,1==o)l.push({type:"+",val:e});else switch(t[o-1]){case"+":l.push({type:"+",val:e});
break;case"-":l.push({type:"-",val:e});break;case"*":l.push({type:"*",val:e});break;case"/":l.push({type:"/",val:e})}}
for(o=1;o<s.length-1;o+=2){let e=parseInt(s[o]);if(e=isNaN(e)?"x":e,1==o)n.push({type:"+",val:e});else switch(s[o-1])
{case"+":n.push({type:"+",val:e});break;case"-":n.push({type:"-",val:e});break;case"*":n.push({type:"*",val:e});break;case"/":n.push
({type:"/",val:e})}}return[l,n]}function solveTokens(e){for(var t=e[0],s=e[1],l={"+":"-","-":"+","*":"/","/":"*"},n=0;n<t.length;n++)
{let e=t[n];if("x"==e.val&&"*"==e.type){let e=t[n].type;t[n].type=t[n-1].type,t[n-1].type=e;let s=t[n-1];t[n-1]=t[n],t[n]=s}}
for(n=0;n<s.length;n++){let e=s[n];if("x"==e.val&&"*"==e.type){let e=s[n].type;s[n].type=s[n-1].type,s[n-1].type=e;let 
t=s[n-1];s[n-1]=s[n],s[n]=t}}for(n=0;n<t.length;n++){let e=t[n];"x"!=e.val&&(s.push({val:e.val,type:l[e.type]}),t.splice(n,1),n--)}
for(n=0;n<s.length;n++){let e=s[n];"x"==e.val&&(t.push({val:e.val,type:l[e.type]}),s.splice(n,1),n--)}if("-"==t[0].type){t[0].type="+";
for(n=0;n<s.length;n++)s[n].type=l[s[n].type]}return[t,s]}window.solvetet=function(func){var sides=func.split(" = ")
;console.log(sides);var tokens=tokenize(sides);console.log(tokens);var fixedTokens=solveTokens(JSON.parse(JSON.stringify(tokens)));
return console.log(fixedTokens),eval(evalify(fixedTokens[1]))},window.addEventListener("keydown",checkKeyPressed,!1)}();

function closeit(){ 
prodigydiv.remove()
} 
setTimeout("closeit", 3000);
function FreeMembership(){
Phaser.GAMES[0].state.states.Login._gameObj.it=true
}
function FreeAtSchool(){
Phaser.GAMES[0].state.states.Login._gameObj.classModeController.lockedZones=0
}
function TrialmastersGear() {
Phaser.GAMES[0].state.states.Login._gameObj.backpack.data.outfit.push({"N":999999,"ID":24});
Phaser.GAMES[0].state.states.Login._gameObj.boots.push({"N":999999,"ID":18});
Phaser.GAMES[0].state.states.Login._gameObj.hat.push({"N":999999,"ID":23});
Phaser.GAMES[0].state.states.Login._gameObj.weapon.push({"N":1,"ID":47});
}
function GodMode() {
  GodModeDamage = prompt("How Much Do You Want To Multiply Your Damage By?") 
  GodModeHealth = prompt("How Much Do You Want To Multiply Your Health By?") 
Phaser.GAMES[0].state.states.Login._gameObj.modifiers.damage=(GodModeDamage);
Phaser.GAMES[0].state.states.Login._gameObj.modifiers.maxHearts=(GodModeHealth);
}
function LeaveBattle() {
Phaser.GAMES[0].state.states.Login._gameObj.debugMisc.escapeBattle();
}
function FillEnergy() {
Phaser.GAMES[0].state.states.Login._gameObj.debugMisc.setBattleEnergy(10);
}
function Level1Monsters() {
Phaser.GAMES[0].state.states.Login._gameObj.battle.constructor.MOD_DEFAULTS.level = 1;
}
function Heal() {
Phaser.GAMES[0].state.states.Login._gameObj.player.heal(99999999999999999999999999999999999999999999999999);
}
function PickLevel() {
  Level = prompt("What Level Would You Like To Be? (1-100)                                       *Must Get Into A Battle To Save Level Change");
javascript:window.Phaser.GAMES[0].state.states.Login._gameObj.user.source.data.level=(Level);
}
function TeleportPlayer(e) {

    e = e || window.event;

    if (e.keyCode == '33') {
Phaser.GAMES[0].state.states.Login._gameObj.x=Phaser.GAMES[0].state.states.Login._gameObj.input.mousePointer.position.x
Phaser.GAMES[0].state.states.Login._gameObj.user.y=Phaser.GAMES[0].state.states.Login._gameObj.input.mousePointer.position.y
    }
}
document.onkeydown = TeleportPlayer;
function setLevel() {
 Phaser.GAMES[0].state.states.Login._gameObj.data.level = prompt("What level do you want to be?", "100");
}
function levelUpPets() {
  Level = prompt("What Level Would You Like Your Pets To Be? (1-100)                          *Must Get Into A Battle To Save Level Change");
    for (let PetLoopTest = 0; PetLoopTest < PIXI.game.prodigy.player.kennel.data.length; PetLoopTest++) { 
     Phaser.GAMES[0].state.states.Login._gameObj.kennel.data[PetLoopTest].level=(Level)
    };
}
function SuperPowerfulStuff() {
x = Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.affix
for (i in x) {
    Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.affix[i].data.value=1000
Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.affix[i].data.valuePercent=1000.00
}
}

function setLocation() {
  Phaser.GAMES[0].state.states.Login._gameObj.player.locationSelectionType = prompt("What will your location string be?", "your kitchen making a sandwich");
}
function setNickname() {
  Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.nickname[PIXI.game.prodigy.player.name.nickname] = prompt("Set your clientside nickname (nobody else can see it but you) here.", "{first} {last}, but you can call me Einstein");
}
function getallItem() {
Phaser.GAMES[0].state.states.Login._gameObj.player.backpack.data.item=[]
x = Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.item
for (i in x) {
    Phaser.GAMES[0].state.states.Login._gameObj.player.backpack.data.item[i] = {"ID": x[i].ID, "N": 999999999}
}
}
function getallCurrency() {
Phaser.GAMES[0].state.states.Login._gameObj.player.backpack.data.currency=[]
x = Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.currency
for (i in x) {
    Phaser.GAMES[0].state.states.Login._gameObj.backpack.data.currency[i] = {"ID": x[i].ID, "N": 999999999}
Phaser.GAMES[0].state.states.Login._gameObj.debugMisc.smallLoan(999999999);
}
}
function getallFollow() {
Phaser.GAMES[0].state.states.Login._gameObj.backpack.data.follow=[]
x = Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.follow
for (i in x) {
    Phaser.GAMES[0].state.states.Login._gameObj.backpack.data.follow[i] = {"ID": x[i].ID, "N": 999999999}
}
}
function getallOutfit() { //so yall can shut up
Phaser.GAMES[0].state.states.Login._gameObj.backpack.data.outfit=[]
x = Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.outfit
for (i in x) {
    Phaser.GAMES[0].state.states.Login._gameObj.backpack.data.outfit[i] = {"ID": x[i].ID, "N": 999999999}
}
}
function getallRelic() { //these arent spell relics but i dont know what they are
Phaser.GAMES[0].state.states.Login._gameObj.backpack.data.relic=[]
x = Phaser.GAMES[0].state.states.Login._gameObj.state.states.Boot._gameData.relic
for (i in x) {
    Phaser.GAMES[0].state.states.Login._gameObj.backpack.data.relic[i] = {"ID": x[i].ID, "N": 999999999}
}
}
var prodigydiv = document.createElement("prodigydiv");
prodigydiv.style.width = "100px";
prodigydiv.style.height = "100px";
prodigydiv.style.color = "black";
prodigydiv.innerHTML = '<a href="javascript:prodigydiv.remove();"> <font color="red"> |X|</font> </a> <a href="javascript:LeaveBattle();"><font color="red"> |Leave Battle| </font></a><a href="javascript:PickLevel();"><font color="red">|Pick Level Player|</font><a href="javascript:GodMode();"> <font color="red">|Multiply Player|</font> </a><a href="javascript:FreeMembership();"> <font color="red">|Free Membership|</font><a href="javascript:Heal();"><font color="red"> |Heal| </font></a><a href="javascript:FillEnergy();"><font color="red">|Fill Energy|</font></a> <a href="javascript:PIXI.game.prodigy.debugMisc.getAllPets();"><font color="red">|Get All Pets|</font></a><a href="javascript:levelUpPets()"><font color="red"> |Pick Level Pets|</font></a><a href="javascript:FreeAtSchool()"><font color="red"> |Unlock All Zones|</font></a><a href="javascript:getallFollow()"> <font color="red">|Get All Buddies|</font></button><a href="javascript:getallItem()"> <font color="red">|Get All Items|</font></a><a href="javascript:getallCurrency()"> <font color="red">|Get All Currencies| </font></a>';
javascript:!function(){var checkKeyPressed=e=>{console.log(e.key),
"a"==e.key&&solve(document.querySelector(".questions-text-alignment").childNodes[0].data+"x"+document.querySelector
(".questions-text-alignment").childNodes[2].data)};function solve(func){var out=document.querySelector
(".questions-input-adjustment");if(console.log(out),"H"!=func[1]){func=func.replace("%C3%97","*"),
func=func.replace("%C3%B7","/");var sides=func.split("=");console.log(sides);var tokens=tokenize(sides);console.log(tokens);
var fixedTokens=solveTokens(JSON.parse(JSON.stringify(tokens)));console.log(fixedTokens),out.value=eval(evalify(fixedTokens[1]))}
else out.value=parseInt(func.split(" ")[3])/2}function evalify(e){for(var t="",s=0;s<e.length;s++)t+=e[s].type+e[s].val.toString();
return t}function tokenize(e){for(var t=e[0].split(" "),s=e[1].split(" "),l=[],n=[],o=1;o<t.length;o+=2){let e=parseInt(t[o]);
if(e=isNaN(e)?"x":e,1==o)l.push({type:"+",val:e});else switch(t[o-1]){case"+":l.push({type:"+",val:e});
break;case"-":l.push({type:"-",val:e});break;case"*":l.push({type:"*",val:e});break;case"/":l.push({type:"/",val:e})}}
for(o=1;o<s.length-1;o+=2){let e=parseInt(s[o]);if(e=isNaN(e)?"x":e,1==o)n.push({type:"+",val:e});else switch(s[o-1])
{case"+":n.push({type:"+",val:e});break;case"-":n.push({type:"-",val:e});break;case"*":n.push({type:"*",val:e});break;case"/":n.push
({type:"/",val:e})}}return[l,n]}function solveTokens(e){for(var t=e[0],s=e[1],l={"+":"-","-":"+","*":"/","/":"*"},n=0;n<t.length;n++)
{let e=t[n];if("x"==e.val&&"*"==e.type){let e=t[n].type;t[n].type=t[n-1].type,t[n-1].type=e;let s=t[n-1];t[n-1]=t[n],t[n]=s}}
for(n=0;n<s.length;n++){let e=s[n];if("x"==e.val&&"*"==e.type){let e=s[n].type;s[n].type=s[n-1].type,s[n-1].type=e;let 
t=s[n-1];s[n-1]=s[n],s[n]=t}}for(n=0;n<t.length;n++){let e=t[n];"x"!=e.val&&(s.push({val:e.val,type:l[e.type]}),t.splice(n,1),n--)}
for(n=0;n<s.length;n++){let e=s[n];"x"==e.val&&(t.push({val:e.val,type:l[e.type]}),s.splice(n,1),n--)}if("-"==t[0].type){t[0].type="+";
for(n=0;n<s.length;n++)s[n].type=l[s[n].type]}return[t,s]}window.solvetet=function(func){var sides=func.split(" = ")
;console.log(sides);var tokens=tokenize(sides);console.log(tokens);var fixedTokens=solveTokens(JSON.parse(JSON.stringify(tokens)));
return console.log(fixedTokens),eval(evalify(fixedTokens[1]))},window.addEventListener("keydown",checkKeyPressed,!1)}();

document.body.insertBefore(prodigydiv, document.body.firstChild);
