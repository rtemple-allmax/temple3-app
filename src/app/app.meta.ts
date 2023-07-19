import { Nullable } from "@mpulsesoftware/web3-components";

interface Props {
  initial: boolean
}

interface State {
  initial: boolean;
}

const defaultProps: Props = { initial: true };
const defaultState: State = { initial: true };

const generateStyle = () => {
  return `
    .main {
      padding: var(--space-xl);
    }
    .target {
      color: red;
      font-size: 2rem;
    }
    .grid-header {
      background-color: var(--app-color);
      padding: var(--space-md);
    }
    .switcher {
      border: 1px solid var(--app-color-text-color);
      border-radius: 5px;
      color: var(--app-color-text-color);
      padding: var(--space-lg);
      background: transparent;
      font-size: 1rem;
    }
    .switcher:hover {
      color: var(--app-color);
      background: var(--app-color-text-color);
    }
  `;
};

const generateTemplate = (): string => {
  return `
    <nxt-frame>
      ${ header() }
      ${ main() }
      ${ footer() }
      ${ drawer() }
    </nxt-frame> 
  `;
};

const header = (): string => {
  return `
    <div slot="header">
      <nxt-flex justify-content="space-between" align-items="center" padding="0 var(--space-sm)">
        <div class="header-btn">X</div>
        <div>Operator10&reg; Water</div>
        <div class="header-btn">X</div>
      </nxt-flex>
    </div>
  `;
}

const main = (): string => {
  return `
    <div slot="main" class="main">
      <nxt-data-view id="data-view"></nxt-data-view>
    </div>
  `;
  // return `
  //   <div slot="main">
  //     <nxt-ribbon id="ribbon"></nxt-ribbon>
  //     <div class="main">
  //       <div class="grid-header">
  //         <button class="switcher" id="switch-btn">Show By Age</button>
  //       </div>
  //       <nxt-if id="grid-if">
  //         <nxt-data-grid id="table"/>
  //       </nxt-if>
  //       <nxt-if id="chart-if">
  //         <nxt-data-chart id="chart" type="bar" label-expr="name" value-expr="age" label="Ages"/>
  //       </nxt-if>
  //     </div>
  //   </div>
  // `;
};

const footer = (): string => {
  return `
    <div slot="footer">Footer</div>
  `;
}

const drawer = (): string => {
  return `
    <div slot="drawer">Im in the drawer</div>
  `;
}

export {
  defaultProps,
  defaultState,
  generateStyle,
  generateTemplate,
  Props,
  State
}
