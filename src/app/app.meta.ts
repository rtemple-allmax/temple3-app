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
    .table-wrapper {
      padding: var(--space-lg);
    }
  `;
};

const generateTemplate = (props: Nullable<Props>, state: Nullable<State>): string => {
  return `
    <nxt-frame>
      <div slot="header">
        <nxt-flex justify-content="space-between" align-items="center">
          <div class="header-btn">X</div>
          <div>Operator10&reg; Water</div>
          <div class="header-btn">X</div>
        </nxt-flex>
      </div>
      <div slot="main">
        <nxt-ribbon id="ribbon"></nxt-ribbon>
        <div class="table-wrapper">
          <nxt-data-grid id="table"></nxt-data-grid>
        </div>
      </div>
      <div slot="footer">Footer</div>
      <div slot="drawer">Im in the drawer</div>
    </nxt-frame> 
  `;
};

export {
  defaultProps,
  defaultState,
  generateStyle,
  generateTemplate,
  Props,
  State
}
