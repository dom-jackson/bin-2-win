import {
  Button,
  Container,
  RadioGroup,
  Stack,
  Radio,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
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
    <Container direction="column">
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <FormControl padding="1em">
          <FormLabel>Date & Time of Pickup</FormLabel>
          <Input
            type="datetime-local"
            name="date"
            placeholder="Date & Time of Pickup"
            value={date}
            onChange={handleChangeDate}
            focusBorderColor="green.400"
          />
        </FormControl>
        <FormControl padding="1em">
          <FormLabel>Pickup Address</FormLabel>
          <Input
            type="text"
            name="address"
            placeholder="Pickup Address"
            focusBorderColor="green.400"
          />
        </FormControl>
        <FormControl padding="1em">
          <FormLabel>Recycle Material</FormLabel>
          <RadioGroup name="recycle_material">
            <Stack direction="column">
              <Radio id="paper" value="Paper" colorScheme="green">
                Paper
              </Radio>
              <Radio id="cardboard" value="Cardboard" colorScheme="green">
                Cardboard
              </Radio>
              <Radio id="plastic" value="Plastic" colorScheme="green">
                Plastic
              </Radio>
              <Radio id="metal" value="Metal" colorScheme="green">
                Metal
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl padding="1em">
          <FormLabel>Approximate Weight (Kg)</FormLabel>
          <Input
            type="text"
            name="weight"
            placeholder="Weight in Kg"
            focusBorderColor="green.400"
          />
        </FormControl>
        <FormControl padding="1em">
          <FormLabel>Pickup Contact Number</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+61" />
            <Input
              type="tel"
              name="phone_number"
              placeholder="Pickup contact number"
              focusBorderColor="green.400"
            />
          </InputGroup>
        </FormControl>
        <FormControl padding="1em">
          <Button type="submit">Book Pickup</Button>
        </FormControl>
      </form>
    </Container>
  );
}
