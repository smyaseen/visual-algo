import "./app.css";
import Item from "./Item";

const App = () => {
  const sort = () => {
    let divs = document.querySelector(".container");

    for (let i = 0; i < divs.children.length - 1; i++) {
      for (let j = i + 1; j < divs.children.length; j++) {
        if (
          parseInt(divs.children[i].style.height.split("px")[0]) >
          parseInt(divs.children[j].style.height.split("px")[0])
        ) {
          setTimeout(() => {
            divs.insertBefore(divs.children[i], divs.children[j]);
            divs.insertBefore(divs.children[j], divs.children[i]);
          }, 2000 * (i + 1));
        }
      }
    }
  };

  return (
    <>
      <button onClick={sort}>sort</button>
      <div className="container">
        <Item height="500px" no="5" />
        <Item height="700px" no="7" />
        <Item height="300px" no="3" />
        <Item height="800px" no="8" />
        <Item height="100px" no="1" />
      </div>
    </>
  );
};

export default App;
