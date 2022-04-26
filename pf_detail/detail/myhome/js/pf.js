
// 가로 스크롤 스크립트

class Example {
    constructor(options) {
        this.root = options.root;

        this.init();

        setTimeout(this.showImages.bind(this), 1000);
    }

    init() {
        this.scroll = new LocomotiveScroll({
            el: this.root,
            direction: 'horizontal',
            smooth: true,
            lerp: 0.05,
            scrollFromAnywhere: true, 
            
            tablet: {
                smooth: true,
                direction: 'horizontal',
                /* horizontalGesture: true, */
                breakpoint: 1440,
                initPosition: {x:500}
            },
            smartphone: {
                smooth: true,
                direction: 'horizontal',
                /* horizontalGesture: true, */
                breakpoint: 1440,
                initPosition: {x:500}
            },
            reloadOnContextChange: true	
        });

        this.images = this.root.querySelectorAll('.image');

        [].forEach.call(this.images, (image) => {
            image.addEventListener('click', () => {
                image.classList.add('-clicked');
                this.hideImages();
            });
        });
    }

    showImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-clicked');
            image.classList.add('-active');
        });
    }

    hideImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-active');
        });

        setTimeout(this.showImages.bind(this), 2000);
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    const example = new Example({
        root: document.querySelector('.scroll-animations-example')
    });
});

