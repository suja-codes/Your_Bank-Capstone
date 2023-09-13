function Login() {

    const [status, setStatus]  = React.useState('');

    function handle () {
      return true;
    }

    return (
        <>
        <NavBar/>
        <Card
            bgcolor="secondary"
            header="LOGIN"
            login={handle}
            submitButtonLogin="Login Successful"
            status={status}
        />
        </>
    )
}