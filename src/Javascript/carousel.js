class Carousel {
    constructor() {
        this.img = [
            document.getElementById("carousel-image-0"),
            document.getElementById("carousel-image-1"),
            document.getElementById("carousel-image-2"),
            document.getElementById("carousel-image-3"),
            document.getElementById("carousel-image-4"),
            document.getElementById("carousel-image-5")
        ];

        this.currentImage = 2;

        this.img.forEach((image, index) => {
            image.addEventListener('click', () => {
                this.rotateCarousel(index);
            });
        });

        this.updateCarousel();
    }

    rotateCarousel(indexClicked) {
        const temp = this.img[indexClicked];
        if (indexClicked < this.currentImage) {
            for (let i = indexClicked; i < this.currentImage; i++) {
                this.img[i] = this.img[i + 1];
            }
        } else if (indexClicked > this.currentImage) {
            for (let i = indexClicked; i > this.currentImage; i--) {
                this.img[i] = this.img[i - 1];
            }
        }
        this.img[this.currentImage] = temp;

        this.currentImage = indexClicked;

        this.updateCarousel();
    }

    updateCarousel() {
        this.img.forEach((image, index) => {
            image.style.order = index;
        });

        const redLine = document.querySelector('.red-line');
        redLine.style.left = (this.currentImage * 20) + '%'; // Adjusting left position based on current image
    }
}

// Créez une instance de la classe Carousel
const carousel = new Carousel();
