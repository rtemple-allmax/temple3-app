import { FlexComponent, FrameComponent, GridComponent, RibbonComponent, ScrollComponent, ThemeService } from "temple3-ui";
import { ribbonDef } from "../defs/ribbon.def";

class App {
  public start() {
    this.registerComponents();
    this.configureComponents();
    this.manageTheme();
  }

  private registerComponents(): void {
    customElements.define('nxt-flex', FlexComponent);
    customElements.define('nxt-frame', FrameComponent);
    customElements.define('nxt-grid', GridComponent);
    customElements.define('nxt-ribbon', RibbonComponent);
    customElements.define('nxt-scroll', ScrollComponent);
  }

  private manageTheme(): void {
    new ThemeService().customize({
      appColor: '#0073a8',
      appColorTextColor: 'white',
      bg: 'white'
    });
  }

  private configureComponents(): void {
    const ribbon = document.getElementById('ribbon');
    (ribbon as RibbonComponent).configure(ribbonDef);
  }
}

export { App };