import React ,{ useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function BasicTable() {



    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:8080/api/clienti')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);


    
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Denominazione</TableCell>
            <TableCell align="right">Indirizzo</TableCell>
            <TableCell align="right">CAP</TableCell>

            <TableCell align="right">PartitaIVA</TableCell>
            <TableCell align="right">Telefono</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <TableRow key={row.CodiceCliente}>
              <TableCell component="th" scope="row">
                {row.Denominazione}
              </TableCell>
              <TableCell align="right">{row.Indirizzo}</TableCell>
              <TableCell align="right">{row.CAP}</TableCell>

              <TableCell align="right">{row.PartitaIVA}</TableCell>
              <TableCell align="right">{row.Telefono1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
