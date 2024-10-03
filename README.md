- npm i
- npm start
- localhost:4200

Scroll down on tab 1 and click any item on this page, then go back from the routed page called "tab2" 

FIREFOX: 
- when going back from "tab2" the scroll position has changed, this happens with withResizeObserver true and false.

CHROME: 
- when going back the list is invisible until scrolled again when withResizeObserver is false, 
- also the scroll position changes, this happens with withResizeObserver true and false.
