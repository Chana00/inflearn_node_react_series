import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
  return (
    <div>
      {customers.map(c => {
        return (<Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          job={c.job}
        />);
      })
      }
    </div>
  );
}

export default App;
