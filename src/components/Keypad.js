// Code Keypad Component Here

function Keypad() {
  return (
    <div>
      <input
        type="password"
        //id = "pass"
        onChange={() => console.log("Entering password...")}
      />
    </div>
  );
}

export default Keypad;
