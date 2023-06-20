import { ForComponent, IfComponent, RibbonComponent, ThemeService } from "temple3-ui";
import { ribbonDef } from "../defs/ribbon.def";
import { gridForDef } from "../defs/grid-for.def";

class App {
  public start() {
    this.configureComponents();
    this.manageTheme();
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
    const test = document.getElementById('test-btn');
    if (test) {
      test.addEventListener('click', () => this.testIf());
    }
    const forEl = document.getElementById('grid-for');
    if (forEl) {
      (forEl as ForComponent).configure(gridForDef)
    }

    const testDiv = document.getElementById('test-div');
    console.log(JSON.parse(testDiv.getAttribute('data-test')))
  }

  private testIf(): void {
    console.log('click')
    const gridIf = document.getElementById('test-if');
    const comp = gridIf as IfComponent;
    const state = comp.currentState;
    console.log('state', state);
    if (state) {
      comp.setState('render', !state.render)
    }
  }
}

export { App };