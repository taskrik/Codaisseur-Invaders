import Bullet from './Bullet';
import GameObject from './GameObject';
import ship22 from './arien.png'

export default class Ship2 extends GameObject {
	constructor(args) {
		super({ position: args.position, onDie: args.onDie, speed: 4.5, radius: 15 });
		this.bullets = [];
		this.lastShot = 0;
	}

	update(keys) {
		if (keys.right) {
            this.position.x += this.speed;
        } else if (keys.left) {
            this.position.x -= this.speed;
        } else if (keys.up) {
            this.position.y -= this.speed;
        } else if (keys.down) {
            this.position.y += this.speed;
        }

		if (keys.fire && Date.now() - this.lastShot > 250) {
			const bullet = new Bullet({
				position: { x: this.position.x, y : this.position.y - 5 },
				direction : "up"
			});

			this.bullets.push(bullet);
			this.lastShot = Date.now();
		}
	}

	renderBullets(state) {
		let index = 0;
	    for (let bullet of this.bullets) {
	      if (bullet.delete) {
	        this.bullets.splice(index, 1);
	      } else {
	      	this.bullets[index].update();
	        this.bullets[index].render(state);
	      }
	      index++;
	    }
	}

	render(state) {
		if(this.position.x > state.screen.width) { 
		 	this.position.x = 0;
		}
	    else if(this.position.x < 0) {
	    	this.position.x = state.screen.width;
	    }
	    if(this.position.y > state.screen.height) {
	    	this.position.y = 0;
	    }
	    else if(this.position.y < 0) {
	    	this.position.y = state.screen.height;
	    }

	    this.renderBullets(state);
		const context = state.context;
		var imageObj1 = new Image();
			imageObj1.src = localStorage.getItem("img2")
		  context.save();
		  
		  // context.translate(this.position.x, this.position.y);
		  // context.strokeStyle = '#ffffff';
		  // context.fillStyle = '#ffffff';
		  // context.lineWidth = 2;
		  context.beginPath();
		  // context.moveTo(0, -25);
		  // context.lineTo(15, 15);
		  // context.lineTo(5, 7);
		  // context.lineTo(-5, 7);
		  // context.lineTo(-15, 15);
		  context.drawImage(imageObj1,this.position.x,this.position.y,80, 80);
		  context.closePath();
		  // context.fill();
		  // context.stroke();
		  
		  context.restore();
	  }
}