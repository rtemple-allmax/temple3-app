import { Component, RibbonComponent, TableComponent, TextBoxComponent, ThemeService } from "@mpulsesoftware/web3-components";
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
  }

  protected afterRender(): void {
    (this.root?.getElementById('ribbon') as RibbonComponent)?.configure(ribbonDef);
    (this.root?.getElementById('table') as TableComponent)?.configure(config);
    (this.root?.getElementById('test-text-box') as TextBoxComponent)?.addEventListener('valueChanged', (e: CustomEvent) => {
      console.log('text box value in App', e.detail);
      const testTarget = this.root.getElementById('test-target');
      if (testTarget) {
        testTarget.innerHTML = `This value is set during custom event listener is App Component - ${ e.detail }`;
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