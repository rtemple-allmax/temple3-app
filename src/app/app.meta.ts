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
  // return `
  //   <nxt-flex justify-content="space-evenly">
  //   <div>1 <nxt-text-box placeholder="Placeholder..."></nxt-text-box></div>
  //   <div>2 <nxt-text-box placeholder="Placeholder..."></nxt-text-box></div>
  //   <div>3 <nxt-text-box placeholder="Placeholder..."></nxt-text-box></div>
  //   </nxt-flex>
  //   <nxt-grid columns="repeat(3, 1fr)">
  //     <div>1 <nxt-text-box placeholder="Placeholder..."></nxt-text-box></div>
  //     <div>2 <nxt-text-box placeholder="Placeholder..."></nxt-text-box></div>
  //     <div>3 <nxt-text-box placeholder="Placeholder..."></nxt-text-box></div>
  //   </nxt-grid>
  //   <nxt-icon icon="fa-regular fa-clock" size="2rem"></nxt-icon>
  //   <nxt-data-grid id="table"></nxt-data-grid>
  // `;

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
    <div slot="main">
      <nxt-ribbon id="ribbon"></nxt-ribbon>
      <div class="main">
        <nxt-data-grid id="table"></nxt-data-grid>
      </div>
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
