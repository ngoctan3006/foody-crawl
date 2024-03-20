import * as xlsx from 'xlsx';
import data from './data.json';

const parseExcel = () => {
  // create a new workbook, and add a worksheet name 'foody', and parse the data from the json file
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(data as any);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'foody');

  // write the workbook to a file
  xlsx.writeFile(workbook, 'dataset.xlsx');
};

parseExcel();
