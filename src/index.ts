import './styles/index.css';
import { FlexComponent, FrameComponent, GridComponent, RibbonComponent, ScrollComponent, ThemeService } from 'temple3-ui';

class App {
  start() {
    this.registerComponents();
    this.manageTheme();
  }

  registerComponents(): void {
    customElements.define('nxt-flex', FlexComponent);
    customElements.define('nxt-frame', FrameComponent);
    customElements.define('nxt-grid', GridComponent);
    customElements.define('nxt-ribbon', RibbonComponent);
    customElements.define('nxt-scroll', ScrollComponent);
  }

  manageTheme(): void {
    new ThemeService().customize({
      appColor: '#0073a8',
      appColorTextColor: 'white',
      bg: 'white'
    });
  }
}

new App().start();
