import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Semua Stasiun (Perjam)",
    <a
      href="https://api.aqms.giwangkanaka.co.id/api/readAllStasiun"
      target="_blank"
      rel="noopener noreferrer"
      className="Link"
    >
      Link
    </a>,
    "Aktif",
    "Membaca Data perJam Semua Stasiun",
    "API Key"
  ),
  createData(
    "ISPU Stasiun 1 (Perjam)",
    <a
      href="https://api.aqms.giwangkanaka.co.id/api/readStasiun1_hourly"
      target="_blank"
      rel="noopener noreferrer"
      className="Link"
    >
      Link
    </a>,
    "Aktif",
    "Membaca Data perJam ISPU Stasiun 1",
    "API Key"
  ),
  createData(
    "ISPU Stasiun 1 (Harian)",
    <a
      href="https://api.aqms.giwangkanaka.co.id/api/readStasiun1_daily"
      target="_blank"
      rel="noopener noreferrer"
      className="Link"
    >
      Link
    </a>,
    "Aktif",
    "Membaca Data Harian ISPU Stasiun 1",
    "API Key"
  ),
  createData(
    "ISPU Stasiun 1 (Semua)",
    <a
      href="https://api.aqms.giwangkanaka.co.id/api/readStasiun1"
      target="_blank"
      rel="noopener noreferrer"
      className="Link"
    >
      Link
    </a>,
    "Aktif",
    "Membaca Seluruh Data ISPU Stasiun 1",
    "API Key"
  ),
  createData(
    "ISPU Stasiun 2",
    <a
      href="https://api.aqms.giwangkanaka.co.id/api/readStasiun2_hourly"
      target="_blank"
      rel="noopener noreferrer"
      className="Link"
    >
      Link
    </a>,
    "Aktif",
    "Membaca Data perJam ISPU Stasiun 2",
    "API Key"
  ),
  createData(
    "ISPU Stasiun 3",
    <a
      href="https://api.aqms.giwangkanaka.co.id/api/readStasiun3_hourly"
      target="_blank"
      rel="noopener noreferrer"
      className="Link"
    >
      Link
    </a>,
    "Aktif",
    "Membaca Data perJam ISPU Stasiun 3",
    "API Key"
  ),
  createData(
    "ISPU Stasiun 4",
    <a
      href="https://api.aqms.giwangkanaka.co.id/api/readStasiun4_hourly"
      target="_blank"
      rel="noopener noreferrer"
      className="Link"
    >
      Link
    </a>,
    "Aktif",
    "Membaca Data perJam ISPU Stasiun 4",
    "API Key"
  ),
  createData(
    "ISPU Stasiun 5",
    <a
      href="https://api.aqms.giwangkanaka.co.id/api/readStasiun5_hourly"
      target="_blank"
      rel="noopener noreferrer"
      className="Link"
    >
      Link
    </a>,
    "Aktif",
    "Membaca Data perJam ISPU Stasiun 5",
    "API Key"
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nama API</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Deskripsi</TableCell>
            <TableCell align="right">Auth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
