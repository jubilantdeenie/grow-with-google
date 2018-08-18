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
        /* This test ensures the menu element is
         * hidden by default.*/

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
            });

        it('is visible when the icon is clicked', function() {
                // First click of menu 
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
                 //Second click of menu
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

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
        //});
    });

    /* New test suite "New Feed Selection" */
    describe('New Feed Selection', function() {
        let feedOne = $('.feed').html();  
        let feedTwo = $('.feed').html();
        
        beforeEach(function(done){
            loadFeed(0, function(){
                feedOne = $('.feed').html();   
           });

            loadFeed(1, function(){
                let feedTwo = $('.feed').html();
                done();
            });
        });

        it('changes content', function() {
            expect(feedOne).not.toBe(feedTwo);
        });
    });
}());


/*
   The following sources have been referenced in the completion of this project.
    
   Ryan Boris "P4 Walkthrough: Feed Reader Jasmine Unit Tests"
   link: https://www.youtube.com/watch?v=7kOBXPbDmyw&feature=youtu.be
   
   Matthew Cranford "Feed Reader Walkthrough Series 2-4"
   link: https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/
   link: https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
   link: https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/

   Alain Cadenat
   link: https://www.youtube.com/watch?v=pPt4oOKNdEk

   */