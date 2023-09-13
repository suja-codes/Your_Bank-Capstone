// const { response } = require("express");

function AllData() {
    const [data, setData] = React.useState('');

    // React hook
    React.useEffect(() => {
      // fetch all accounts from DB
      fetch('/account/all')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
          });
    }, []);
    console.log(data);

    function userNumber(i) {
      return (`User Account ${i+1} Summary`);
    }

    function userInfo(user) {
      return [user.name, user.email, user.password, user.balance];
    }

    if (data) {
      return (
        <>
        <NavBar/>
        <center><h5>ALL DATA STORE</h5></center>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((user, i) => (
            <Card
            index = {i}
            key = {i} 
            bgcolor="secondary"
            txtcolor="white"
            header={userNumber(i)}
            // text={userNumber(i)}
            allData={userInfo(user)}
            /> )
          )}
        </div>
        </>
      )
    }
}