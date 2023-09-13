function Withdraw() {
    // const [show, setShow]     = React.useState(true);
    // const [status, setStatus] = React.useState('');
    
    function handle () {
      return true;
    }

    return (
        <>
        <NavBar/>
        <Card
            bgcolor="primary"
            header="WITHDRAW"
            status={status}
            withdraw={handle}
            submitButtonWithdraw="Withdrawl Successful"
        />
        </>
    )
}