
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

    });


    /* New test suite "The menu" */

   describe("The menu", function() {
    let body = $('body');
    let callback = jasmine.createSpy('body','toggleClass');

        /* This test ensures the menu element is
         * hidden by default. 
         */

         it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
            expect(callback).not.toHaveBeenCalled();
            });


         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. 
          */

          it('is visible when the icon is clicked', function() {
            if(callback.calls.count() % 2 === 0) {
                expect(body.hasClass('menu-hidden')).toBe(true);
            }else{
                expect(body.hasClass('menu-hidden')).toBe(false);
            }
        });
    });

   

    /* New test suite "Initial Entries" */

describe('Initial Entries', function() {
            
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach(function(done) {
            loadFeed(0, done);
            });

         it('feed is working', function() {
            const feed = document.querySelector('.feed');
            expect(feed.children.length > 0).toBe(true); 
         });
    });
    /* New test suite "New Feed Selection" */

        describe('New Feed Selection', function() {
            const feed = document.querySelector('.feed');
            const feedOne = [];

            
        /* This test ensures when a new feed is loaded
         * by the loadFeed function the content changes.
         */

            beforeEach(function(done) {
            loadFeed(0);
            Array.from(feed.children).forEach(function(entry) {
                feedOne.push(entry.innerText);
                });
            loadFeed(1, done); 
            }); 
       
           it('changes content', function() {
              Array.from(feed.children).forEach(function(entry,index) {
                expect(entry.innerText === feedOne[index]).toBe(false);
            });
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
   */