import { RibbonConfig, RibbonSectionTypes } from '@mpulsesoftware/web3-components';

const SMALL_BREAKPOINT = 520;

export const ribbonDef: RibbonConfig= {
  smallSize: SMALL_BREAKPOINT,
  tabs: [
    {
      label: 'File',
      active: false,
      sections: []
    },
    {
      label: 'Home',
      active: true,
      sections: [
        {
          label: 'DataViews',
          type: RibbonSectionTypes.Row,
          controls: [
            {
              label: 'Open',
              icon: 'fa-regular fa-folder-open',
              handler: () => console.log('Open Dataview')
            },
            {
              label: 'New',
              icon: 'fa-regular fa-square-plus',
              handler: () => console.log('New Dataview')
            }
          ]
        },
        {
          label: 'Format',
          type: RibbonSectionTypes.Single,
          controls: [
            {
              label: 'Save',
              icon: 'fa-regular fa-rectangle-list',
              handler: () => console.log('Save Format')
            }
          ]
        },
        {
          label: 'Properties',
          type: RibbonSectionTypes.Single,
          controls: [
            {
              label: 'Properties',
              icon: 'fa-regular fa-clipboard',
              handler: () => console.log('Open Properties')
            }
          ]
        },
        {
          label: 'Date Range',
          type: RibbonSectionTypes.Single,
          controls: [
            {
              label: 'Date Range',
              icon: 'fa-regular fa-calendar-days',
              handler: () => console.log('Open Date Range')
            }
          ]
        },
        {
          label: 'Calculations',
          type: RibbonSectionTypes.Single,
          controls: [
            {
              label: 'Calculate',
              icon: 'fa-regular fa-clock',
              handler: () => console.log('Calculate')
            }
          ]
        },
        {
          label: 'Printing',
          type: RibbonSectionTypes.Single,
          controls: [
            {
              label: 'Print',
              icon: 'fa-solid fa-print',
              handler: () => console.log('Print')
            }
          ]
        },
        {
          label: 'Display Options',
          type: RibbonSectionTypes.Col,
          controls: [
            {
              label: 'Intermittent',
              icon: 'fa-regular fa-square-minus',
              handler: () => console.log('Intermittent Display Options')
            },
            {
              label: 'Resize Columns',
              icon: 'fa-solid fa-left-right',
              handler: () => console.log('Resize Columns')
            }
          ]
        },
        {
          label: 'Arrange',
          type: RibbonSectionTypes.Col,
          controls: [
            {
              label: 'Switch',
              icon: 'fa-regular fa-shuffle',
              handler: () => console.log('Arrange - Switch')
            },
            {
              label: 'Arrange',
              icon: 'fa-solid fa-layer-group',
              handler: () => console.log('Arrange - Arrange')
            },
            {
              label: 'Close All',
              icon: 'fa-regular fa-rectangle-xmark',
              handler: () => console.log('Arrange - Close All')
            },
          ]
        }
      ]
    },
    {
      label: 'Tools',
      active: false,
      sections: []
    },
    {
      label: 'Support',
      active: false,
      sections: []
    },
  ]
};