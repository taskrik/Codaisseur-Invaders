const KEY = {
    LEFT:  37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    A: 65,
    D: 68,
    W: 87,
    S: 83,
    SPACE: 32,
    ENTER: 13,
    F: 70
 };

export default class InputManager {
     constructor() {
      this.pressedKeys = { left: 0, right: 0, up: 0, down: 0, space: 0, enter: 0, left1: 0, right1: 0, up1: 0, down1: 0, fire: 0 };
  }

  handleKeys(value, e){
      let keys = this.pressedKeys;

      switch (e.keyCode) {
          case KEY.LEFT:
            keys.left1 = value;
            break;
          case KEY.A:
              keys.left  = value;
              break;
          case KEY.RIGHT:
          keys.right1  = value;
              break;
          case KEY.D:
              keys.right  = value;
              break;
          case KEY.UP:
              keys.up1  = value;
              break;
          case KEY.W:
              keys.up  = value;
              break;
          case KEY.DOWN:
              keys.down1  = value;
              break;
          case KEY.S:
              keys.down  = value;
              break;
          case KEY.F:
              keys.fire  = value;
              break;
          case KEY.SPACE:
              keys.space  = value;
              break;
          case KEY.ENTER:
              keys.enter = value;
              break;
      }

      this.pressedKeys = keys;
    }

  bindKeys() {
      window.addEventListener('keyup',   this.handleKeys.bind(this, false));
      window.addEventListener('keydown', this.handleKeys.bind(this, true));
  }

  unbindKeys() {
      window.removeEventListener('keyup', this.handleKeys);
      window.removeEventListener('keydown', this.handleKeys);
  }
}