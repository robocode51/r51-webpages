import imagesLoaded from 'imagesloaded';
import charming from 'charming';
import anime from 'animejs';
export function initHome(pageType = 'home') {
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // Window size.
    let win = { width: window.innerWidth, height: window.innerHeight };

    // some animation settings.
    const settings = {
        image: { duration: 900, delay: 0, easing: 'cubicBezier(0.8, 0, 0.2, 1)' },
        more: { duration: 900, delay: 0, easing: 'cubicBezier(0.8, 0, 0.2, 1)' },
        facts: { duration: 300, delay: 0, easing: 'cubicBezier(0.8, 0, 0.2, 1)' },
        title: { duration: 700, delay: 100, easing: 'cubicBezier(0.8, 0, 0.2, 1)' },
        description: { duration: 900, delay: 200, easing: 'easeOutExpo' },
        pagination: { duration: 300, delay: 200, easing: 'easeInOutQuad' },

        menuCtrl: { duration: 300, easing: 'cubicBezier(0.2, 1, 0.3, 1)' },
        menuItems: { duration: 300, easing: 'cubicBezier(0.2, 1, 0.3, 1)' },
        factsCtrl: { duration: 300, easing: 'linear' },
        gallery: { duration: 800, easing: 'cubicBezier(0.2, 1, 0.3, 1)' },
        navigationCtrls: { duration: 800, easing: 'cubicBezier(0.8, 0, 0.2, 1)' },
        previewCloseCtrl: { duration: 300, easing: 'easeOutExpo' },
        factsItems: { duration: 800, easing: 'cubicBezier(0.8, 0, 0.2, 1)' },
        expander: { duration: 800, easing: 'cubicBezier(0.8, 0, 0.2, 1)' },
        scale: pageType == 'home' ? 0.64 : 0.55
    };

    class Entry {
        constructor(el) {
            // this.DOM = {el: el};
            // this.init();
            this.DOM = {};
            this.DOM.el = el;
            this.hasBoundEvents = false; // ✅ Add this
            this.init();
        }
        init() {
            // DOM elements:
            // title
            this.DOM.title = this.DOM.el.querySelector('.section__content > .section__title');
            charming(this.DOM.title);
            this.DOM.titleLetters = this.DOM.title.querySelectorAll('span');
            // description
            this.DOM.description = this.DOM.el.querySelector('.section__content > .section__description');
            // image
            this.DOM.image = this.DOM.el.querySelector('.section__img > .section__img-inner');
            // more box
            this.DOM.more = this.DOM.el.querySelector('.section__more > .section__more-inner');
            // expander
            this.DOM.expander = this.DOM.el.querySelector('.section__expander');
            // facts
            this.DOM.facts = {
                wrapper: this.DOM.el.querySelector('.section__facts'),
                items: Array.from(this.DOM.el.querySelectorAll('.section__facts > .section__facts-item'))
            };
        }
        show(direction) {
            this.isHidden = false;
            return this.toggle(direction);
        }
        hide(direction) {
            this.isHidden = true;
            return this.toggle(direction);
        }
        toggle(direction) {
            this.direction = direction;
            return Promise.all([this.toggleTitle(),
            this.toggleDescription(),
            this.toggleImage(),
            this.toggleMore(),
            this.toggleFacts()]);
        }
        toggleTitle() {
            anime.remove(this.DOM.titleLetters);
            return anime({
                targets: this.DOM.titleLetters,
                duration: settings.title.duration,
                delay: (target, index) => index * 15 + settings.title.delay,
                easing: settings.title.easing,
                translateY: this.isHidden ? [0, this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', 0],
                opacity: {
                    value: this.isHidden ? 0 : 1,
                    duration: 1,
                    delay: (target, index) => this.isHidden ? settings.title.duration + settings.title.delay : settings.title.delay
                }
            }).finished;
        }
        toggleDescription() {
            anime.remove(this.DOM.description);
            return anime({
                targets: this.DOM.description,
                duration: settings.description.duration,
                delay: !this.isHidden ? settings.description.duration * 0.5 + settings.description.delay : settings.description.delay,
                easing: settings.description.easing,
                translateY: this.isHidden ? [0, this.direction === 'next' ? '-10%' : '10%'] : [this.direction === 'next' ? '20%' : '-20%', 0],
                opacity: this.isHidden ? 0 : 1
            }).finished;
        }
        toggleImage() {
            this.DOM.image.style.transformOrigin = !this.isHidden ? `50% ${this.direction === 'next' ? 0 : 100}%` : `50% 50%`;

            anime.remove(this.DOM.image);
            return anime({
                targets: this.DOM.image,
                duration: settings.image.duration,
                delay: settings.image.delay,
                easing: settings.image.easing,
                translateY: this.isHidden ? ['0%', this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', '0%'],
                scale: !this.isHidden ? [1.8, 1] : 1,
                opacity: {
                    value: this.isHidden ? 0 : 1,
                    duration: 1,
                    delay: this.isHidden ? settings.image.duration + settings.image.delay : settings.image.delay
                }
            }).finished;
        }
        toggleMore() {
            anime.remove(this.DOM.more);
            return anime({
                targets: [this.DOM.more, this.DOM.more.children],
                duration: settings.more.duration,
                delay: settings.more.delay,
                easing: settings.more.easing,
                translateY: this.isHidden ? ['0%', this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', '0%'],
                opacity: {
                    value: this.isHidden ? 0 : 1,
                    duration: (target, index) => index ? settings.more.duration / 3 : 1,
                    delay: (target, index) => index ?
                        this.isHidden ? 100 : settings.more.duration * 0.5 + settings.more.delay :
                        this.isHidden ? settings.more.duration + settings.more.delay : settings.more.delay
                }
            }).finished;
        }
        toggleFacts() {
            anime.remove(this.DOM.facts.items);
            return anime({
                targets: this.DOM.facts.items.slice(0, 2),
                duration: settings.facts.duration,
                delay: (target, index) => {
                    return !this.isHidden ? index * 40 + settings.facts.duration * 0.5 + settings.facts.delay : index * 40 + settings.facts.delay;
                },
                easing: settings.facts.easing,
                translateY: this.isHidden ? [this.DOM.facts.ty, this.direction === 'next' ? this.DOM.facts.ty - 20 : this.DOM.facts.ty + 20] : [this.direction === 'next' ? this.DOM.facts.ty + 20 : this.DOM.facts.ty - 20, this.DOM.facts.ty],
                opacity: this.isHidden ? 0 : 1
            }).finished;
        }
    };

    class Slideshow {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.userInteractedTimeout = null;
            this.userIsInteracting = false;
            this.init();
        }
        init() {
            // DOM elements.
            this.DOM.menuCtrl = this.DOM.el.querySelector('.sections__header > button.button-menu');
            this.DOM.factsContainer = this.DOM.el.querySelector('.facts');
            this.DOM.factsCtrls = {
                toggle: this.DOM.factsContainer.querySelector('.facts__toggle'),
                more: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--more'),
                less: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--less'),
            };
            this.DOM.previewCloseCtrl = this.DOM.factsContainer.querySelector('.button-contentclose');
            this.DOM.pagination = this.DOM.el.querySelector('.sections__index .sections__index-inner');
            this.DOM.navigation = this.DOM.el.querySelector('.sections__nav');
            this.DOM.navigation.prevCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--prev');
            this.DOM.navigation.nextCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--next');
            this.DOM.entries = Array.from(this.DOM.el.querySelectorAll('.section'), entry => new Entry(entry));
            this.entriesTotal = this.DOM.entries.length;
            this.currentPos = 0;

            this.layout();
            // Init/Bind events.
            this.initEvents();
            pageType == 'home' && this.startAutoScroll();
        }
        layout() {
            this.currentEntry = this.DOM.entries[this.currentPos];
            // Show or hide toggle based on fact count
            const toggleCtrl = this.DOM.factsCtrls.toggle;
            if (toggleCtrl) {
                const factCount = this.currentEntry?.DOM?.facts?.items?.length || 0;
                toggleCtrl.style.display = factCount > 2 ? 'block' : 'none';
            }
            const factEl = this.currentEntry.DOM.facts.items[0];
            const factHeight = factEl.getBoundingClientRect().height + parseFloat(window.getComputedStyle(factEl).marginBottom);
            const paddingFactsStyle = window.getComputedStyle(this.currentEntry.DOM.facts.wrapper);
            const paddingFacts = parseFloat(paddingFactsStyle.paddingTop) + parseFloat(paddingFactsStyle.paddingBottom);

            this.factsTranslation = pageType == 'home' ? win.height - 2 * factHeight - paddingFacts : '467';
            for (let i = 0; i <= this.entriesTotal - 1; ++i) {
                const entry = this.DOM.entries[i];
                // entry.DOM.expander.style.transform = `scale3d(${settings.scale},1,1) translate3d(0px,${this.factsTranslation}px,0px)`;
                entry.DOM.expander.style.transform = `translateY(${this.factsTranslation}px) scaleX(${settings.scale})`;
                for (let j = 0, len = entry.DOM.facts.items.length; j <= len - 1; ++j) {
                    entry.DOM.facts.ty = this.factsTranslation;
                    const item = entry.DOM.facts.items[j];
                    // item.style.transform = `translate3d(0px,${this.factsTranslation}px,0px)`;
                    item.style.transform = `translateY(${this.factsTranslation}px)`;
                    if (j > 1) {
                        item.style.opacity = 0;
                    }
                    else if (i === this.currentPos) {
                        item.style.opacity = 1;
                    }
                }
            }
        }
        initEvents() {
            if (this.hasBoundEvents) return; // ✅ Prevent multiple bindings

            // Navigation
            this.onPrevClick = () => this.navigate('prev');
            this.onNextClick = () => this.navigate('next');
            // this.DOM.navigation.prevCtrl.addEventListener('click', this.onPrevClick);
            // this.DOM.navigation.nextCtrl.addEventListener('click', this.onNextClick);
            this.DOM.navigation.prevCtrl.addEventListener('click', () => {
                this.handleUserInteraction();
                this.navigate('prev');
            });
            this.DOM.navigation.nextCtrl.addEventListener('click', () => {
                this.handleUserInteraction();
                this.navigate('next');
            });

            // Facts Container
            this.DOM.factsCtrls.toggle.addEventListener('click', () => this.toggleFactsContainer());

            // Facts (clickable facts)
            for (let i = 0; i <= this.entriesTotal - 1; ++i) {
                const entry = this.DOM.entries[i];
                entry.DOM.facts.items
                    .filter(fact => fact.classList.contains('section__facts-item--clickable'))
                    .forEach(clickableFact => clickableFact.addEventListener('click', () => this.preview(clickableFact.dataset.gallery)));
            }

            // Close preview
            this.DOM.previewCloseCtrl.addEventListener('click', () => this.closePreview());

            // Window resize
            this.onResize = () => {
                win = { width: window.innerWidth, height: window.innerHeight };
                this.layout();
                if (this.isFactsOpen) {
                    // Toggle the factsCtrls state
                    this.DOM.factsCtrls.more.style.opacity = 1;
                    this.DOM.factsCtrls.less.style.opacity = 0;
                    this.isFactsOpen = !this.isFactsOpen;
                    this.toggleNavigationCtrls({ opacity: 1, duration: 1 });
                    this.isFactsAnimating = false;
                }
                if (this.gallery) {
                    this.DOM.previewCloseCtrl.style.opacity = 0;
                    this.toggleGallery(this.gallery, { duration: 1, opacity: 0 }).then(() => this.gallery = null);
                }
                this.DOM.el.classList.remove('sections--factsopen');
            };
            this.hasBoundEvents = true; // ✅ Mark as bound
            window.addEventListener('resize', debounce(() => this.onResize(), 20));

            // Scroll navigation
            this.onWheelScroll = debounce((event) => {
                if (this.isEntriesAnimating || this.isFactsAnimating || pageType != 'home') return;

                if (event.deltaY > 0) {
                    this.navigate('next');
                } else if (event.deltaY < 0) {
                    this.navigate('prev');
                }
            }, 0); // adjust delay as needed

            window.addEventListener('wheel', this.onWheelScroll, { passive: true });

            ['click', 'wheel', 'touchstart', 'keydown'].forEach(evt =>
                window.addEventListener(evt, () => this.handleUserInteraction(), { passive: true })
            );
        }
        navigate(direction) {
            if (this.isEntriesAnimating || this.isFactsAnimating) return;
            this.isEntriesAnimating = true;
            // this.stopAutoScroll(); // optional: pause auto-scroll when user interacts
            // Store direction
            this.direction = direction;
            // Update currentPos
            const newPos = this.currentPos = this.direction === 'next' ?
                this.currentPos < this.entriesTotal - 1 ? this.currentPos + 1 : 0 :
                this.currentPos = this.currentPos > 0 ? this.currentPos - 1 : this.entriesTotal - 1;

            const newEntry = this.DOM.entries[newPos];

            this.update(newEntry);
        }
        handleUserInteraction() {
            if (this.userIsInteracting) return;

            this.userIsInteracting = true;
            this.stopAutoScroll();

            // Reset previous timeout
            if (this.userInteractedTimeout) {
                clearTimeout(this.userInteractedTimeout);
            }

            // Resume auto-scroll after 5s of inactivity
            this.userInteractedTimeout = setTimeout(() => {
                this.userIsInteracting = false;
                pageType == 'home' && this.startAutoScroll();
            }, 5000);
        }
        startAutoScroll() {
            this.autoScrollInterval = setInterval(() => {
                if (!this.isEntriesAnimating && !this.isFactsAnimating && !this.isFactsOpen) {
                    this.navigate('next');
                }
            }, 4000);
        }

        stopAutoScroll() {
            if (this.autoScrollInterval) {
                clearInterval(this.autoScrollInterval);
                this.autoScrollInterval = null;
            }
        }
        update(newEntry) {
            const updateFn = () => {
                // hide the current entry and show the next/previous one.
                // when both updatePageNumber, hide and show are finished:
                Promise.all([this.currentEntry.hide(this.direction), newEntry.show(this.direction), this.updatePageNumber()]).then(() => {
                    this.currentEntry.DOM.el.classList.remove('section--current');
                    newEntry.DOM.el.classList.add('section--current');
                    this.currentEntry = newEntry;
                    this.isEntriesAnimating = false;
                });
                // Update toggle visibility for new section
                const toggleCtrl = this.DOM.factsCtrls.toggle;
                if (toggleCtrl) {
                    const factCount = newEntry.DOM.facts.items.length;
                    toggleCtrl.style.display = factCount > 2 ? 'block' : 'none';
                }
            };

            if (this.isFactsOpen) {
                this.toggleFactsContainer().then(updateFn);
            }
            else {
                updateFn();
            }
        }
        updatePageNumber() {
            anime.remove(this.DOM.pagination);
            let halfway = false;
            return anime({
                targets: this.DOM.pagination,
                duration: settings.pagination.duration,
                easing: 'easeInOutQuad',
                translateY: [
                    { value: this.direction === 'next' ? '-100%' : '100%', delay: settings.pagination.delay },
                    { value: [this.direction === 'next' ? '100%' : '-100%', '0%'], delay: settings.pagination.duration }
                ],
                opacity: [
                    { value: 0, delay: settings.pagination.delay },
                    { value: [0, 1], delay: settings.pagination.duration }
                ],
                update: (anime) => {
                    if (anime.progress >= 40 && !halfway) {
                        halfway = true;
                        this.DOM.pagination.innerHTML = `0${this.currentPos + 1}`;
                    }
                }
            }).finished;
        }

        toggleFactsContainer() {
            if (this.isFactsAnimating || (this.isEntriesAnimating && !this.isFactsOpen)) {
                return;
            }

            this.isFactsAnimating = true;

            return Promise.all([
                this.toggleFactsCtrl(),
                this.animateExpander(),
                this.animateFactsItems()
            ]).then(() => {
                this.isFactsOpen = !this.isFactsOpen;
                this.isFactsAnimating = false;

                // ✅ Toggle scrollable class for scrolling behavior
                // this.currentEntry.DOM.facts.wrapper.classList.toggle('scrollable', this.isFactsOpen);

                // ✅ Toggle expanded class for background color on expander
                this.currentEntry.DOM.expander.classList.toggle('expanded', this.isFactsOpen);
            });
        }
        preview(gallery) {
            if (this.isFactsAnimating || !gallery) return;
            this.isFactsAnimating = true;

            this.gallery = gallery;
            this.DOM.el.classList.add('sections--factsopen');
            Promise.all([
                this.toggleNavigationCtrls({
                    opacity: 0
                }),
                this.toggleFactsCtrl({
                    delay: 0,
                    opacity: 0
                }),
                this.animateExpander({
                    translateY: 0,
                    scaleX: 1.05
                }),
                this.animateFactsItems({
                    translateY: 0,
                    opacity: 0,
                    delay: 0
                }),
                this.togglePreviewCloseCtrl({
                    opacity: 1,
                    delay: 800
                }),
                this.toggleGallery(gallery, {
                    opacity: 1,
                    scale: (target, index) => index ? [0.7, 1] : [1, 1], // just the images..
                    delay: (target, index) => index ? index * 100 + 700 : 700 // just the images..
                })
            ]).then(() => this.isFactsAnimating = false);
        }
        closePreview() {
            if (this.isFactsAnimating) return;
            this.isFactsAnimating = true;

            Promise.all([
                this.toggleNavigationCtrls({
                    opacity: 1
                }),
                this.toggleFactsCtrl({
                    delay: 600,
                    opacity: (target, index) => index,
                }),
                this.animateExpander({
                    translateY: 0,
                    scaleX: settings.scale
                }),
                this.animateFactsItems({
                    translateY: 0,
                    opacity: 1,
                    delay: 200
                }),
                this.togglePreviewCloseCtrl({
                    opacity: 0
                }),
                this.toggleGallery(this.gallery, {
                    opacity: 0
                })
            ]).then(() => {
                this.isFactsAnimating = false;
                this.gallery = null;
                this.DOM.el.classList.remove('sections--factsopen');
            });
        }
        animateExpander(animeconfig) {
            return this.animate(Object.assign({
                targets: this.currentEntry.DOM.expander,
                duration: settings.expander.duration,
                easing: settings.expander.easing,
                delay: !this.isFactsOpen ? 0 : 300,
                translateY: !this.isFactsOpen ? [this.factsTranslation, 0] : this.factsTranslation,
                scaleX: [settings.scale, settings.scale]
            }, animeconfig));
        }
        animateFactsItems(animeconfig) {
            return this.animate(Object.assign({
                targets: this.currentEntry.DOM.facts.items,
                duration: settings.factsItems.duration,
                easing: settings.factsItems.easing,
                delay: (target, index, total) => !this.isFactsOpen ? (index + 1) * 30 + 150 : (total - index - 1) * 30,
                translateY: !this.isFactsOpen ? [this.factsTranslation, 0] : this.factsTranslation,
                opacity: (target, index) => !this.isFactsOpen ? 1 : index > 1 ? 0 : 1
            }, animeconfig));
        }
        toggleFactsCtrl(animeconfig) {
            return this.animate(Object.assign({
                targets: [this.DOM.factsCtrls.more, this.DOM.factsCtrls.less],
                duration: settings.factsCtrl.duration,
                easing: settings.factsCtrl.easing,
                opacity: (target, index) => index ? !this.isFactsOpen ? 1 : 0 : !this.isFactsOpen ? 0 : 1
            }, animeconfig));
        }
        togglePreviewCloseCtrl(animeconfig) {
            return this.animate(Object.assign({
                targets: this.DOM.previewCloseCtrl,
                duration: settings.previewCloseCtrl.duration,
                easing: settings.previewCloseCtrl.easing
            }, animeconfig));
        }
        toggleNavigationCtrls(animeconfig) {
            return this.animate(Object.assign({
                targets: [this.DOM.navigation.prevCtrl, this.DOM.navigation.nextCtrl],
                duration: settings.navigationCtrls.duration,
                easing: settings.navigationCtrls.easing
            }, animeconfig));
        }
        toggleGallery(gallery, animeconfig) {
            return this.animate(Object.assign({
                targets: this.DOM.el.querySelectorAll(`#${gallery} > .section__gallery-item`),
                duration: settings.gallery.duration,
                easing: settings.gallery.easing
            }, animeconfig));
        }
        animate(opts) {
            anime.remove(opts.targets);
            return anime(opts).finished;
        }
    };

    // Preload all the images in the page..
    // imagesLoaded(document.querySelectorAll('img'), () => {
    //     requestAnimationFrame(() => {
    //         requestAnimationFrame(() => {
    //             document.body.classList.remove('loading');
    //             new Slideshow(document.querySelector('.sections'));
    //         });
    //     });
    // });

    imagesLoaded(document.querySelectorAll('img'), () => {
        setTimeout(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    document.body.classList.remove('loading');
                    new Slideshow(document.querySelector('.sections'));
                });
            });
        }, 1200); // wait 1.2s to finish the loading animation
    });

};
