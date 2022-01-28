import { useRef } from 'react';
// import {writeFile, utils} from 'xlsx/xlsx.esm.mjs';


export function ExportExcel() {
  const dataTableRef = useRef();

  function handleClick() {
    import('xlsx/xlsx.esm.mjs').then(({writeFile, utils}) => {
      var wb = utils.table_to_book(dataTableRef.current, { sheet: 'Sheet JS' });
    writeFile(wb, 'test.xlsx');
    })
  }

  return (
    <div className="ExportExcel">
      <h2>ExportExcel page</h2>
      <table ref={dataTableRef} border="1">
        <tbody>
          <tr>
            <td contenteditable colspan="4">
              Some merged cell
            </td>
          </tr>
          <tr>
            <td contenteditable>This</td>
            <td contenteditable>is</td>
            <td contenteditable>a</td>
            <td contenteditable>Test</td>
          </tr>
          <tr>
            <td contenteditable>Fee</td>
            <td contenteditable>Fi</td>
            <td contenteditable>Fo</td>
            <td contenteditable>Fum</td>
          </tr>
          <tr>
            <td contenteditable>Foo</td>
            <td contenteditable></td>
            <td contenteditable>Bar</td>
            <td contenteditable></td>
          </tr>
          <tr>
            <td contenteditable></td>
            <td contenteditable>Baz</td>
            <td contenteditable>☃</td>
            <td contenteditable>Qux</td>
          </tr>
          <tr>
            <td contenteditable>1</td>
            <td contenteditable>2</td>
            <td contenteditable>3</td>
            <td contenteditable>4</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Export Excel</button>
    </div>
  );
}
