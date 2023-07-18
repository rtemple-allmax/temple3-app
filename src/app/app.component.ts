import { Component, DataGridComponent, RibbonComponent, TextBoxComponent, ThemeService } from "@mpulsesoftware/web3-components";
import { defaultProps, defaultState, generateStyle, generateTemplate, Props, State } from './app.meta';
import { ribbonDef } from '../defs/ribbon.def';
import { config } from '../defs/table.def';
import { combineLatest } from "rxjs";

class AppComponent extends Component<Props, State> {
  constructor() {
    super(defaultProps, defaultState);
    this.setStyle(generateStyle());
    this.setTemplate(generateTemplate());
    this.render();
    this.manageTheme();
  }
  
  protected afterRender(): void {
    (this.root?.getElementById('ribbon') as RibbonComponent)?.configure(ribbonDef);
    (this.root?.getElementById('table') as DataGridComponent)?.configure(config);
    (this.root?.getElementById('test-text-box') as TextBoxComponent)?.addEventListener('valueChanged', (e: CustomEvent) => {
      const testTarget = this.root.getElementById('test-target');
      if (testTarget) {
        testTarget.innerHTML = `This value is set during custom event listener in App Component - ${ e.detail }`;
      }
    })
  }
  
  private manageTheme(): void {
    new ThemeService().customize({
      appColor: '#0073a8',
      appColorTextColor: 'white',
      tableHeaderBgColor: '#0073a8',
      bg: 'white'
    });
  }
}

export { AppComponent };