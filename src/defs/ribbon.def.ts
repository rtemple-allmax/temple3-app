import { RibbonData, RibbonSectionTypes } from 'temple3-ui';

export const ribbonDef: RibbonData= {
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
              icon: 'X',
              handler: () => console.log('Open Dataview')
            },
            {
              label: 'New',
              icon: 'X',
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
              icon: 'X',
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
              icon: 'X',
              handler: () => console.log('Open Properties')
            }
          ]
        },
        {
          label: 'Date Range',
          type: RibbonSectionTypes.Custom,
          customTemplate: '<h1>This is a custom template</h1>'
        },
        {
          label: 'Calculations',
          type: RibbonSectionTypes.Single,
          controls: [
            {
              label: 'Calculate',
              icon: 'X',
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
              icon: 'X',
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
              icon: 'X',
              handler: () => console.log('Intermittent Display Options')
            },
            {
              label: 'Resize Columns',
              icon: 'X',
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
              icon: 'X',
              handler: () => console.log('Arrange - Switch')
            },
            {
              label: 'Arrange',
              icon: 'X',
              handler: () => console.log('Arrange - Arrange')
            },
            {
              label: 'Close All',
              icon: 'X',
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