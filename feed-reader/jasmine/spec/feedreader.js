$(function() {
   
    describe('RSS Feeds', () => {

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have a URL', () => {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        it('have a name', () => {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
   });


    /* New test suite "The menu" */
   describe("The menu", () => {
        /* This test ensures the menu element is
         * hidden by default and visible when clicked.*/

        it('is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
            });

        it('is visible when the icon is clicked', () => {
                // First click of menu 
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
                 //Second click of menu
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* New test suite "Initial Entries" */
    describe('Initial Entries', () => {
            
        /* When the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.*/
        beforeEach(function(done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('has at least one entry', () => {
            let entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0); 
        });
        //});
    });

    /* New test suite "New Feed Selection" */
    describe('New Feed Selection', () => {
        //Tests that there is an initial entry in the feed and the content changes.
        
        beforeEach((done) =>{
            loadFeed(0, function(){
                feedOne = $('.feed').html();  

                loadFeed(1, function(){
                    feedTwo = $('.feed').html();
                    done();
                });
            });
        });

        it('changes content', () => {
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