Memrise Course Pinner
=====================================

This is an updated version of the [Memrise Home Page - Pin Extra 
Courses](http://userscripts.org/scripts/show/174435.html) userscript originally 
by [carpiediem](http://userscripts.org/users/523128.html). Since 
[userscripts.org](http://userscripts.org) has been down for a while and 
Carpiediem's version hasn't been updated since July 2013, I've updated it to 
fix the display issues caused by Memrise's latest changes to the site.

I've taken the configuration instructions from the original userscript 
listing.

Configuration
-------------
By default, the script will list every course you have ever studied in the 
"Pinned" section of the home page. Since this probably isn't what you want, 
you'll need to configure the script by adding a list of courses you do want to 
add. First, you'll need to figure out the course IDs of each course you'd like 
to add to the Pinned section. This is the big number that you'll find in the 
URL of every page for that course. Once you know the IDs you want, follow 
these directions.

### For Tampermonkey in Chrome
1. Click the Tampermonkey button at the top of your browser, then click 
   "Dashboard" in the popup window.
![Tampermonkey Chrome](http://i.imgur.com/T8IjhjE.png "Tampermonkey Chrome")

2. Find "Memrise Home Page - Pin Extra Courses" in the the list of installed 
   userscripts and click on its name.
![Tampermonkey Chrome](http://i.imgur.com/3EZ0Z48.png "Tampermonkey Chrome")

3. In the script editor, find the square brackets on line 13. Type in the 
   course IDs that you'd like to add, seperating each number with a comma.

4. If you'd like to have the courses appear above the 3 pinned courses instead 
   of below them, change "true" to "false" on line 12.

5. Click the save button in the upper-left corner of the editor.
![Tampermonkey Chrome](http://i.imgur.com/S8amxEc.png "Tampermonkey Chrome")

### For other setups
I haven't tested script editing on other setups yet, but it should follow the 
same general steps as above. Give it a try.

Changelog
---------

#### 0.1.2 (141017)
* Fixed display issue caused by Memrise update
* Renamed 'Water' to 'Review' to reflect changes by Memrise. (0.1.2b)

#### 0.1.1 (130728)
* Forked original source code

More Userscripts
----------------
Check out my other userscripts:
* [Tumblr MP3 Downloader](https://github.com/little-vince/tumblr-download)
* [Google Play Music Close 
  Prompt](https://github.com/little-vince/google-music-prompt)
