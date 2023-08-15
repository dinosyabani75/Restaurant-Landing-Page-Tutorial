import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const columns = [
  { id: "nama", label: "Nama", minWidth: 50 },
  { id: "asal", label: "Asal", minWidth: 50 },
  {
    id: "aqi",
    label: "AQI",
    minWidth: 50,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(nama, asal, aqi) {
  return { nama, asal, aqi };
}

const rows = [
  createData(
    "Jakarta",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Bandung",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Semarang",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Palangkaraya",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Pontianak",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Banjarmasin",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Samarinda",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),createData(
    "Jakarta",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Bandung",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Semarang",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Palangkaraya",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Pontianak",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Banjarmasin",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Samarinda",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Jakarta",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Bandung",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Semarang",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Palangkaraya",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Pontianak",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Banjarmasin",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Samarinda",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Jakarta",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Bandung",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Semarang",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Palangkaraya",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Pontianak",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Banjarmasin",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
  createData(
    "Samarinda",
    <img
      src="https://flagcdn.com/24x18/id.png"
      srcset="https://flagcdn.com/48x36/id.png 2x,
    https://flagcdn.com/72x54/id.png 3x"
      width="24"
      height="18"
      alt="Indonesia"
    />,
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500),
    randomNumber(1, 500)
  ),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Kota
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Keterangan
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
