import { ColumnTypes, SortingState, TableConfig } from "@mpulsesoftware/web3-components";

const MEDIUM_BREAKPOINY = 800;
const SMALL_BREAKPOINT = 520;

export const config: TableConfig = {
  name: 'Test Table',
  width: 'calc(100% - (var{space-md} * 2))',
  maxHeight: '50vh',
  maxHeightMd: '70vh',
  maxHeightSm: '87vh',
  showBorders: true,
  alternation: true,
  showFilter: false,
  filterExpr: '',
  filterValue: '',
  mediumSize: MEDIUM_BREAKPOINY,
  smallSize: SMALL_BREAKPOINT,
  columns: [
    {
      label: () => 'ID',
      dataField: 'id',
      type: ColumnTypes.number,
      sortIndex: -1,
      sortingState: SortingState.None,
      editable: false,
      width: '100px',
      visible: () => window.innerWidth > MEDIUM_BREAKPOINY,
    },
    {
      label: () => window.innerWidth <= SMALL_BREAKPOINT ? 'Registration Data' : 'Name',
      dataField: 'name',
      type: ColumnTypes.text,
      sortIndex: 0,
      editable: false,
      sortingState: SortingState.None,
      visible: () => true,
      templateFnSm: (state: any, record: any) => {
        return `
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            .template-wrapper {
              padding: var(--space-sm);
              display: grid;
              grid-template-columns: 1fr 3fr;
            }
            .left {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .avatar {
              width: 80px;
              height: 80px;
              border-radius: 50%;
            }
            .right {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
            .registered {
              font-family: arial;
              font-size: 2rem;
              -webkit-transform: scaleX(-1) rotate(-35deg);
              transform: scaleX(-1) rotate(-35deg);
              color: green;
              padding-bottom: .5rem;
            }
            .not.registered {
              color: transparent;
            }
            .name {
              font-size: 1.5rem;
              font-family: 'Poppins', sans-serif;
            }
            .age {
              font-family: 'Poppins', sans-serif;
              font-size: 1.3rem;
            }
          </style>
          <div class="template-wrapper">
            <div class="left">
              <img class="avatar" src="./assets/images/${ record.avatar }.jpg"/>
            </div>
            <div class="right">
              <span class="name">${ record.name }</span>
              <span class="${ !record.registered ? 'not ' : '' } registered">L</span>
              <span class="age">${ record.age }</span>
            </div>
          </div>
        `;
      }
    },
    {
      label: () => 'Age',
      dataField: 'age',
      type: ColumnTypes.number,
      sortIndex: -1,
      editable: false,
      sortingState: SortingState.None,
      width: '100px',
      visible: () => window.innerWidth > SMALL_BREAKPOINT
    },
    {
      label: () => 'Registered',
      dataField: 'registered',
      type: ColumnTypes.boolean,
      sortIndex: -1,
      editable: false,
      sortingState: SortingState.None,
      visible: () => window.innerWidth > SMALL_BREAKPOINT
    }
  ],
  data: [
    {
      id: 0,
      name: 'Ben',
      age: 32,
      registered: true,
      avatar: 'face1'
    },
    {
      id: 1,
      name: 'Joe',
      age: 56,
      registered: true,
      avatar: 'face3'
    },
    {
      id: 2,
      name: 'Susan',
      age: 21,
      registered: false,
      avatar: 'face2'
    },
    {
      id: 3,
      name: 'Sam',
      age: 17,
      registered: true,
      avatar: 'face4'
    },
    {
      id: 4,
      name: 'Julie',
      age: 42,
      registered: false,
      avatar: 'face7'
    },
    {
      id: 5,
      name: 'Jane',
      age: 45,
      registered: true,
      avatar: 'face8'
    },
    {
      id: 6,
      name: 'John',
      age: 37,
      registered: false,
      avatar: 'face5'
    },
    {
      id: 7,
      name: 'Ben',
      age: 32,
      registered: true,
      avatar: 'face6'
    },
    {
      id: 8,
      name: 'Joe',
      age: 56,
      registered: true,
      avatar: 'face9'
    },
    {
      id: 9,
      name: 'Susan',
      age: 21,
      registered: false,
      avatar: 'face10'
    },
    {
      id: 10,
      name: 'Sam',
      age: 17,
      registered: true,
      avatar: 'face11'
    },
    {
      id: 11,
      name: 'Julie',
      age: 42,
      registered: false,
      avatar: 'face3'
    },
    {
      id: 12,
      name: 'Jane',
      age: 45,
      registered: true,
      avatar: 'face7'
    },
    {
      id: 13,
      name: 'John',
      age: 37,
      registered: false,
      avatar: 'face2'
    },
    {
      id: 14,
      name: 'Ben',
      age: 32,
      registered: true,
      avatar: 'face1'
    },
    {
      id: 15,
      name: 'Joe',
      age: 56,
      registered: true,
      avatar: 'face9'
    },
    {
      id: 16,
      name: 'Susan',
      age: 21,
      registered: false,
      avatar: 'face8'
    },
    {
      id: 17,
      name: 'Sam',
      age: 17,
      registered: true,
      avatar: 'face1'
    },
    {
      id: 18,
      name: 'Julie',
      age: 42,
      registered: false,
      avatar: 'face2'
    },
    {
      id: 19,
      name: 'Jane',
      age: 45,
      registered: true,
      avatar: 'face3'
    },
    {
      id: 20,
      name: 'John',
      age: 37,
      registered: false,
      avatar: 'face4'
    },
    {
      id: 21,
      name: 'Ben',
      age: 32,
      registered: true,
      avatar: 'face5'
    },
    {
      id: 22,
      name: 'Joe',
      age: 56,
      registered: true,
      avatar: 'face6'
    },
    {
      id: 23,
      name: 'Susan',
      age: 21,
      registered: false,
      avatar: 'face7'
    },
    {
      id: 24,
      name: 'Sam',
      age: 17,
      registered: true,
      avatar: 'face8'
    },
    {
      id: 25,
      name: 'Julie',
      age: 42,
      registered: false,
      avatar: 'face9'
    },
    {
      id: 26,
      name: 'Jane',
      age: 45,
      registered: true,
      avatar: 'face10'
    },
    {
      id: 27,
      name: 'John',
      age: 37,
      registered: false,
      avatar: 'face11'
    },
    {
      id: 28,
      name: 'Ben',
      age: 32,
      registered: true,
      avatar: 'face1'
    },
    {
      id: 29,
      name: 'Joe',
      age: 56,
      registered: true,
      avatar: 'face2'
    },
    {
      id: 30,
      name: 'Susan',
      age: 21,
      registered: false,
      avatar: 'face3'
    },
    {
      id: 31,
      name: 'Sam',
      age: 17,
      registered: true,
      avatar: 'face4'
    },
    {
      id: 32,
      name: 'Julie',
      age: 42,
      registered: false,
      avatar: 'face5'
    },
    {
      id: 33,
      name: 'Jane',
      age: 45,
      registered: true,
      avatar: 'face6'
    },
    {
      id: 34,
      name: 'John',
      age: 37,
      registered: false,
      avatar: 'face7'
    },
  ]
} 

