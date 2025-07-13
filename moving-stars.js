// Moving Stars Background Animation
class MovingStars {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.numStars = 150;
        this.init();
    }
    
    init() {
        this.canvas.id = 'moving-stars';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -3;
            opacity: 0.8;
        `;
        
        document.body.appendChild(this.canvas);
        this.resize();
        this.createStars();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createStars() {
        this.stars = [];
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.8 + 0.2,
                twinkle: Math.random() * 0.02 + 0.01
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.stars.forEach(star => {
            // Move stars
            star.x += star.speedX;
            star.y += star.speedY;
            
            // Wrap around screen
            if (star.x < 0) star.x = this.canvas.width;
            if (star.x > this.canvas.width) star.x = 0;
            if (star.y < 0) star.y = this.canvas.height;
            if (star.y > this.canvas.height) star.y = 0;
            
            // Twinkling effect
            star.opacity += star.twinkle;
            if (star.opacity > 1 || star.opacity < 0.2) {
                star.twinkle = -star.twinkle;
            }
            
            // Draw star
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            this.ctx.fill();
            
            // Add glow effect for larger stars
            if (star.size > 1.5) {
                this.ctx.beginPath();
                this.ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(0, 212, 255, ${star.opacity * 0.3})`;
                this.ctx.fill();
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize moving stars when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MovingStars();
});