import { ColumnTypes, SortingState, TableConfig } from "temple3-ui";

export const config: TableConfig = {
  columns: [
    {
      label: 'ID',
      dataField: 'id',
      type: ColumnTypes.number,
      sortIndex: -1,
      sortingState: SortingState.None
    },
    {
      label: 'Name',
      dataField: 'name',
      type: ColumnTypes.text,
      sortIndex: 0,
      sortingState: SortingState.None
    },
    {
      label: 'Age',
      dataField: 'age',
      type: ColumnTypes.number,
      sortIndex: -1,
      sortingState: SortingState.None
    },
    {
      label: 'Registered',
      dataField: 'registered',
      type: ColumnTypes.boolean,
      sortIndex: -1,
      sortingState: SortingState.None
    }
  ],
  data: [
    {
      id: 0,
      name: 'Ben',
      age: 32,
      registered: true
    },
    {
      id: 1,
      name: 'Joe',
      age: 56,
      registered: true
    },
    {
      id: 2,
      name: 'Susan',
      age: 21,
      registered: false
    },
    {
      id: 3,
      name: 'Sam',
      age: 17,
      registered: true
    },
    {
      id: 4,
      name: 'Julie',
      age: 42,
      registered: false
    },
    {
      id: 5,
      name: 'Jane',
      age: 45,
      registered: true
    },
    {
      id: 6,
      name: 'John',
      age: 37,
      registered: false
    },
  ]
} 

