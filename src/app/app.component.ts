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
    // this.showGrid(switcher);
    (this.root?.getElementById('ribbon') as RibbonComponent)?.configure(ribbonDef);
    (this.root?.getElementById('data-view') as DataViewComponent)?.configure(config);
    // (this.root?.getElementById('chart') as DataChartComponent)?.hydrate(config.data);
    // (this.root?.getElementById('test-text-box') as TextBoxComponent)?.addEventListener('valueChanged', (e: CustomEvent) => {
    //   const testTarget = this.root.getElementById('test-target');
    //   if (testTarget) {
    //     testTarget.innerHTML = `This value is set during custom event listener in App Component - ${ e.detail }`;
    //   }
    // })
    
    // if (switcher) {
    //   switcher.addEventListener('click', () => {
    //     if (this.gridVisible) {
    //       this.showChart(switcher);
    //     } else {
    //       this.showGrid(switcher);
    //     }
    //   });
    // }
  }

  // private showGrid(btn?: HTMLElement): void {
  //   (this.root?.getElementById('grid-if') as IfComponent)?.visible(true);
  //   (this.root?.getElementById('chart-if') as IfComponent)?.visible(false);
  //   this.gridVisible = true;
  //   if (btn) {
  //     btn.textContent = 'Show Chart';
  //   }
  // }

  // private showChart(btn?: HTMLElement): void {
  //   (this.root?.getElementById('grid-if') as IfComponent)?.visible(false);
  //   (this.root?.getElementById('chart-if') as IfComponent)?.visible(true);
  //   this.gridVisible = false;
  //   if (btn) {
  //     btn.textContent = 'Show Table';
  //   }
  // }
  
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