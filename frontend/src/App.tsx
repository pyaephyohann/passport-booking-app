import "./App.css";

const App = () => {
  return (
    <div className="app">
      <a
        className="btn"
        id="btn1"
        style={{ textDecoration: "none", color: "white" }}
        href={`/passport-booking-app`}
      >
        Passport Booking App
      </a>
      <a
        className="btn"
        id="btn2"
        style={{ textDecoration: "none", color: "white" }}
        href={`/other`}
      >
        Other
      </a>
    </div>
  );
};

export default App;
