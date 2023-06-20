import { ForConfig } from "temple3-ui";

const gridForDef: ForConfig = {
  items: [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: '10' },
    { name: '11' },
    { name: '12' },
  ],
  template: (item: any): string => {
    return `
      <div class="grid-cell">${ item.name }</div>
    `;
  },
  style: `
    .grid-cell {
      border: var(--border);
      color: var(--color);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 450px;
      font-size: 3rem;
      box-shadow: var(--shadow);
      background-color: var(--bg);
    }
  `
}

export { gridForDef };