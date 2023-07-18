import { Nullable } from "@mpulsesoftware/web3-components";

interface Props {
  initial: boolean
}

interface State {
  initial: boolean;
}

const defaultProps: Props = { initial: true };
const defaultState: State = { initial: true };

const generateStyle = (props: Nullable<Props>, state: Nullable<State>) => {
  return `
    .main {
      padding: var(--space-xl);
    }
    .target {
      color: red;
      font-size: 2rem;
    }
  `;
};

const generateTemplate = (props: Nullable<Props>, state: Nullable<State>): string => {
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
  // return `
  //   <div slot="main">
  //     <nxt-ribbon id="ribbon"></nxt-ribbon>
  //     <div class="main">
  //       <nxt-data-grid id="table"></nxt-data-grid>
  //     </div>
  //   </div>
  // `;
  return `
    <div slot="main">
      <nxt-ribbon id="ribbon"></nxt-ribbon>
      <nxt-text-box id="test-text-box" placeholder="Placeholder..."></nxt-text-box>
      <p class="target" id="test-target"></p>
    </div>
  `;
  
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
