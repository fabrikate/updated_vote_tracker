
var KittenPhoto = function(imageFile, winCute, looseCute){
	this.imageFile = imageFile;
	this.winCute = winCute;
	this.looseCute = looseCute;
	this.votes = 0;
}

var a = [], b = [], kitten= [];

for(i=1; i<16; i++){
	a[i] = 'kitten_' + i + '.jpg';
	kitten.push(new KittenPhoto(a[i],0,0));
}

numR1 = (Math.floor(Math.random() * a.length)+1)
numR2 = (Math.floor(Math.random() * a.length)+1)
newNum = function(){
	return (Math.floor(Math.random() * a.length)+1);
};

var voteButton1, voteButton2, createRandomN;

var $catNameGrab1 = $('#button1').siblings('img');
var $catNameGrab2 = $('#button2').siblings('img');
var $button1 = $('#button1');
var $button2 = $('#button2');
$catNameGrab1.attr('src', a[numR1]);
$catNameGrab2.attr('src', a[numR2]);

buttonLeft = $button1.on('click', function(e){
	console.log(a[numR1] + ' wins');
	var idx = newNum();
	var $pText = $('p.tallyVote1').text('I haz cuteness!');
	$('p.tallyVote1').append($pText);
	$catNameGrab2.attr('src', a[newNum()]);
});
buttonRight = $button2.on('click', function(e){
	console.log(a[numR2] + ' wins');
	var $pText = $('p.tallyVote2').text('I haz cuteness!');
	$('p.tallyVote2').append($pText);
	$catNameGrab1.attr('src', a[newNum()]);
});
