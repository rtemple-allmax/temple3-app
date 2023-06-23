import { Nullable } from "@mpulsesoftware/web3-components";

interface Props {
  initial: boolean
}

interface State {
  initial: boolean;
}

const defaultProps: Props = { initial: true };
const defaultState: State = { initial: true };

const generateStyle = (props: Nullable<Props>, state: Nullable<State>) => '';

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
        <nxt-table id="table"></nxt-table>
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









// <t3-frame id="frame">
//       <div class="slot" slot="header">
//         <t3-flex justify-content="space-between" align-items="center">
//           <div class="header-btn">X</div>
//           <div>Operator10&reg; Water</div>
//           <div class="header-btn">X</div>
//         </t3-flex>
//       </div>
//       <div class="slot" slot="main">
//         <t3-ribbon id="ribbon"></t3-ribbon>
//         <t3-table
//           id="table"
//           data-config='{
//             "columns": [
//               {
//                 "label": "ID",
//                 "dataField": "id",
//                 "type": 2,
//                 "sortIndex": -1,
//                 "sortingState": 0
//               },
//               {
//                 "label": "Name",
//                 "dataField": "name",
//                 "type": 1,
//                 "sortIndex": 0,
//                 "sortingState": 0
//               },
//               {
//                 "label": "Age",
//                 "dataField": "age",
//                 "type": 2,
//                 "sortIndex": -1,
//                 "sortingState": 0
//               },
//               {
//                 "label": "Registered",
//                 "dataField": "registered",
//                 "type": 3,
//                 "sortIndex": -1,
//                 "sortingState": 0
//               }
//             ],
//             "data": [
//               {
//                 "id": 0,
//                 "name": "Ben",
//                 "age": 32,
//                 "registered": true
//               },
//               {
//                 "id": 1,
//                 "name": "Joe",
//                 "age": 56,
//                 "registered": true
//               },
//               {
//                 "id": 2,
//                 "name": "Susan",
//                 "age": 21,
//                 "registered": false
//               },
//               {
//                 "id": 3,
//                 "name": "Sam",
//                 "age": 17,
//                 "registered": true
//               },
//               {
//                 "id": 4,
//                 "name": "Julie",
//                 "age": 42,
//                 "registered": false
//               },
//               {
//                 "id": 5,
//                 "name": "Jane",
//                 "age": 45,
//                 "registered": true
//               },
//               {
//                 "id": 6,
//                 "name": "John",
//                 "age": 37,
//                 "registered": false
//               }
//             ]
//           }'>
//         </t3-table>
//       </div>
//       <div slot="footer"></div>
//       <div slot="drawer">Im in the drawer</div>
//     </t3-frame>