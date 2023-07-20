import { Component, DataViewComponent, RibbonComponent, ThemeService } from "@mpulsesoftware/web3-components";
import { defaultProps, defaultState, generateStyle, generateTemplate, Props, State } from './app.meta';
import { ribbonDef } from '../defs/ribbon.def';
import { config } from '../defs/table.def';

class AppComponent extends Component<Props, State> {
  constructor() {
    super(defaultProps, defaultState);
    this.setStyle(generateStyle());
    this.setTemplate(generateTemplate());
    this.render();
    this.manageTheme();
  }
  
  protected afterRender(): void {
    const switcher = this.root?.getElementById('switch-btn');
    (this.root?.getElementById('ribbon') as RibbonComponent)?.configure(ribbonDef);
    (this.root?.getElementById('data-view') as DataViewComponent)?.configure(config);
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