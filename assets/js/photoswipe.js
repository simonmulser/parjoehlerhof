var initPhotoSwipeFromDOM = function (gallerySelector) {

    var galleries = {
        galleryPanorama: [
            {
                superTiny: {
                    src: '../images/appartments/panorama/living_4_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/panorama/living_4_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/panorama/living_4_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/panorama/living_4_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/panorama/living_4_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/panorama/living_4_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/panorama/bed_2_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/panorama/bed_2_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/panorama/bed_2_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/panorama/bed_2_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/panorama/bed_2_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/panorama/bed_2_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/panorama/bath_1_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/panorama/bath_1_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/panorama/bath_1_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/panorama/bath_1_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/panorama/bath_1_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/panorama/bath_1_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/panorama/bath_2_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/panorama/bath_2_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/panorama/bath_2_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/panorama/bath_2_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/panorama/bath_2_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/panorama/bath_2_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
        ],
        galleryBergblick: [
            {
                superTiny: {
                    src: '../images/appartments/bergblick/living_1_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/bergblick/living_1_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/bergblick/living_1_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/bergblick/living_1_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/bergblick/living_1_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/bergblick/living_1_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/bergblick/living_2_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/bergblick/living_2_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/bergblick/living_2_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/bergblick/living_2_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/bergblick/living_2_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/bergblick/living_2_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/bergblick/bed_1_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/bergblick/bed_1_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/bergblick/bed_1_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/bergblick/bed_1_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/bergblick/bed_1_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/bergblick/bed_1_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/bergblick/bath_2_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/bergblick/bath_2_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/bergblick/bath_2_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/bergblick/bath_2_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/bergblick/bath_2_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/bergblick/bath_2_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
        ],
        galleryWaldruhe: [
            {
                superTiny: {
                    src: '../images/appartments/waldruhe/living_3_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/waldruhe/living_3_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/waldruhe/living_3_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/waldruhe/living_3_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/waldruhe/living_3_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/waldruhe/living_3_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/waldruhe/bed_1_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/waldruhe/bed_1_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/waldruhe/bed_1_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/waldruhe/bed_1_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/waldruhe/bed_1_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/waldruhe/bed_1_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/waldruhe/bed_4_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/waldruhe/bed_4_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/waldruhe/bed_4_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/waldruhe/bed_4_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/waldruhe/bed_4_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/waldruhe/bed_4_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
            {
                superTiny: {
                    src: '../images/appartments/waldruhe/bath_1_480.jpg',
                    w: '480',
                    h: '320'
                },
                tiny: {
                    src: '../images/appartments/waldruhe/bath_1_736.jpg',
                    w: '736',
                    h: '491'
                },
                small: {
                    src: '../images/appartments/waldruhe/bath_1_840.jpg',
                    w: '840',
                    h: '560'
                },
                medium: {
                    src: '../images/appartments/waldruhe/bath_1_980.jpg',
                    w: '980',
                    h: '653'
                },
                large: {
                    src: '../images/appartments/waldruhe/bath_1_1280.jpg',
                    w: '1280',
                    h: '853'
                },
                superLarge: {
                    src: '../images/appartments/waldruhe/bath_1_1500.jpg',
                    w: '1500',
                    h: '1000'
                },
            },
        ]
    }

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedGalleryItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedGalleryItem) {
            return;
        }

        if (!clickedGalleryItem.getAttribute("gallery-index")) {
            return;
        }

        var index = parseInt(clickedGalleryItem.getAttribute("gallery-index"));

        // find gallery
        var clickedGallery = closest(eTarget, function (el) {
            return (el.tagName && el.id.startsWith('gallery'));
        });

        if (!clickedGallery) {
            return;
        }

        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = galleries[galleryElement.id];

        // define options (if needed)
        options = {
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

        // create variable that will store real size of viewport
        var realViewportWidth,
            currentImageSize = 'none',
            firstResize = true,
            imageSrcWillChange;

        // beforeResize event fires each time size of gallery viewport updates
        gallery.listen('beforeResize', function () {
            // gallery.viewportSize.x - width of PhotoSwipe viewport
            // gallery.viewportSize.y - height of PhotoSwipe viewport
            // window.devicePixelRatio - ratio between physical pixels and device independent pixels (Number)
            //                          1 (regular display), 2 (@2x, retina) ...


            // calculate real pixels when size changes
            realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;
            // Code below is needed if you want image to switch dynamically on window.resize

            // Find out if current images need to be changed
            if (currentImageSize !== 'superTiny' && realViewportWidth < 480) {
                currentImageSize = 'superTiny';
                imageSrcWillChange = true;
            } else if (currentImageSize !== 'tiny' && realViewportWidth < 736) {
                currentImageSize = 'tiny';
                imageSrcWillChange = true;
            } else if (currentImageSize !== 'small' && realViewportWidth < 840) {
                currentImageSize = 'small';
                imageSrcWillChange = true;
            } else if (currentImageSize !== 'medium' && realViewportWidth < 980) {
                currentImageSize = 'medium';
                imageSrcWillChange = true;
            } else if (currentImageSize !== 'large' && realViewportWidth < 1280) {
                currentImageSize = 'large';
                imageSrcWillChange = true;
            } else if (currentImageSize !== 'superLarge' && realViewportWidth >= 1500) {
                currentImageSize = 'superLarge';
                imageSrcWillChange = true;
            }

            // Invalidate items only when source is changed and when it's not the first update
            if (imageSrcWillChange && !firstResize) {
                // invalidateCurrItems sets a flag on slides that are in DOM,
                // which will force update of content (image) on window.resize.
                gallery.invalidateCurrItems();
            }

            if (firstResize) {
                firstResize = false;
            }

            imageSrcWillChange = false;

        });


        // gettingData event fires each time PhotoSwipe retrieves image source & size
        gallery.listen('gettingData', function (index, item) {

            // Set image source & size based on real viewport width
            if (currentImageSize === 'superTiny') {
                item.src = item.superTiny.src;
                item.w = item.superTiny.w;
                item.h = item.superTiny.h;
            } else if (currentImageSize === 'tiny') {
                item.src = item.tiny.src;
                item.w = item.tiny.w;
                item.h = item.tiny.h;
            } else if (currentImageSize === 'small') {
                item.src = item.small.src;
                item.w = item.small.w;
                item.h = item.small.h;
            } else if (currentImageSize === 'medium') {
                item.src = item.medium.src;
                item.w = item.medium.w;
                item.h = item.medium.h;
            } else if (currentImageSize === 'large') {
                item.src = item.large.src;
                item.w = item.large.w;
                item.h = item.large.h;
            } else {
                item.src = item.superLarge.src;
                item.w = item.superLarge.w;
                item.h = item.superLarge.h;
            }

            // It doesn't really matter what will you do here, 
            // as long as item.src, item.w and item.h have valid values.
            // 
            // Just avoid http requests in this listener, as it fires quite often

        });

        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');
