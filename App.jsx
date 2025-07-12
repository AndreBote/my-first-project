import { useState, useEffect} from 'react'
import styles from './App.module.css';


function App() {
  const lowercaseClass = 'text-lowercase';
  const text = 'Hello World!';
  const App1 = <h1 className={lowercaseClass}>{text}</h1>;

  return App1;
}

// export default app

// Parent Child

function ParentComponent() {
  const [name, setName] = useState('John')
  return (
    <>
      <UserComponent
        name="John"
        age={29}
        hobbies={["read books", "drink coffee"]}
        occupation="Software Engineer"
      />
      <ProfileComponent name={name} setName={setName}/>
      <FeedComponent />
    </>
  );
}

function UserComponent(props) {
  return (
  <>
    <h1> User Component </h1>
    <h2> Name: {props.name} </h2>
    <h2> Age: {props.age} </h2>
    <h2> Hobbies: {props.hobbies} </h2>
    <h2> Occupation: {props.occupation} </h2>
  </>
  );
}

function ProfileComponent(props) {
  return (
  <>
    <h1> Profile Component {props.name}</h1>
    <button onClick={() => props.setName('Mark')}>Change Name</button>
  </>
  );
}

function FeedComponent() {
  return <h1> Feed Component</h1>;
}

// export default ParentComponent

// Array function

function array() {
  const users = [
    { id: 1, name: 'Nathan', role: 'Web Developer' },
    { id: 2, name: 'John', role: 'Web Designer' },
    { id: 3, name: 'Jane', role: 'Team Leader' },
  ]

  return (
    <>
      <p>The currently active users list:</p>
      <ul>
      {
        users.map(function(user){
          // returns Nathan, then John, then Jane
          return (
            <li key={user.id}> 
              {user.name} as the {user.role}. ID: {user.id}
            </li>
          )
        })
      }
      </ul>
    </>
  );
}

// export default array

// Conditionals

function App2Parent() {
  return (
    <>
      <App2
        user="John"
      />
    </>
  );
}

function App2(props) {
  const { user } = props

  // let button = <button>Login</button>

  // if (user) {
  //   button = <button>Logout</button>
  // }

  // return (
  //   <>
  //     <h1>Hello there!</h1>
  //     {button}
  //   </>
  // )
  
  return (
    <>
      <h1>Hello there!</h1>
      { user? <button>Logout</button> : <button>Login</button> }
    </>
  )
}

function App3(props) {
  const newEmails = 2;

  return (
    <>
      <h1>Hello there!</h1>
      {newEmails > 0 &&
        <h2>
          You have {newEmails} new emails in your inbox.
        </h2>
      }
    </>
  );
}

// export default App3

// export default App2Parent

// User events

function App4() {
  const handleClick = (event) => {
    console.log("Hello World!");
    console.log(event);
  }
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// export default App4

//Show/Hide div element
function App5() {
  // State to hold the visibility status of the paragraph
  const [isParagraphVisible, setIsParagraphVisible] = useState(true);

  // Function to toggle the visibility status of the paragraph
  const toggleStatus = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <>
      <h1>Change UI based on click</h1>
      {isParagraphVisible && (
        <p>This paragraph will be shown/hidden on click</p>
      )}
      <button onClick={toggleStatus}>
        {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
      </button>
    </>
  );
}

// export default App5

// CSS/Styling

function App6() {
  return (
    <h1 style={{ color: 'red', textAlign: 'center'}}>Hello World</h1>
  );
}

const pStyle = {
  fontSize: '16px',
  color: 'blue'
}

function App7() {
  return (
    <>
      <p style={pStyle}>Hello World!</p>
      <p style={pStyle}>The weather is sunny today.</p>
    </>
  );
}

// export default App7

function App8() {
  return (
    <>
      <button className="btn btn-primary">Subscribe</button>
      <button className='px-5 py-2 text-white bg-blue-500 border-2'>
      Subscribe
      </button>
    </>
  );
}

function App9() {
  return (
    <>
      <p className={styles.BlueParagraph}>
        The weather is sunny today.
      </p>
      <p className={styles.GreenParagraph}>
        Still, don't forget to bring your umbrella!
      </p>
      
    </>
  );
}

// export default App8

// Forms

function Form() {
  const [username, setUsername] = useState();
  const [usernameError, setUsernameError] = useState();

  // Sends alert when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if(usernameError){
      alert('Unable to submit: Form contain errors');
    } else {
      alert(username);
    }
  };

  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);

    if (value.length <= 6) {
      setUsernameError('Username length must be more than 6 characters');
    } else {
      setUsernameError();
    }
  };

  const errorStyle = {
    color: 'red'
  }

  return (
    <form onSubmit={handleSubmit}>
      Username:
      <input
        type='text'
        value={username}
        onChange={handleUsername}
      />
      <p style={errorStyle}>{usernameError}</p>
      <button>Submit</button>
    </form>
  );
}

// export default Form;

// Network

function App10() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const task = await response.json();
    console.log(task)
    setTitle(task.title);
  };

  return <h1>{title}</h1>;
}

export default App10;

