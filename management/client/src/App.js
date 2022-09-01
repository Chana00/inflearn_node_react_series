import logo from './logo.svg';
import './App.css';
import Customer, { Component } from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 50,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});


const customers = [{
  'id': 1,
  'name': '홍길동',
  'image': 'https://placeimg.com/64/64/1',
  'birthday': '981222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'name': '고예원',
  'image': 'https://placeimg.com/64/64/2',
  'birthday': '991120',
  'gender': '여자',
  'job': '개발자'
},
{
  'id': 3,
  'name': '이순신',
  'image': 'https://placeimg.com/64/64/3',
  'birthday': '940312',
  'gender': '남자',
  'job': '대학생'
},

]

function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => {
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />);
          })}
        </TableBody>
      </Table>

    </Paper>
  );
}

export default App;
