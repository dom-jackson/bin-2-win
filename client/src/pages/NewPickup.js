import { useState } from 'react';

export function NewPickup() {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('New pick up booking', date);
  };

  const handleChangeDate = (e) => {
    setDate(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Book a Pickup</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="datetime-local"
          name="date"
          placeholder="Date & Time of Pickup"
          value={date}
          onChange={handleChangeDate}
        />
        <input type="text" name="address" placeholder="Pickup Address" />
        <input
          type="radio"
          id="paper"
          name="recycle_material"
          value="Paper"
        ></input>
        <label for="paper">Paper</label>
        <input
          type="radio"
          id="cardboard"
          name="recycle_material"
          value="Cardboard"
        ></input>
        <label for="cardboard">Cardboard</label>
        <input
          type="radio"
          id="plastic"
          name="recycle_material"
          value="Plastic"
        ></input>
        <label for="plastic">Plastic</label>
        <input
          type="radio"
          id="metal"
          name="recycle_material"
          value="Metal"
        ></input>
        <label for="metal">Metal</label>
        <input
          type="text"
          name="phone_number"
          placeholder="Pickup contact number"
        />
      </form>
    </div>
  );
}
