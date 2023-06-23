import { Component, RibbonComponent, TableComponent, ThemeService } from "@mpulsesoftware/web3-components";
import { defaultProps, defaultState, generateStyle, generateTemplate, Props, State } from './app.meta';
import { ribbonDef } from '../defs/ribbon.def';
import { config } from '../defs/table.def';

class AppComponent extends Component<Props, State> {
  constructor() {
    super(defaultProps, defaultState);
  }

  protected afterInit(props: Props, state: State): void {    
    this.setStyle(generateStyle(props, state));
    this.setTemplate(generateTemplate(props, state));

    this.manageTheme();

    setTimeout(() => {
      (this.root?.getElementById('ribbon') as RibbonComponent)?.configure(ribbonDef);
      (this.root?.getElementById('table') as TableComponent)?.configure(config);
    }, 0)
  }
  
  private manageTheme(): void {
    new ThemeService().customize({
      appColor: '#0073a8',
      appColorTextColor: 'white',
      bg: 'white'
    });
  }
}

export { AppComponent };