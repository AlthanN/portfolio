import { useEffect, useRef } from 'react';

// Natural floating elements colors - think dandelion seeds, pollen, small petals
const floatingColors = [
  '#F8F3D6', // Off-white/cream
  '#F5F0E1', // Light cream
  '#FFF8E7', // Warm white
  '#F2E8D5', // Pale beige
  '#E8E3D3', // Soft gray-beige
  '#F5EDDC', // Light parchment
];

class FloatingElement {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Smaller, more delicate sizes like natural floating particles
    this.size = Math.random() * 20 + 5; // 5-25px
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    
    // Slower, more natural drifting motion
    this.dx = (Math.random() - 0.5) * 1.5;
    this.dy = (Math.random() - 0.5) * 1.5;
    
    // Gentle floating motion variables
    this.floatOffset = Math.random() * Math.PI * 2;
    this.floatAmplitude = Math.random() * 2 + 1;
    this.floatSpeed = Math.random() * 0.03 + 0.01;
    
    this.color = floatingColors[Math.floor(Math.random() * floatingColors.length)];
    this.opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4 opacity
    
    // Create a slightly irregular shape (not perfect circles)
    this.shapePoints = this.generateShapePoints();
  }

  generateShapePoints() {
    const points = [];
    const numPoints = 6 + Math.floor(Math.random() * 4); // 6-9 points
    
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const variance = 0.3 + Math.random() * 0.4; // 0.3-0.7 variance
      const radius = this.size * variance;
      points.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      });
    }
    
    return points;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    
    // Gentle rotation
    this.ctx.rotate(this.floatOffset + Date.now() * 0.0001);
    
    // Draw irregular floating element
    this.ctx.beginPath();
    this.ctx.moveTo(this.shapePoints[0].x, this.shapePoints[0].y);
    
    for (let i = 1; i < this.shapePoints.length; i++) {
      this.ctx.lineTo(this.shapePoints[i].x, this.shapePoints[i].y);
    }
    this.ctx.closePath();
    
    // Soft gradient fill
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
    gradient.addColorStop(0, this.color.replace(')', `, ${this.opacity})`).replace('rgb', 'rgba'));
    gradient.addColorStop(1, this.color.replace(')', `, ${this.opacity * 0.3})`).replace('rgb', 'rgba'));
    
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    
    // Very subtle outline
    this.ctx.strokeStyle = this.color.replace(')', `, ${this.opacity * 0.5})`).replace('rgb', 'rgba');
    this.ctx.lineWidth = 0.5;
    this.ctx.stroke();
    
    this.ctx.restore();
  }

  attractTo(mouse) {
    const dist = Math.hypot(this.x - mouse.x, this.y - mouse.y);
    if (mouse.x !== null && dist < 150) {
      // Gentle, slower attraction
      this.x += (mouse.x - this.x) * 0.05;
      this.y += (mouse.y - this.y) * 0.05;
    }
  }

  update() {
    // Base movement
    this.x += this.dx;
    this.y += this.dy;
    
    // Gentle floating motion
    this.y += Math.sin(Date.now() * this.floatSpeed + this.floatOffset) * 0.3;
    
    // Boundary check with wrap-around (like natural floating particles)
    if (this.x > this.canvas.width + this.size) {
      this.x = -this.size;
    } else if (this.x < -this.size) {
      this.x = this.canvas.width + this.size;
    }
    
    if (this.y > this.canvas.height + this.size) {
      this.y = -this.size;
    } else if (this.y < -this.size) {
      this.y = this.canvas.height + this.size;
    }
    
    this.draw();
  }
}

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const floatingElements = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create more, smaller floating elements for a natural feel
    for (let i = 0; i < 40; i++) {
      floatingElements.push(new FloatingElement(canvas, ctx));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply a very subtle gradient background for the intermediate zone
      // This helps the floating elements stand out while staying subtle
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(173, 216, 230, 0.05)'); // Very light sky blue
      gradient.addColorStop(0.5, 'rgba(144, 238, 144, 0.05)'); // Very light green
      gradient.addColorStop(1, 'rgba(139, 69, 19, 0.05)'); // Very light brown
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Find the closest element to the mouse
      let closest = null;
      let minDist = Infinity;

      if (mouse.current.x !== null) {
        for (let element of floatingElements) {
          const dist = Math.hypot(element.x - mouse.current.x, element.y - mouse.current.y);
          if (dist < minDist) {
            minDist = dist;
            closest = element;
          }
        }
      }

      // Update all elements
      for (let element of floatingElements) {
        element.update();
      }

      // Gently attract only the closest element
      if (closest && mouse.current.x !== null) {
        closest.attractTo(mouse.current);
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ 
        pointerEvents: 'none',
        opacity: 0.7 // Reduced opacity for subtlety
      }}
    />
  );
}