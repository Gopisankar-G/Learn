/*var n=10, m =30,a;
a=(n<m)?n:m;
document.write(a); 
console.log();*/
function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }
