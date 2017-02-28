//Pulling basic show information on Bob's Burgers 
var selectShow = jQuery.parseJSON('{"Title":"Bob&rsquo;s Burgers","Year":"2011–","Rated":"TV-PG","Released":"09 Jan 2011","Runtime":"22 min","Genre":"Animation, Comedy","Director":"N/A","Writer":"Loren Bouchard, Jim Dauterive","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Bob Belcher, along with his wife and three children, try to run their last hope of holding the family together, which is running Bob&rsquo;s dream restaurant.","Language":"English","Country":"USA","Awards":"Won 1 Primetime Emmy. Another 5 wins & 37 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI0NTQ3OV5BMl5BanBnXkFtZTgwODMyMzc1MDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.1","imdbVotes":"42,039","imdbID":"tt1561755","Type":"series","totalSeasons":"8","Response":"True"}');
  
//Bob's Burgers season 1 episode information - http://www.omdbapi.com/?t=Bob%27s%20Burgers&Season=1&Episode=*

var input = jQuery.parseJSON( '{"Title":"Human Flesh","Year":"2011","Rated":"TV-PG","Released":"09 Jan 2011","Season":"1","Episode":"1","Runtime":"30 min","Genre":"Animation, Comedy","Director":"Anthony Chun","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Loren Bouchard, Jim Dauterive, Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Nora Smith (staff writer), Lizzie Molyneux (staff writer), Wendy Molyneux (staff writer), Steven Davis (staff writer), Kelvin Yu (staff writer), Jim Dauterive (creator)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"On top of watching his dysfunctional family crumble around him, Bob faces the wrath of a jealous health inspector who cooks up a nasty rumor about the restaurant&rsquo;s choice of meat.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ3NTY4Njk2OF5BMl5BanBnXkFtZTgwMDM5OTg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.7","imdbVotes":"582","imdbID":"tt1645218","seriesID":"tt1561755","Type":"episode","Response":"True"}');

 var input2 = jQuery.parseJSON( '{"Title":"Crawl Space","Year":"2011","Rated":"TV-PG","Released":"16 Jan 2011","Season":"1","Episode":"2","Runtime":"30 min","Genre":"Animation, Comedy","Director":"Kyoung Hee Lim","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Loren Bouchard, Jim Dauterive, Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Nora Smith (staff writer), Lizzie Molyneux (staff writer), Wendy Molyneux (staff writer), Steven Davis (staff writer), Kelvin Yu (staff writer), Jim Dauterive (creator)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"His in-law&rsquo;s are coming into town, and Bob tries desperately to concoct a plan to avoid them for as long as he can. Unfortunately, Bob did not plan to get stuck in the recesses of the family restaurant.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg2Njk1MjM3MV5BMl5BanBnXkFtZTgwODQ1Nzg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.0","imdbVotes":"490","imdbID":"tt1646300","seriesID":"tt1561755","Type":"episode","Response":"True"} ');

 var input3 = jQuery.parseJSON( '{"Title":"Sacred Cow","Year":"2011","Rated":"TV-PG","Released":"23 Jan 2011","Season":"1","Episode":"3","Runtime":"22 min","Genre":"Animation, Comedy","Director":"Jennifer Coyle","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Nora Smith, Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Nora Smith (staff writer), Lizzie Molyneux (staff writer), Wendy Molyneux (staff writer), Steven Davis (staff writer), Kelvin Yu (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Bob&rsquo;s Burgers is about to hit 100,000 burger sales and Bob is excited until he meets his meat... documentary filmmaker, Randy Watkins, and Moolissa, a steer wearing a blonde wig. (Randy ...","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTc4NzkyNTE4NV5BMl5BanBnXkFtZTgwOTI5OTg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.7","imdbVotes":"420","imdbID":"tt1645219","seriesID":"tt1561755","Type":"episode","Response":"True"} ');

 var input4 = jQuery.parseJSON( '{"Title":"Sexy Dance Fighting","Year":"2011","Rated":"TV-14","Released":"13 Feb 2011","Season":"1","Episode":"4","Runtime":"22 min","Genre":"Animation, Comedy","Director":"Anthony Chun","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Steven Davis, Kelvin Yu, Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Nora Smith (staff writer), Lizzie Molyneux (staff writer), Wendy Molyneux (staff writer), Steven Davis (staff writer), Kelvin Yu (staff writer), Jim Dauterive (creator)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Tina is going through the heartbreak of puberty; once they see it is not contagious, Gene and Louise try to cheer up their big sister. They show her what they believe is a smelly special ...","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQxNjMxOTA0OF5BMl5BanBnXkFtZTgwNjI5OTg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.6","imdbVotes":"402","imdbID":"tt1645220","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input5 = jQuery.parseJSON( '{"Title":"Hamburger Dinner Theater","Year":"2011","Rated":"TV-14","Released":"20 Feb 2011","Season":"1","Episode":"5","Runtime":"22 min","Genre":"Animation, Comedy","Director":"Wesley Archer","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Dan Fybel, Rich Rinaldi, Jim Dauterive (creator), Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Linda is dying to relive her dream of becoming a star on Broadway, so she decides to host a dinner theater at the restaurant. But on opening night a shocking surprise leaves Linda with a more chilling production than she planned for.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMzM0MzY3OV5BMl5BanBnXkFtZTgwODMyNzg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.5","imdbVotes":"404","imdbID":"tt1841032","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input6 = jQuery.parseJSON( '{"Title":"Sheesh! Cab, Bob?","Year":"2011","Rated":"TV-PG","Released":"06 Mar 2011","Season":"1","Episode":"6","Runtime":"22 min","Genre":"Animation, Comedy","Director":"Jennifer Coyle","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Jon Schroeder, Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Bob takes a second job as a nighttime cab driver so he can give Tina the 13th birthday party she deserves, and he makes some surprising new friends along the ride.","Language":"English","Country":"N/A","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMjMzMzI2NTE1OV5BMl5BanBnXkFtZTgwNDUzOTg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.4","imdbVotes":"446","imdbID":"tt1854660","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input7 = jQuery.parseJSON( '{"Title":"Bed & Breakfast","Year":"2011","Rated":"TV-PG","Released":"13 Mar 2011","Season":"1","Episode":"7","Runtime":"30 min","Genre":"Animation, Comedy","Director":"Boo Hwan Lim","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Holly Schlesinger, Jim Dauterive (creator), Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Linda gets really excited about opening a Bed and Breakfast to capitalize on the high volume of tourists coming into town, but when the guests start to arrive Louise senses espionage afoot.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ3Mjk1ODA1OF5BMl5BanBnXkFtZTgwMTMzOTg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.7","imdbVotes":"357","imdbID":"tt1854659","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input8 = jQuery.parseJSON( '{"Title":"Art Crawl","Year":"2011","Rated":"TV-PG","Released":"20 Mar 2011","Season":"1","Episode":"8","Runtime":"30 min","Genre":"Animation, Comedy","Director":"Kyoung Hee Lim","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Lizzie Molyneux, Wendy Molyneux, Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Linda&rsquo;s eccentric sister Gayle comes to town intending to use the restaurant as a gallery for her paintings during this year&rsquo;s &ldquo;Art Crawl.&rdquo; Bob is left totally oblivious the comically explicit nature of Gayle&rsquo;s artwork until it&rsquo;s too late.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYwNTQ2ODk4Nl5BMl5BanBnXkFtZTgwODc0NTg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.0","imdbVotes":"396","imdbID":"tt1857991","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input9 = jQuery.parseJSON( '{"Title":"Spaghetti Western and Meatballs","Year":"2011","Rated":"TV-PG","Released":"27 Mar 2011","Season":"1","Episode":"9","Runtime":"22 min","Genre":"Animation, Comedy","Director":"Wesley Archer","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Kit Boss, Jim Dauterive (creator), Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Bob and Gene bond over spaghetti western movies, which makes Louise jealous.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg4Nzk1NjE3NV5BMl5BanBnXkFtZTgwODU0NTg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"361","imdbID":"tt1857992","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input10 = jQuery.parseJSON( '{"Title":"Burger Wars","Year":"2011","Rated":"TV-PG","Released":"10 Apr 2011","Season":"1","Episode":"10","Runtime":"30 min","Genre":"Animation, Comedy","Director":"Boo Hwan Lim","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Loren Bouchard, Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Bob&rsquo;s landlord has been understanding about the consistent delay in rent, but payment time has come. After getting wind of Bob&rsquo;s financial trouble, Jimmy Pesto faces-off against his mortal enemy by introducing burgers to his own menu.","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"341","imdbID":"tt1876671","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input11 = jQuery.parseJSON( '{"Title":"Weekend at Mort&rsquo;s","Year":"2011","Rated":"TV-PG","Released":"08 May 2011","Season":"1","Episode":"11","Runtime":"22 min","Genre":"Animation, Comedy","Director":"Anthony Chun","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Scott Jacobson, Jim Dauterive (creator), Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"The family has to stay next door at Mort the Mortician&rsquo;s house since the restaurant is infested with mold. Bob and Linda double date with Mort and his mysterious Internet-girlfriend; while Tina entertains her siblings in the crematorium.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTUzMDU5OTYyMF5BMl5BanBnXkFtZTgwMTUzNzg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.1","imdbVotes":"339","imdbID":"tt1905230","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input12 = jQuery.parseJSON( '{"Title":"Lobsterfest","Year":"2011","Rated":"TV-PG","Released":"15 May 2011","Season":"1","Episode":"12","Runtime":"30 min","Genre":"Animation, Comedy","Director":"Boo Hwan Lim","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Aron Abrams, Gregory Thompson, Jim Dauterive (creator), Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Bob is likely the only person in town excited about the cancellation of this years &ldquo;Lobsterfest&rdquo; due to inclement weather. Bob strikes gold when he opens the restaurant regardless of the storm, and is celebrated by the masses.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMjIzOTcxMDg5MF5BMl5BanBnXkFtZTgwNTc0Njg0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.7","imdbVotes":"321","imdbID":"tt1919433","seriesID":"tt1561755","Type":"episode","Response":"True"} ');
 var input13 = jQuery.parseJSON( '{"Title":"Torpedo","Year":"2011","Rated":"TV-PG","Released":"22 May 2011","Season":"1","Episode":"13","Runtime":"30 min","Genre":"Animation, Comedy","Director":"Kyoung Hee Lim","Writer":"Loren Bouchard (created by), Loren Bouchard (developed by), Jim Dauterive (developed by), Dan Fybel, Rich Rinaldi, Lizzie Molyneux (staff writer), Kelvin Yu (staff writer), Scott Jacobson (staff writer), Holly Schlesinger (staff writer), Wendy Molyneux (staff writer), Nora Smith (staff writer), Steven Davis (staff writer)","Actors":"H. Jon Benjamin, Dan Mintz, Eugene Mirman, John Roberts","Plot":"Bob is giddy as ever when his role model, minor league pitcher Torpedo Jones, gives a shout-out to the restaurant during a game, but is blind-sided upon finding out Torpedo endorses his burgers for reasons which are morally shaky at best.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMjA5ODQ1MzIxMV5BMl5BanBnXkFtZTgwODYyMjk0MjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"324","imdbID":"tt1928417","seriesID":"tt1561755","Type":"episode","Response":"True"} ');


 //define and populate episode array
 var episodeList = [input,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13];
