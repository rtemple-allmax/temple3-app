import { ForComponent, IfComponent, RibbonComponent, TableComponent, ThemeService } from "temple3-ui";
import { ribbonDef } from "../defs/ribbon.def";
import { config } from "../defs/table.def";

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
    const table = document.getElementById('table');
    (table as TableComponent).configure(config);
  }
}

export { App };