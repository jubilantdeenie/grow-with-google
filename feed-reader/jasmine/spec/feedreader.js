
$(function() {
   
    describe('RSS Feeds', function() {

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });
   });


    /* New test suite "The menu" */
   describe("The menu", function() {
        let body = $('body');

        /* This test ensures the menu element is
         * hidden by default.*/

         it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
            });

        //double check this is working right
         it('is visible when the icon is clicked', function() {
                // First click of menu 
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
                // Second click of menu
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });
                               /*// let clicked = $('click');
                                let menu = $('icon-list');
                                let link = $('.menu-icon-link');

                                let callback = jasmine.createSpy('menu','.menu-icon-link');

                                if(link.click(callback)) {
                                    expect(body.hasClass('menu-hidden')).toBe(true);
                                }

                                // $(selector).click()
                                //let callback = jasmine.createSpy('menu','.menu-icon-link');
                  */

    /* New test suite "Initial Entries" */
    describe('Initial Entries', function() {
            
        /* When the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.*/
         beforeEach(function(done) {
            loadFeed(0, function () {
                done();
            });
          });

         it('has at least one entry', function() {
            let entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0); 
            });
        });
    });

    /* New test suite "New Feed Selection" */
    describe('New Feed Selection', function() {

        beforeEach(function(done){
            loadFeed(1, function(){

                feedOne = $('.feed').html();   
           
            loadFeed(0, function(){
                feedTwo = $('.feed').html();
                done();
            });
        });
     });

        it('changes content', function() {
            expect(feedOne).not.toBe(feedTwo);
        });
      //});
  // });
}());

 /*           const feed = $('.feed');
            const feedOne = $('.feed').html();
            //feedOne = feed.html();

            
        /* This test ensures when a new feed is loaded
         * by the loadFeed function the content changes.
         */

  /*          beforeEach(function(done) {
            loadFeed(0);
            Array.from(feed.children).forEach(function(entry) {
                feedOne.push(entry.innerText);
                });
            loadFeed(1, done); 
            }); 
*/



            /* beforeEach(function(done){
        loadFeed(0, function(){
        // set the value of feedOne here
        loadFeed(1, done); // This is inside the first loadFeed's callback because we only want to fetch the next set of feeds when the first one is done loading.
    });
});*/




       
      //     it('changes content', function() {
      //        Array.from(feed.children).forEach(function(entry,index) {
    //        expect(entry.innerText === feedOne[index]).toBe(false);
      //      });
    // });


/*
   The following sources have been referenced in the completion of this project.
    
   Ryan Boris "P4 Walkthrough: Feed Reader Jasmine Unit Tests"
   link: https://www.youtube.com/watch?v=7kOBXPbDmyw&feature=youtu.be
   
   Matthew Cranford "Feed Reader Walkthrough Series 2-4"
   link: https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/
   link: https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
   link: https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/


 'toBe',
      'toBeCloseTo',
      'toBeDefined',
      'toBeFalsy',
      'toBeGreaterThan',
      'toBeLessThan',
      'toBeNaN',
      'toBeNull',
      'toBeTruthy',
      'toBeUndefined',
      'toContain',
      'toEqual',
      'toHaveBeenCalled',
      'toHaveBeenCalledWith',
      'toMatch',
      'toThrow',
      'toThrowError'



   */