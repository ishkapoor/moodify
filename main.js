   var currentSongNumber = 1;
     var willLoop = 0;
     var willShuffle = 0;
var name1;

$('#click-button').on('click', function() { //fn to hide welcome screen and show moods
        var name = $('#userName').val();
        if (name=='test@acadview.com') {
		    $('.img-section').addClass('disabled');
			$('.img-section').addClass('hidden');
            $('.welcome-screen').addClass('hidden');
			 $('#wrapper1').removeClass('hidden');
			 $('.link1').text('Home');
			 $('.link2').text('Premium');
			 $('.link3').text('Download');
			 $('.link4').text('News');
			 $('.link5').text('Developers');
			 $('.link1').on('click', function() {
			 $('#wrapper1').addClass('hidden');
		     $('.welcome-screen').removeClass('hidden');
			 $('.img-section').removeClass('hidden');
			  $('#main-id').addClass('hidden');
			  toggleSong();
			  var table = $('#songs').DataTable();
              table.destroy();
			  	
				   });
        } 
		else {
            $('#userName').addClass('error');
        }
    });
	function startTable() {
$('#songs').DataTable({
paging:false
});
	}
    $('.play-icon').on('click', function() {			
     toggleSong(); 	   
    });
	$('#mute').on('click', function() {
    var audio1 = document.querySelector('audio');	
    if(audio1.muted==false)
	{
	console.log(audio1.muted);
	audio1.muted=true;
	console.log(audio1.muted);
	$('#mute').addClass("fa-volume-down").removeClass("fa-volume-up");
	
	}
	 else
	{
	audio1.muted=false;
	console.log(audio1.muted);
	$('#mute').addClass("fa-volume-up").removeClass("fa-volume-down");
	}
    });
		
   $('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});
function toggleSong() { //fn to change play icon to pause and vice versa
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
}
function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function updateCurrentTime() {
var song = document.querySelector('audio');
// console.log(song.currentTime);
// console.log(song.duration);
var currentTime = Math.floor(song.currentTime);
currentTime = fancyTimeFormat(currentTime);
var duration = Math.floor(song.duration);
duration = fancyTimeFormat(duration)
$('.time-elapsed').text(currentTime);
$('.song-duration').text(duration);
}	
 var songs = [{ 
        'name': 'Badri Ki Dulhania',
        'artist': 'Neha Kakkar, Monali',   //array of songs 1
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
	   'image':'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin',
        'album': 'Ok Jaanu',             
        'duration': '3:15',
        'fileName': 'song2.mp3',
		'image':'song2.jpg'
    },
    {
        'name': 'Nashe Si',
        'artist': 'Arijit Singh',
        'album': 'Befikre',             
        'duration': '2:34',
        'fileName': 'song3.mp3',
		'image':'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Arjun, Arijit Singh',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
		'image':'song4.jpg'
    }];
	var sentiment = [{
        'name': 'Creez',
        'artist': 'Tarsem Jassar',
        'album': 'Asool',
        'duration': '4.30',              //2
       'fileName': 'sentimental1.mp3',
	   'image':'sentimental1.jpg'
    },
    {
        'name': 'Kuch to hai',
        'artist': 'Arijit, Monali',
        'album': 'Do Lafzo Ki Kahaani',
        'duration': '4.07',
        'fileName': 'sentimental2.mp3',
		'image':'sentimental2.jpg'
    },
    {
        'name': 'Bol do Na zara',
        'artist': 'Armaan Malik',
        'album': 'Azhar',
        'duration': '4.53',
        'fileName': 'sentimental3.mp3',
		'image':'sentimental3.jpg'
    },
    {
        'name': 'Tum ho to',
        'artist': 'shaan',
        'album': 'Purani jeans',
        'duration': '5.28',
        'fileName': 'sentimental4.mp3',
		'image':'sentimental4.jpg'
    }];
	var sads = [{
        'name': 'Jaa Mile',
        'artist': 'Arijit Singh',
        'album': 'Hamari Adhoori Kahani',
        'duration': '6.38',                         //3
       'fileName': 'sad1.mp3',
	   'image':'sad1.jpg'
    },
    {
        'name': 'Mere Mehboob',
        'artist': 'Honey Singh',
        'album': 'Creambell',
        'duration': '3.14',
        'fileName': 'sad2.mp3',
		'image':'sad2.jpg'
    },
    {
        'name': 'Lo Maan Liya',
        'artist': 'Armaan Malik',
        'album': 'Raaz Reboot',
        'duration': '5.00',
        'fileName': 'sad3.mp3',
		'image':'sad3.jpg'
    },
    {
        'name': 'Humnava',
        'artist': 'Arijit Singh',
        'album': 'Hamari Adhoori Kahani',
        'duration': '5.29',
        'fileName': 'sad4.mp3',
		'image':'sad4.jpg'
    }];
	var retros = [{
        'name': 'Aaj Kal',
        'artist': 'Lata,Rafi',
        'album': 'Do Dil',
        'duration': '5.00',
       'fileName': 'retro1.mp3',
	   'image':'retro1.jpg'
    },                                          //4
    {
        'name': 'Likhe Jo Khat',
        'artist': 'Mohammad Rafi',
        'album': 'Manchala',
        'duration': '3.57',
        'fileName': 'retro2.mp3',
		'image':'retro2.jpg'
    },
    {
        'name': 'gulabi Aankhe',
        'artist': 'Mohammad Rafi',
        'album': 'Dhokha',
        'duration': '4.35',
        'fileName': 'retro3.mp3',
		'image':'sentimental3.jpg'
    },
    {
        'name': 'Kabhi Kabhi ',
        'artist': 'Arjun',
        'album': 'Back To Life',
        'duration': '4.02',
        'fileName': 'retro4.mp3',
		'image':'retro4.jpg'
    }];
	var children = [{
        'name': 'Been There',
        'artist': 'Arjun',
        'album': 'Back To Basics',
        'duration': '5.03',
       'fileName': 'child1.mp3',
	   'image':'child1.jpg'
    },
    {
        'name': 'Ye Kaisi Jagah',
        'artist': 'Arijit, Monali',
        'album': 'Humari Adhoori Kahaani',
        'duration': '4.42',
        'fileName': 'child2.mp3',
		'image':'child2.jpg'
    },
    {
        'name': 'Dillagi',
        'artist': 'Rahat Fateh Ali Khan',
        'album': 'Azhar',
        'duration': '5.42',
        'fileName': 'child3.mp3',
		'image':'child3.jpg'
    },
    {
        'name': 'Vas Hove',
        'artist': 'Prabh Gill',
        'album': 'Endless',
        'duration': '5.37',
        'fileName': 'child4.mp3',
		'image':'child4.jpg'
    }];
	var romance = [{
        'name': 'Tere Saang Yaara',
        'artist': 'Arijit Singh',
        'album': 'Rustom',
        'duration': '4.51',
       'fileName': 'love1.mp3',
	   'image':'love1.jpg'
    },
    {
        'name': 'Tayaari Haan di',
        'artist': 'Kulwinder Billa',
        'album': 'Do Lafzo Ki Kahaani',
        'duration': '4.53',
        'fileName': 'love2.mp3',
		'image':'love2.jpg'
    },
    {
        'name': 'Tu Jo Hain',
        'artist': 'Arijit Singh',
        'album': 'Raaz Reboot',
        'duration': '4.55',
        'fileName': 'love3.mp3',
		'image':'love3.jpg'
    },
    {
        'name': 'Teri Meri Kahani',
        'artist': 'Rahat Fateh Ali Khan ',
        'album': 'BodyGuard',
        'duration': '4.35',
        'fileName': 'love4.mp3',
		'image':'love4.jpg'
    }];
	var gymers = [{
        'name': 'Rang',
        'artist': 'Ranjit Bawa',
        'album': 'Asool',
        'duration': '5.32',
       'fileName': 'gym1.mp3',
	   'image':'gym1.jpg'
    },
    {
        'name': 'Zara Zara',
        'artist': 'Arjun',
        'album': 'Back To Home',
        'duration': '3.42',
        'fileName': 'gym2.mp3',
		'image':'gym2.jpg'
    },
    {
        'name': 'Ashq Na Ho',
        'artist': 'Zubin Nautiyal',
        'album': 'Holiday',
        'duration': '5.53',
        'fileName': 'gym3.mp3',
		'image':'gym3.jpg'
    },
    {
        'name': 'Aadat',
        'artist': 'Ninja',
        'album': 'Endless',
        'duration': '4.01',
        'fileName': 'gym4.mp3',
		'image':'gym4.jpg'
    }];
	var optimistic = [{
        'name': 'Jee Karda',
        'artist': 'Sukhwinder Singh',
        'album': 'Badlapur',
        'duration': '4.06',
       'fileName': 'opti1.mp3',
	   'image':'opti1.jpg'
    },
    {
        'name': 'Bezubaan Phir se',
        'artist': 'Arijit, Monali',
        'album': 'ABCD 2',
        'duration': '4.32',
        'fileName': 'opti2.mp3',
		'image':'opti2.jpg'
    },
    {
        'name': 'Singh And Kaur',
        'artist': 'Laab Janjua',
        'album': 'Singh Is Bling',
        'duration': '3.29',
        'fileName': 'opti3.mp3',
		'image':'opti3.jpg'
    },
    {
        'name': '2 Number Theka',
        'artist': 'Babbu Maan',
        'album': 'Desi Da Record',
        'duration': '1.06',
        'fileName': 'opti4.mp3',
		'image':'opti4.jpg'
    }];
	var satisfied = [{
        'name': 'Do You Know',
        'artist': 'Diljit Dosanjh',
        'album': 'Bang On',
        'duration': '3.39',
       'fileName': 'sat1.mp3',
	   'image':'sat1.jpg'
    },
    {
        'name': 'I will be waiting',
        'artist': 'Arjun ',
        'album': 'Back To Basics',
        'duration': '4.01',
        'fileName': 'sat2.mp3',
		'image':'sat2.jpg'
    },
    
    {
        'name': 'Tujhe Dekha',
        'artist': 'Arjun',
        'album': 'Back To Basics',
        'duration': '5.00',
        'fileName': 'sat3.mp3',
		'image':'sat3.jpg'
    },
	{
        'name': 'Jalta Hai Dil ',
        'artist': 'Falak Shabbir',
        'album': 'Azhar',
        'duration': '3.33',
        'fileName': 'sat4.mp3',
		'image':'sat4.jpg'
    }
	];
	var happy = [{
        'name': 'Hasi Ban Gaye',
        'artist': 'Monali Thakur',
        'album': 'Humaari Adhoori Kahani',
        'duration': '3.12',
       'fileName': 'hap1.mp3',
	   'image':'hap1.jpg'
    },
    {
        'name': 'Baarish',
        'artist': 'Mustafa',
        'album': 'Yaariyan',
        'duration': '6.15',
        'fileName': 'hap2.mp3',
		'image':'hap2.jpg'
    },
    {
        'name': 'Chaha Hai Tujhko',
        'artist': 'Kumar Sanu',
        'album': 'Maan',
        'duration': '4.24',
        'fileName': 'hap3.mp3',
		'image':'hap3.jpg'
    },
    {
        'name': 'Chhaiya Chaaiya',
        'artist': 'Arjun',
        'album': 'coming back',
        'duration': '3.49',
        'fileName': 'hap4.mp3',
		'image':'hap4.jpg'
    }];
	var dissatisfied = [{
        'name':'Baaton ko teri',
        'artist': 'All is well',
        'album': 'Asool',
        'duration': '4.40',
       'fileName': 'dis1.mp3',
	   'image':'dis1.jpg'
    },
    {
        'name': 'Miti di kHushboo',
        'artist': 'Anshuman Khurana',
        'album': 'Tere Saang',
        'duration': '4.07',
        'fileName': 'dis2.mp3',
		'image':'dis2.jpg'
    },
    {
        'name': 'Hasi Ban gaye',
        'artist': 'Armaan Malik',
        'album': 'Hamari Adhoori Kahani',
        'duration': '4.32',
        'fileName': 'dis3.mp3',
		'image':'dis3.jpg'
    },
    {
        'name': 'Tume Dillagi',
        'artist': 'Rahat Fateh Ali Khan ',
        'album': 'Dillagi',
        'duration': '5.42',
        'fileName': 'dis4.mp3',
		'image':'dis4.jpg'
    }];
	var beach = [{
        'name': 'All Of You',
        'artist': 'Arjun',
        'album': 'Back To Basics',
        'duration': '4.23',
       'fileName': 'beach1.mp3',
	   'image':'beach1.jpg'
    },
    {
        'name': 'Ambarsariya',
        'artist': 'Arjun,Drake',
        'album': 'All Of You',
        'duration': '3.28',
        'fileName': 'beach2.mp3',
		'image':'beach2.jpg'
    },
    {
        'name': 'Att Goriye',
        'artist': 'Preet Harpal ',
        'album': 'Yaar Purane',
        'duration': '3.24',
        'fileName': 'beach3.mp3',
		'image':'beach3.jpg'
    },
    {
        'name': 'Same Girl',
        'artist': 'Arjun ft. Guru',
        'album': 'BAck To Basics',
        'duration': '3.23',
        'fileName': 'beach4.mp3',
		'image':'beach4.jpg'
    }];
	function changeCurrentSongDetails(songObj) {   //fn to add image of song and details
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}
var id;

	function startSentiment() {          //fn to start sentimental songs 
	name1='sentiment';
        for(var i =0; i < sentiment.length;i++) {
        var obj = sentiment[i];  
        var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(sentiment[2]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
	startTable();
	}
	function startparty() {              //fn to start party songs
	name1='songs';
    for(var i =0; i < songs.length;i++) {
        var obj = songs[i];	
        var name = '#song' + (i+1);
        var song = $(name);
		 changeCurrentSongDetails(songs[0]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
		startTable();
	}
	function startretro() {                         //fn to start retro songs
	name1='retros';
    for(var i =0; i < retros.length;i++) {
        var obj = retros[i];
        var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(retros[0]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
		startTable();
	
	}
	function startsad() {
			 name1='sads';
    for(var i =0; i < sads.length;i++) {
        var obj = sads[i];
        var name = '#song' + (i+1);
        var song = $(name);
		 changeCurrentSongDetails(sads[3]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
	startTable();
	}
	function startchild() {
		 name1='children';
    for(var i =0; i < children.length;i++) {
        var obj = children[i];
        var name = '#song' + (i+1);
        var song = $(name);
		 changeCurrentSongDetails(children[0]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
	 startTable();	
	}
	function starthappy() {	 
		 name1='happy';
    for(var i =0; i < happy.length;i++) {
        var obj = happy[i];
        var name = '#song' + (i+1);
        var song = $(name);
		 changeCurrentSongDetails(happy[1]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
		 startTable();
	}
	function startromance() {
	name1='romance';	
    for(var i =0; i < romance.length;i++) {
        var obj = romance[i];
        var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(romance[1]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
	startTable();
	}
	function startgyms() {
		name1='gymers';
    for(var i =0; i < gymers.length;i++) {
        var obj = gymers[i];
        var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(gymers[3]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
		startTable();
	}
	function startparty() {
			name1='songs';
    for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(songs[0]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
	startTable();
	}
	function startsatisfied() {
		 name1='satisfied';  
    for(var i =0; i < satisfied.length;i++) {
        var obj = satisfied[i];
		var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(satisfied[0]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
	startTable();
	}
	function startdissatisfied() {
		name1='dissatisfied';
    for(var i =0; i < dissatisfied.length;i++) {		 
     var obj = dissatisfied[i];
        var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(dissatisfied[0]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
	startTable();
	}
	function startoptimistic() {
	name1='optimistic';
    for(var i =0; i < optimistic.length;i++) {
        var obj = optimistic[i];	 
        var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(optimistic[3]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}
	startTable();
	}
	function startbeach() {
		name1='beach';
    for(var i =0; i < beach.length;i++) {
        var obj = beach[i];			
        var name = '#song' + (i+1);
        var song = $(name);
		changeCurrentSongDetails(beach[0]);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		console.log(obj.fileName);
	    setInterval(function(){
	    updateCurrentTime();}, 1000);
	}	
    startTable();
	}
function addSongNameClickEvent(songObj,position) {
var songName = songObj.fileName; // New Variable 
console.log(songName);
var id = '#song' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
changeCurrentSongDetails(songObj); 
}
 else {
            audio.src = songName;
            toggleSong();
            changeCurrentSongDetails(songObj); // Function Call
       }
});
}
$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});
$('.fa-random').on('click',function() {
$('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});
$('.fa-backward').on('click',function() {
});
$('.fa-step-forward').on('click',function() {
	    var audio = document.querySelector('audio');
        var nextSongObj = audio.src;
		console.log(nextSongObj);	 
});
$('audio').on('ended',function() {	//fn to what happens on end of song
var audio1=document.querySelector('audio');
	 if (willShuffle == 1) {//fn to shuffle songs
        var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
         if(name1=='gymers')
		{
		var nextSongObj = sentiment[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		if(name1=='sentiment')
		{
		var nextSongObj = sentiment[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='retros')
		{
		var nextSongObj =retros[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='songs')
		{
		var nextSongObj = songs[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='sads')
		{
		var nextSongObj = sads[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='beach')
		{
		var nextSongObj = beach[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='optimistic')
		{
		var nextSongObj = optimistic[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='satisfied')
		{
		var nextSongObj = satisfied[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='dissatisfied')
		{
		var nextSongObj =dissatisfied[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='romance')
		{
		var nextSongObj = romance[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
		 if(name1=='children')
		{
		var nextSongObj = children[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		} if(name1=='happy')
		{
		var nextSongObj =happy[nextSongNumber-1];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
		}
    }
    if(currentSongNumber < 4) { //fn to go to next song on end of song
		  if(name1=='sentiment')
		{
		nextSongObj=sentiment[currentSongNumber];
        audio1.src =nextSongObj.fileName;
   
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='happy')
		{
		nextSongObj=happy[currentSongNumber];
        audio1.src =nextSongObj.fileName;
   
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='romance')
		{
		nextSongObj=romance[currentSongNumber];
        audio1.src =nextSongObj.fileName;
   
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='sads')
		{
		nextSongObj=sads[currentSongNumber];
        audio1.src =nextSongObj.fileName;
   
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='dissatisfied')
		{
		nextSongObj=dissatisfied[currentSongNumber];
        audio1.src =nextSongObj.fileName;
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='satisfied')
		{
		nextSongObj=satisfied[currentSongNumber];
        audio1.src =nextSongObj.fileName;
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='retros')
		{
		nextSongObj=retros[currentSongNumber];
        audio1.src =nextSongObj.fileName;
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='songs')
		{
		nextSongObj=songs[currentSongNumber];
        audio1.src =nextSongObj.fileName;
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='optimistic')
		{
		nextSongObj=optimistic[currentSongNumber];
        audio1.src =nextSongObj.fileName;
   
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='beach')
		{
		nextSongObj=beach[currentSongNumber];
        audio1.src =nextSongObj.fileName;
   
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='children')
		{
		nextSongObj=children[currentSongNumber];
        audio1.src =nextSongObj.fileName;
   
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	  if(name1=='gymers')
		{
		nextSongObj=gymers[currentSongNumber];
        audio1.src =nextSongObj.fileName;
   
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
	}
    else if(willLoop == 1) { // to play first song on end of playlist
		if(name1=='sentiment')
		{
        var nextSongObj = sentiment[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='retros')
		{
        var nextSongObj = retros[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='songs')
		{
        var nextSongObj = songs[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='children')
		{
        var nextSongObj = children[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='gymers')
		{
        var nextSongObj = gymers[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='beach')
		{
        var nextSongObj = beach[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='satisfied')
		{
        var nextSongObj = satisfied[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='dissatisfied')
		{
        var nextSongObj = dissatisfied[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='happy')
		{
        var nextSongObj = happy[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='romance')
		{
        var nextSongObj = romance[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='optimistic')
		{
        var nextSongObj = optimistic[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
		if(name1=='sads')
		{
        var nextSongObj = sads[0];
        audio1.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
		}
    }
    
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
});
$('.fa-volume-down').on('click',function() {
	  var audio = document.querySelector('audio');
	if(audio.volume>0.1)
	{
		audio.volume=audio.volume-0.1;
	}		
	});	
$('.fa-volume-up').on('click',function() {
	  var audio = document.querySelector('audio');
	if(audio.volume<1)
	{
		audio.volume=audio.volume+0.1;
	}				
});
    $('#sentimental').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'sentimental3.mp3');
	startSentiment();
});
window.SetVolume = function(val) //fn to increase or decrease volume
{
    var player= document.querySelector('audio');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}
$('.happy').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'hap2.mp3');
	starthappy();

});
$('.romance').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'love2.mp3');
	startromance();
});
$('.sad').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'sad4.mp3');
	 startsad();
});
$('.dissatisfied').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'dis1.mp3');
	startdissatisfied();
});
$('.satisfied').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'sat1.mp3');
	startsatisfied();
});
$('.beach').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'beach1.mp3');
	startbeach();
});
$('.child').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'child1.mp3');
	startchild();
});
$('.gym').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'gym4.mp3');
	startgyms();
});
$('.retro').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'retro1.mp3');
	startretro();
});
$('.party').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
    $('#audio-source').attr('src', 'song1.mp3');
	startparty();
});
$('.opti').on('click',function() {
	$('#wrapper1').addClass('hidden');
	$('#main-id').removeClass('hidden');
	$('#audio-source').attr('src', 'opti4.mp3');
	startoptimistic();
});
function timeJump() { //take song time to -5 seconds
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 2;
}
function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}
